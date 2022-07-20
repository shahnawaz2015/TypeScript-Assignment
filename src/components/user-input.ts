import { BaseComponent } from "./base-component";
import { validate } from "../util/validation";
import { autobind } from "../decorators/autobind";
import { UserList } from "./user-list";
import { User } from "../models/user";
import { Role } from "../enums/role";
import { Validatable } from "../interfaces/all-interfaces";


// UserInput class
export class UserInput extends BaseComponent<HTMLDivElement, HTMLFormElement> {
  static ids: HTMLInputElement;
  static firstName: HTMLInputElement;
  static middleName: HTMLInputElement;
  static lastName: HTMLInputElement;
  static emailId: HTMLInputElement;
  static phoneNo: HTMLInputElement;
  static role: HTMLInputElement;
  static address: HTMLInputElement;
  static dateTCreated: HTMLInputElement;



  constructor() {
    super('project-input', 'app', true, 'user-input');
    UserInput.ids = this.element.querySelector('#ids') as HTMLInputElement;
    UserInput.firstName = this.element.querySelector('#fname') as HTMLInputElement;
    UserInput.middleName = this.element.querySelector('#mname') as HTMLInputElement;
    UserInput.lastName = this.element.querySelector('#lname') as HTMLInputElement;
    UserInput.emailId = this.element.querySelector('#email') as HTMLInputElement;
    UserInput.phoneNo = this.element.querySelector('#phone') as HTMLInputElement;
    UserInput.role = this.element.querySelector('#role') as HTMLInputElement;
    UserInput.address = this.element.querySelector('#address') as HTMLInputElement;
    UserInput.dateTCreated = this.element.querySelector('#dateCreated') as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
    this.findCancelBtn();
    this.createNewOpenModal();
    this.closeBtnClick();
  }

  renderContent() {}

  private gatherUserInput(): User | void {
    const entered_Ids = UserInput.ids.value;
    const entered_FirstName = UserInput.firstName.value;
    const entered_MiddleName = UserInput.middleName.value;
    const entered_LastName = UserInput.lastName.value;
    const entered_EmailId = UserInput.emailId.value;
    const entered_PhoneNo = UserInput.phoneNo.value;
    const entered_Role = UserInput.role.value;
    const entered_Address = UserInput.address.value;
    const entered_dateTCreated = UserInput.dateTCreated.value;

    const errorInput = document.getElementById("errorInput")! as HTMLElement; // for error showing div

    const firstNameValidatable: Validatable = {
      value: entered_FirstName,
      required: true
    };
    const middleNameValidatable: Validatable = {
      value: entered_MiddleName,
      required: true
    };
    const lastNameValidatable: Validatable = {
      value: entered_LastName,
      required: true
    };
    const emailIdValidatable: Validatable = {
      value: entered_EmailId,
      required: true
    };
    const phoneNoValidatable: Validatable = {
      value: entered_PhoneNo,
      required: true
    };
    const roleValidatable: Validatable = {
      value: entered_Role,
      required: true
    };
    const addressValidatable: Validatable = {
      value: entered_Address,
      required: true
    };
    
    if (
      !validate(firstNameValidatable) ||
      !validate(middleNameValidatable) ||
      !validate(lastNameValidatable) ||
      !validate(emailIdValidatable) ||
      !validate(phoneNoValidatable) ||
      !validate(roleValidatable) ||
      !validate(addressValidatable)
    ) {
      errorInput.classList.add('show');
      return;
    } else {
      errorInput.classList.remove('show');
      return {id: entered_Ids, fName: entered_FirstName, mName: entered_MiddleName, lName: entered_LastName, email: entered_EmailId, phone: entered_PhoneNo, roles: entered_Role, address: entered_Address, dateCreated: entered_dateTCreated};
    }
  }

  protected static clearInputs() {
    UserInput.ids.value = '';
    UserInput.firstName.value = '';
    UserInput.middleName.value = '';
    UserInput.lastName.value = '';
    UserInput.emailId.value = '';
    UserInput.phoneNo.value = '';
    UserInput.role.value = '';
    UserInput.address.value = '';
    UserInput.dateTCreated.value = '';
    UserInput.updateButtonText('Save');
    UserInput.updateTitleText('Add');
  }

  protected static updateButtonText(text: string) {
    const submitButton = document.getElementById('submitBtn')! as HTMLButtonElement;
    submitButton.textContent = text;
  }
  protected static updateTitleText(text: string) {
    const submitButton = document.getElementById('textUpdate')! as HTMLButtonElement;
    submitButton.textContent = text;
  }

  // Find Cancel Button and remove Input feilds data
  public findCancelBtn() {
    const cancelButton = document.getElementById('cancelBtn')! as HTMLElement;
    const errorInput = document.getElementById("errorInput")! as HTMLElement; // for error showing div
    cancelButton.addEventListener('click', () => {
      UserInput.clearInputs();
      UserInput.modalClose();
      errorInput.classList.remove('show');
    });
  }

  // find Create new user button - Open Modal
  private createNewOpenModal() {
    const createBtn = document.getElementById('createNewUser')! as HTMLElement;
    const findForm = document.getElementById('userForm')! as HTMLElement;
    const body = document.getElementsByTagName("body")[0]! as HTMLElement;
    
    createBtn.addEventListener('click', () => {
      findForm.style.display = 'flex';
      body.style.overflow = 'hidden';
    });
  }

  private closeBtnClick() {
    const closeBtn = document.getElementById('closeBtn')! as HTMLElement;
    const errorInput = document.getElementById("errorInput")! as HTMLElement; // for error showing div

    closeBtn.addEventListener('click', () => {
      UserInput.modalClose();
      UserInput.clearInputs();
      errorInput.classList.remove('show');
    });
    
  }

  protected static modalClose() {
    const findForm = document.getElementById('userForm')! as HTMLElement;
    const body = document.getElementsByTagName("body")[0]! as HTMLElement;

    findForm.style.display = '';
    body.style.overflow = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (userInput) {
      UserList.addUser(userInput);
      UserInput.clearInputs();
      UserInput.modalClose();
    }
  }

  // On DeleteHandler
  static getEditIdWithObject(el: Element, users: User[]) {
      const getItemId = el.parentElement?.parentElement?.id as string;
      const findForm = document.getElementById('userForm')! as HTMLElement;
      const body = document.getElementsByTagName("body")[0]! as HTMLElement;

      el.addEventListener('click', () => {
        const item = users.find(item => item.id === getItemId);
      
        if (item) {
          UserInput.ids.value = item.id;
          UserInput.firstName.value = item.fName;
          UserInput.firstName.value = item.fName;
          UserInput.middleName.value = item.mName;
          UserInput.lastName.value = item.lName;
          UserInput.emailId.value = item.email;
          UserInput.phoneNo.value = item.phone;
          UserInput.checkSelectedItems(item.roles); // check item role for selecting option items
          UserInput.address.value = item.address;
          UserInput.dateTCreated.value = item.dateCreated;
          UserInput.updateButtonText('Update');
          UserInput.updateTitleText('Update');
          findForm.style.display = 'flex';
          body.style.overflow = 'hidden';
        } else {
          UserInput.clearInputs();
        }
    });
  }

  // check selected roles
  protected static checkSelectedItems(role: string) {
    var el = document.getElementById("role")! as HTMLSelectElement;
    switch (role) {
      case Role.SuperAdmin:
        el.options[1].selected = true;
        break;
      case Role.Admin:
        el.options[2].selected = true;
        break;
      case Role.Subscriber:
        el.options[3].selected = true;
        break;
    }
  }
}

