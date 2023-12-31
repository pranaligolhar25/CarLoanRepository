import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Sheard/customer.service';

@Component({
  selector: 'app-document-verification',
  templateUrl: './document-verification.component.html',
  styleUrls: ['./document-verification.component.css']
})
export class DocumentVerificationComponent implements OnInit{

constructor(public cs:CustomerService){}

CustomerList:any[]=[];
  ngOnInit(): void {
    
    this.cs.getAllCustomer().subscribe((customers:any[])=>{
      customers.forEach(customer=>
        {
          if(customer.applicationStatus=="Document Verification")
          {
              this.CustomerList.push(customer);
          }
        })
      });
  }
}
