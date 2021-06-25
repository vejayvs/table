import { Interpolation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: '<h2>welcome vejay</h2> <button click="onClick($event)">get started</button> {{greeting}}',
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Interpolation";
  public myId = "testId";
  public greeting = "";

  constructor() { }

  ngOnInit(): void {
  }
  onClick(event: any){
    console.log(event);
    this.greeting = ('welcome to breaking bad');
  }

}
