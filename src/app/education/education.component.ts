import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css',
              
                ]
})
export class EducationComponent implements OnInit {

  constructor() { }

  public education ="education"
  public educ ={
    color : "cyan",
    padding :"30px 0px 10px 30px"
}

  public college= "the icfai university , dehradun"
  public clgClass='text-clg'

  public engg = "b.tech ( mechanical engineering ) - 6.97 CGPA"
  public enggClass= "text-engg"

  public session = "august 2011 - may 2015 "
  public sessClass ='text-sess'

  public twelth =" patna muslim high school"
  public inter ="12th ( intermediate ) - 58%"
  public sess = "july 2008 - may 2010"

  public school = " R.P.S Public School , Patna"
  public board = " 10th ( high school / matriculation ) - 72%"
  public year = "may 2008"

  ngOnInit(): void {
  }

}
