import { Component, OnInit, ViewChild } from '@angular/core';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { TestDirective } from './test.directive';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit{
  _component: any;
  componentsList = [];
  @ViewChild(TestDirective,{static:true}) appDirective!: TestDirective;
  constructor(){}
  ngOnInit(): void {
    this.loadComponent("CONTENT1")
  }

  loadComponent(_selectedTab: string){
    const viewContainerRef = this.appDirective.viewContainerRef;
    this._component = "";
    if (_selectedTab == "CONTENT1")
      this._component = Content1Component;
    else if (_selectedTab == "CONTENT2")
      this._component = Content2Component;
    else if (_selectedTab == "CONTENT3")
      this._component = Content3Component;
    
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<TestDirective>(this._component)

  }

} 
