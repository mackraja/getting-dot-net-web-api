import { Subject } from 'rxjs'
import { RoleModel } from '../models/role.model';

export class RoleService {
  roleListChanged = new Subject<RoleModel[]>();
  startedEditing = new Subject<number>();
  roleList: RoleModel[] = [];

  constructor() {
    const createdAt = new Date().toLocaleString();
    this.roleList.push(
      new RoleModel('Admin', true, createdAt),
      new RoleModel('Super Admin', true, createdAt)
    );
   }

  getRoleList() {
    return this.roleList.slice();
  }

  getRole(index: number) {
    return this.roleList[index];
  }

  addRole(role: RoleModel) {
    this.roleList.push(role);
    console.log('addRole -------> ', this.roleList);
    this.roleListChanged.next(this.roleList.slice());
  }

  updateRole(index: number, newRole: RoleModel) {
    this.roleList[index] = newRole;
    console.log('updateRole -------> ', this.roleList);
    this.roleListChanged.next(this.roleList.slice());
  }

  deleteRole(index: number) {
    this.roleList.splice(index, 1);
    console.log('deleteRole -------> ', this.roleList);
    this.roleListChanged.next(this.roleList.slice());
  }
}
