import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RoleService } from 'src/app/services/role.Service';
import { RoleModel } from 'src/app/models/role.model';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit, OnDestroy {

  roleList: RoleModel[];
  private subscription: Subscription;

  constructor(private rlService: RoleService) {
   }

  ngOnInit(): void {
    this.roleList = this.rlService.getRoleList();
    this.subscription = this.rlService.roleListChanged
      .subscribe(
        (roleList: RoleModel[]) => {
          this.roleList = roleList;
        }
      );
  }

  onEditRole(index: number) {
    this.rlService.startedEditing.next(index);
  }

  onDeleteRole(index: number) {
    this.rlService.deleteRole(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
