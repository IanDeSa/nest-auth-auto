import { Permission } from '../enum/enum-permission';

export class User {
  id?: string;
  email: string;
  password: string;
  username: string;
  permission?: Permission;
}
