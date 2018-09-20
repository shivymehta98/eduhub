import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    $(document).ready(function(){
      $('.menu').click(function(){
        $(' ul').toggleClass('active');
      })
    })
    $(document).ready(function(){
      var arrow = $(".arrow-up");
      var form = $(".login-form");
      var status=false;
      $("#Login").click(function(event){
        event.preventDefault();
      if(status == false){
        arrow.fadeIn();
        form.fadeIn();
        status=true;
      }else{
        arrow.fadeOut();
        form.fadeOut();
        status=false;
      }
      })
     
    })
  }
  
}
