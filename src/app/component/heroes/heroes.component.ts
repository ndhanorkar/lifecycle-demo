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
import {Hero} from './../../class/hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
 {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(){
    console.log("Init")
  }
  ngOnChanges(){
    console.log("Changes")
  }
  ngDoCheck(){
    console.log("DoCheck")
  }
  ngAfterContentInit(){
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("AfterViewInit")
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked")
  }
  ngOnDestroy(){
    console.log("Destroy")
  }


}
