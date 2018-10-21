import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) {}
  

  ngOnInit() 
  {
    $(document).ready(function(){
      $('.menu').click(function(){
        $(' ul').toggleClass('active');
      })
    });
     $(document).ready(function(){
      var arrow = $(".arrow-up");
      var form = $(".login-form");
      var loginFormHidden = true;
      
      $("#Login").click(function(event){
        event.stopPropagation();
      if(loginFormHidden == true){
        arrow.fadeIn();
        form.fadeIn();
        loginFormHidden = false;
      }else{
        arrow.fadeOut();
        form.fadeOut();
        loginFormHidden = true;
      }
      return false;
     });

     $(".login-form").click(function(e) {
      e.stopPropagation();
                            // This is the preferred method
      return false;        // This should not be used unless you do not want
                           // any click events registering inside the div
      });
  
      $(document).click(function() {
        if(loginFormHidden==false){
          arrow.fadeOut();
          form.fadeOut();
          loginFormHidden = true;
        }
      });
    //   $(document).click(function() {
    // if(event.stopPropagation) {event.stopPropagation();} 
    // else {event.cancelBubble=true;}
    //   }
      
    var arrowupside = $(".arrow-upside");
    var form1 = $(".signup-form");
    var signupFormHidden = true;
    $("#Signup").click(function(event){
      // event.stopPropagation();
    if(signupFormHidden == true){
      arrowupside.fadeIn();
      form1.fadeIn();
      
      signupFormHidden = false;
      
    }
    else{
      arrowupside.fadeOut();
      form1.fadeOut();
      signupFormHidden = true;
    }
    return false;
   });

   $(".signup-form").click(function(e) {
    e.stopPropagation();
     // This is the preferred method.
    
    return false;        // This should not be used unless you do not want
                         // any click events registering inside the div
    });

    $(document).click(function() {
      if(signupFormHidden==false){
        arrowupside.fadeOut();
        form1.fadeOut();
        signupFormHidden = true;
      }
    });
     
     })
   
  
    
  }
// moveToSignup(){
//   this._router.navigate('/signup');
// }
  
}
