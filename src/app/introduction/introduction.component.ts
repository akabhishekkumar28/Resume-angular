import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  public name='Abhishek Kumar'
  public branch='B.tech (Mechanical Engineering)'
  public intro='professional summary'
  public color={
    color:"black",
    padding:"30px 0px 0px 30px",
    
  }
  public deg={
    color:"#fff",
    padding :"20px 0px 30px 30px",
  }

  public prof={
    color:"cyan",
    padding :"20px 0px 0px 30px",
  }

  public list={
    color:"#fff",
    padding :"20px 0px 0px 30px",
    fontSize : '19px'
  }
  ngOnInit(): void {
  }

}
