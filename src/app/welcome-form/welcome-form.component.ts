import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Categories from '../data/categories';
@Component({
  selector: 'app-welcome-form',
  templateUrl: './welcome-form.component.html',
  styleUrls: ['./welcome-form.component.scss']
})
export class WelcomeFormComponent implements OnInit {

  categories= Categories;
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(Categories)
  }

  submitHandler(){
    this.router.navigate(['question'])
  }

}
