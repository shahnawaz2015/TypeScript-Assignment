import { Role } from "../enums/role";
import { User } from "../models/user";

export const UserDefaultItems: User[] = [
  {id: '01', fName: 'Rahul', mName: 'Kumar', lName: 'Sharma', email: 'rahul.sharma@mail.com', phone: '9878765453', roles: Role.SuperAdmin, address: 'Dilshad Garden, New Delhi, Delhi - 23', dateCreated: '2022-3-21 10:49:33'},
  {id: '02', fName: 'Vikas', mName: 'Dubey', lName: 'Malhotra', email: 'vikas.dubey@mail.com', phone: '9654532190', roles: Role.Admin, address: 'Najafgarh, New Delhi, Delhi - 53', dateCreated: '2022-3-21 10:49:33'},
  {id: '03', fName: 'Reetu', mName: 'khanna', lName: 'Kumari', email: 'reetu.khanna@mail.com', phone: '7676543432', roles: Role.Subscriber, address: 'Vasant Vihar, New Delhi, Delhi - 42', dateCreated: '2022-3-21 10:49:33'},
  {id: '04', fName: 'Sumita', mName: 'Khanna', lName: 'Agnihotri', email: 'sumita.agnihotri@mail.com', phone: '6876545321', roles: Role.Admin, address: 'Seelampur, New Delhi, Delhi - 56', dateCreated: '2022-3-21 10:49:33'},
  {id: '05', fName: 'Deepak', mName: 'Kumar', lName: 'Sharma', email: 'deepak.kumar@mail.com', phone: '8786756543', roles: Role.Subscriber, address: 'Rohini, New Delhi, Delhi - 76', dateCreated: '2022-3-21 10:49:33'},
  {id: '06', fName: 'Meena', mName: 'Kumari', lName: 'Saksena', email: 'meena.saksena@mail.com', phone: '8976543232', roles: Role.Subscriber, address: 'Khajuri Khas, New Delhi, Delhi - 12', dateCreated: '2022-3-21 10:49:33'},
  {id: '07', fName: 'Sumit', mName: 'Chander', lName: 'Joshi', email: 'sumit.joshi@mail.com', phone: '9867565432', roles: Role.Admin, address: 'Rajori Garden, New Delhi, Delhi - 36', dateCreated: '2022-3-21 10:49:33'},
  {id: '08', fName: 'Aishwarya', mName: 'Rai', lName: 'Bachhan', email: 'aishwarya.rai@mail.com', phone: '9098907890', roles: Role.SuperAdmin, address: 'South Extention, New Delhi, Delhi - 66', dateCreated: '2022-3-21 10:49:33'},
  {id: '09', fName: 'Sarad', mName: 'Goel', lName: 'Bansal', email: 'sarad.bansal@mail.com', phone: '7687698097', roles: Role.Admin, address: 'Preet Vihar, New Delhi, Delhi - 54', dateCreated: '2022-3-21 10:49:33'},
  {id: '10', fName: 'Yogesh', mName: 'Chander', lName: 'Das', email: 'yogesh.das@mail.com', phone: '8767898098', roles: Role.Subscriber, address: 'Ashok Vihar, New Delhi, Delhi - 87', dateCreated: '2022-3-21 10:49:33'},
];