import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      //hover in
      $('col-sm-4').hover(
        function(){
          $(this).animate({
            marginTop:"-=1%",
          },200);
          // hover out
        },
        function(){
          $(this).animate({
            marginTop:"0%",
          },200);
        }
        );
    });
  }

}
