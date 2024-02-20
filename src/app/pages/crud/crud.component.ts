import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  isLoading: boolean = false;
  isShowUserForm!: boolean;
  isShowUserTable!: boolean;
  showSubmit!: boolean;
  showUpdate!: boolean;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.isShowUserForm = false;
    this.isShowUserTable = true;
    this.UserList();
  }

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required])

  });

  openUserForm() {
    this.isShowUserForm = true;
    this.isShowUserTable = false;
    this.showSubmit = true;
    this.showUpdate = false;
  }

  onFormSubmit() {
    if (!this.userForm.valid) {
      this.userForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this._userService.createUser(this.userForm.value).subscribe(
      (result) => {
        this.isLoading = false;
        this.createMsg();
        this.isShowUserForm = false;
        this.isShowUserTable = true;
        this.UserList();
        this.userForm.reset();
      },
      (error) => {
        Swal.fire(
          'Error!',
          error.error,
          'error'
        )
        this.isLoading = false;
      }
    )
  }

  onCancel() {
    this.userForm.reset();
    this.isShowUserForm = false;
    this.isShowUserTable = true;
  }

  userList: any;
  UserList() {
    this.isLoading = true;
    this._userService.getUser().subscribe(
      (result: any) => {
        this.userList = result;
        this.isLoading = false;
      },
      (error) => {
        Swal.fire(
          'Error!',
          error.error,
          'error'
        )
        this.isLoading = false;
      }
    )
  }

  delete(id: number) {
    this.isLoading = true;
    this._userService.deleteUser(id).subscribe(
      (result: any) => {
        this.deleteMsg();
        this.isShowUserForm = false;
        this.UserList();
      },
      (error) => {
        Swal.fire(
          'Error!',
          error.error,
          'error'
        )
        this.isLoading = false;
      }
    )
  }

  foundUserId: any;
  editUserForm(id: number) {
    this.isShowUserForm = true;
    this.isShowUserTable = false;
    this.showSubmit = false;
    this.showUpdate = true;
    this.foundUserId = this.userList.find((x: any) => x._id === id);
    this.userForm.patchValue({
      firstName: this.foundUserId.firstName,
      lastName: this.foundUserId.lastName,
      email: this.foundUserId.email,
      dob: this.foundUserId.dob,
      contact: this.foundUserId.contact,
      gender: this.foundUserId.gender
    });
  }

  update() {
    this.isLoading = true;
    this._userService.updateUser(this.foundUserId._id, this.userForm.value).subscribe(
      (result: any) => {
        this.isLoading = false;
        this.updateMsg();
        this.isShowUserForm = false;
        this.isShowUserTable = true;
        this.UserList();
        this.userForm.reset();
      },
      (error) => {
        Swal.fire(
          'Error!',
          error.error,
          'error'
        )
        this.isLoading = false;
      }
    )
  }

  createMsg() {
    Swal.fire({
      title: 'Created sucessfully',
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        icon: 'no-border',
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-link link-success fw-medium text-decoration-none'
      }

    })
  }

  updateMsg() {
    Swal.fire({
      title: 'Updated sucessfully',
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        icon: 'no-border',
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-link link-success fw-medium text-decoration-none'
      }
    })
  }

  deleteMsg() {
    Swal.fire({
      title: 'Deleted sucessfully',
      buttonsStyling: false,
      reverseButtons: true,
      customClass: {
        icon: 'no-border',
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-link link-success fw-medium text-decoration-none'
      }
    })
  }
}


