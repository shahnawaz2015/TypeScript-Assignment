import { UsersInterface } from "../interfaces/all-interfaces";

export class User implements UsersInterface  {
  constructor (
    public id: string,
    public fName: string,
    public mName: string,
    public lName: string,
    public email: string,
    public phone: string,
    public roles: string,
    public address: string,
    public dateCreated: string
  ) {
  }
}