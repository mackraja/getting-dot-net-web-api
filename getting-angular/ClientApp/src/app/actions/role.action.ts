import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoleService } from '../services/role.Service';

@Injectable({
    providedIn: 'root'
})
export class RoleAction {

    constructor(private http: HttpClient, private rlService: RoleService) { }

    fetchRoles() {

    }

    saveRole() {

    }

    updateRole() {

    }

    deleteRole() {
        
    }
}