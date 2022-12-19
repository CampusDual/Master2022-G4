import { Contact } from '../contact';
import { User } from '../user';

export class QuerySortPaginationRequest {
  query: string;
  pageIndex: number;
  pageSize: number;
  sortDirection: string;
  sortColumn: string;

  constructor(query: string, pageIndex: number, pageSize: number, sortDirection: string, sortColumn: string) {
    this.query = query;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.sortDirection = sortDirection;
    this.sortColumn = sortColumn;
  }
}

export class CreateContactRequest {
  name: string;
  surname1: string;
  surname2: string;
  phone: number;
  email: string;
  password: string;
  login: string;

  constructor(contact: Contact) {
    this.name = contact.name;
    this.surname1 = contact.surname1;
    this.surname2 = contact.surname2;
    this.phone = contact.phone;
    this.email = contact.email;
    this.password = contact.password;
    this.login = contact.login;
  }
}
export class CreateUserRequest {
  login: string;
  password: string;


  constructor(user: User) {
    this.login = user.login;
    this.password = user.password;
  }
}
export class EditContactRequest extends CreateContactRequest {
  id: number;

  constructor(contact: Contact) {
    super(contact);
    this.id = contact.id;
  }
}
