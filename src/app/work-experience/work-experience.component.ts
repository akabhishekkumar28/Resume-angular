import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  public work="work experience"

  public exp ={
            color : "cyan",
            padding :"30px 0px 10px 30px"
  }

  public buffer="text-buffer"
  public softClass="text-soft"

  public project="project details"

  public erosStyle ={
            color : "black",
            fontWeight :"bolder",
            fontSize : "25px"
            }

   public eros_list_Style ={
            color : '#fff',
            fontSize : "19px"
   }

  public recipie= "food recipie - ( react JS )"
  public resume="resume"
  public phone ="phone book - ( angular )"
  public dateClass = "text-date"


  ngOnInit(): void {
  }

}
