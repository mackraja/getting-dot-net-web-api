import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RoleService } from '../services/role.Service';
import { RoleModel } from '../models/role.model';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) rlForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: RoleModel;
  
  constructor(private rlService: RoleService) { }

  ngOnInit(): void {
    this.subscription = this.rlService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.rlService.getRole(index);
          this.rlForm.setValue({
            name: this.editedItem.name,
            status: this.editedItem.status
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    let { name, status } = form.value;
    status = status ? true : false;
    const newRole = new RoleModel(name, status, new Date().toLocaleString());
    if (this.editMode) {
      this.rlService.updateRole(this.editedItemIndex, newRole);
    } else {
      this.rlService.addRole(newRole);
    }
    this.editMode = false;
    form.reset();
  }

  onReset() {
    this.rlForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
