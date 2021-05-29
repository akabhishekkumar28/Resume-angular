import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {

  constructor() { }

  public github= "@abhishekkumar28"

  public linkdin= "@abhishekkumar"

  public phone= '9430051546 , 9123156063'

  public email= "@akabhishekkumar28"

  public technical='technical skills'

  public tech= {
    color :'blue',
    padding :'30px 0px 30px 15px'
  }

 public os = 'windows , Unix'
 public osClass ='text-os'

 public prog='prog. lang'
 public lang= 'java'

 public frontend = 'html5 , css3 , js'
 public hasError = true
 public hasError1 = false
 public frontClass ={
                  'text-front1' :this.hasError,
                  'text-front' : this.hasError1
                    }
 public frontEndClass='text-front'

 public lib= 'react jS , bootstrap4'

 public framework =' frameworks :'
 public angular= 'Angular8'

 public db= 'database :'
 public sql= 'MySQL'

 public vc = 'version control tools :'
 public git= 'git , github'

 public tools = 'tools :'
 public  toolList = [ 'eclipse' , 'mysql workbench' , 'visual studio code' , 'ms office']

 public languages = 'languages'
 public eng= 'english , hindi'

  ngOnInit(): void {
  }

}
