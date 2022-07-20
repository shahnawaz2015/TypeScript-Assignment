import { User } from '../models/user';
import { BaseComponent } from './base-component';

// UserItem Class
export class UserItem extends BaseComponent<HTMLUListElement, HTMLLIElement> {
  private user: User;

  constructor(hostId: string, user: User) {
    super('single-project-list', hostId, false, user.id);
    this.user = user;
    this.configure();
    this.renderContent();
  }

  configure() {
  }

  renderContent() {
    if (this.user.fName) this.element.querySelector('.fName')!.textContent = this.user.fName;
    if (this.user.mName) this.element.querySelector('.mName')!.textContent = this.user.mName;
    if (this.user.lName) this.element.querySelector('.lName')!.textContent = this.user.lName;
    if (this.user.email) this.element.querySelector('.email')!.textContent = this.user.email;
    if (this.user.phone) this.element.querySelector('.phone')!.textContent = this.user.phone;
    if (this.user.roles) this.element.querySelector('.role')!.textContent = this.user.roles;
    if (this.user.address) this.element.querySelector('.address')!.textContent = this.user.address;
    if (this.user.dateCreated) this.element.querySelector('.dateTime')!.textContent = this.user.dateCreated;
  }
}