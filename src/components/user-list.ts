import { BaseComponent } from "./base-component";
import { User } from "../models/user";
import { UserItem } from "./user-item";
import { UserInput } from "./user-input";
import { DateTime } from '../decorators/dateandtime';
import { NewId } from "../decorators/newId";
import { Role } from "../enums/role";
import { UserDefaultItems } from "../defaultData/usersData";

// UserList Class
export class UserList extends BaseComponent<HTMLDivElement, HTMLElement> {
  private static users: User[] = UserDefaultItems;

  @DateTime static dateTime: string;

  @NewId static newId: string;

  constructor() {
    super('project-list', 'app', false, 'my-user-lists');
    UserList.users = UserDefaultItems; // add default users
    this.element;
    this.configure();
    this.renderContent();
  }

  configure() {
  }

  // render users Contents
  renderContent() {
    this.loadData();
    this.refreshData();
  }

  // add user Items function
  public static addUser(userObj: User) {
    this.removeDataFromDom(); // remove data from dome
    
    let role: Role;
    if (String(userObj.roles) === '0') {
      role = Role.SuperAdmin;
    } else if (String(userObj.roles) === '1') {
      role = Role.Admin;
    } else {
      role = Role.Subscriber;
    }

    userObj.roles = role;

    // DateCreated constant
    const dateCreated = UserList.dateTime;

    // check if ids is blank or not
    if (userObj.id !== '') {
      if (userObj.id) {
        const removeDomItem = document.getElementById(userObj.id) as HTMLElement;
        // remove item from Dom
        if (removeDomItem) {
          removeDomItem.remove();
        }
      }
      //const updatedUser = {userObj.id, userObj.fName, userObj.mName, userObj.lName, userObj.email, userObj.phone, role, userObj.address, userObj.dateCreated} // get user list items

      const objIndex = this.users.findIndex((obj => obj.id === userObj.id));
      this.users[objIndex] = userObj;
    } else {
      const mainId = UserList.newId;
      const newUser = new User(mainId, userObj.fName, userObj.mName, userObj.lName, userObj.email, userObj.phone, userObj.roles, userObj.address, dateCreated); // get user list items
      this.users.push(newUser); // add user list
    }
    UserList.renderUsers(UserList.users);
    UserList.findDeleteButtons();
    UserList.findEditButtons();
  }
 
  // render Users
  public static renderUsers(items: User[]) {
    for (const prjItem of items) {
      new UserItem('body-list', prjItem);
    }
  }

  // Find Delete Button
  private static findDeleteButtons() {
    const deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach(function(el: Element) {
      UserList.onDeleteHandler(el);
    });
  }

  // Find Edit Button
  private static findEditButtons() {
    const editButton = document.querySelectorAll('.edit');
    for (var i = 0; i < editButton.length; i++) {
      const self = editButton[i];
      UserInput.getEditIdWithObject(self, UserList.users);
    }
  }

  // On DeleteHandler
  private static onDeleteHandler(el: Element,) {
    el.addEventListener('click', () => {
      const deleteItemId = el.parentElement?.parentElement?.id as string;
      // find id from item
      if (deleteItemId) {
        const removeDom = document.getElementById(deleteItemId) as HTMLElement;
        // remove item from Dom
        if (removeDom) {
          removeDom.remove();
        }
        // remove item from user array objects
        this.users = this.users.filter(item => item.id !== deleteItemId);
      }
    });
  }

  // Remove id from dome
  protected static removeDataFromDom() {
    const removeIdFromDom = document.getElementById('body-list')! as HTMLElement;
    removeIdFromDom.innerHTML = '';
  }

  // get Load Data button
  private loadData() {
    const loadDataBtn = document.getElementById('loadData')! as HTMLElement;
    const loaderContainer = document.getElementById('loadContainer')! as HTMLElement;
    const body = document.getElementsByTagName("body")[0]! as HTMLElement;

    loadDataBtn.addEventListener('click', () => {
      loaderContainer.remove(); // loading container remove
      body.style.overflow = ''; // remove overflow hidden in body element
      UserList.renderUsers(UserList.users); // render user lists
      UserList.findDeleteButtons(); // find delete Buttons
      UserList.findEditButtons(); // find Edit Buttons
    });
  }

  // refresh Data buttons
  private refreshData() {
    const refreshButton = document.getElementById('refreshData')! as HTMLElement;
    refreshButton.addEventListener('click', () => {
      window.location.reload();
    });
  }
}