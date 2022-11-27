import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']

})
export class ContentComponent implements OnInit {
  photoCover:string="https://i.pinimg.com/736x/aa/2f/cd/aa2fcd7f3b58361ab818c085b4e37da5.jpg"
  contentTitle:string=""
  contentDescription:string=""
  private Id:string | null = "0"

  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.Id= (value.get("Id"))
    )
    this.setValuesToComponent(this.Id)
  }
  setValuesToComponent(Id:string | null){
    const result = dataFake.filter(article => article.id == Id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
  }

}
