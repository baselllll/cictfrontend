import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent implements OnInit {
  name:any= localStorage.getItem('name');
  constructor(private router: Router) { 
    
  }
  product:any;
  ngOnInit(): void {
    // this.getProductOfUser()
  }

}
