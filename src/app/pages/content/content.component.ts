import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://i.pinimg.com/736x/aa/2f/cd/aa2fcd7f3b58361ab818c085b4e37da5.jpg"
  contentTitle:string=""
  contentDescription:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
