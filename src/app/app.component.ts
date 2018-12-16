import { 
  Component,
  OnInit,  
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
{
  name: string = ""


  ngOnInit(){
    console.log("parent Init")
  }
  ngOnChanges(){
    console.log("parent Changes")
  }
  ngDoCheck(){
    console.log("parent DoCheck")
  }
  ngAfterContentInit(){
    console.log("parent AfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("parent AfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("parent AfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("parent AfterViewChecked")
  }
  ngOnDestroy(){
    console.log("parent Destroy")
  }

}
