import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: Customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: null,
      lastName: null,
      email: null,
      sendCatalog: true
    });
  }
  
  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm));
  }
}
 