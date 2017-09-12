/* global mainModuleNameSpace */
/* global moonCalcModuleNameSpace */
/* global tau */

/**
 * 
 * MoonCalc Gear Web App for calculating and displaying Age of the Moon,
 * Phase of the Moon, and Distance from the Moon to the center of Earth.
 * For residents of the Northern Hemisphere, the Southern Hemisphere, 
 * and the Equator.  
 *
 * Copyright (C) 2014-2017  A.V.T. Software (Sole Proprietorship Vita Tolstikova)
 *  
 * Licensed under the Flora License, Version 1.1 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *  
 * http://floralicense.org/license/
 *  
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and.
 *  
 * Includes TAU (Tizen Advanced UI) Web UI library 
 *  
 *      
 * For calculate Moon parameters use algorithms from 
 * Moontool for Windows Release 2.0 by John Walker http://www.fourmilab.ch/
 * The  algorithms used in this program to calculate the positions of
 * the Sun and the Moon as seen from Earth are given  in  the  book
 * "Practical Astronomy With Your Calculator" by Peter Duffett-Smith,
 * Second Edition, Cambridge University Press, 1981.
 * 
 * "Astronomical Formulae  for  Calculators"  by  Jean  Meeus,  Third
 * Edition, Willmann-Bell, 1985.  A must-have. 
 * 
 * For drawing Phase of the Moon on HTML5 Canvas used idea from algorithm from
 * Романовский Т. Б., Микрокалькуляторы в рассказах 
 * и играх. - Минск : Изд-во "Университетское", 1987. - 191 с. : ил.     
 *  
 * @author Andrei Tolstikov
 * @author Vita Tolstikova 
 *      
 * contact website: https://software.avt.dn.ua
 * contact E-mail: support@software.avt.dn.ua
 *      
 */

//Module Pattern to avoid globals
mainModuleNameSpace = function() {

    //The offset value of the current date set to zero 
    var offsetCurrentDate=0;
    
    //the width and height of the document 
    //based on the orientation of the device 
    var documentWidth;
    var documentHeight;
    
    // The HTML5 Canvas elements
    var canvas;
    var context;

    
    return{
        offsetCurrentDate:offsetCurrentDate,
        documentWidth:documentWidth,
        documentHeight:documentHeight,
        canvas:canvas,
        context:context
    };    
}();

/**
 * 
 * Initialization main events for MoonCalc Gear Web App and 
 * call moonCalcModuleNameSpace.getGeoPosition()
 * for obtaining basic user's location information with W3C Geolocation API 
 * when DOM always created and ready to manipulation
 *   
 */
$(document).ready(function(){

    mainModuleNameSpace.documentWidth=$(document).width();		
    mainModuleNameSpace.documentHeight=$(document).height();
    
    //initialization Canvas vars
    //--- 1 --- First, find the <canvas> element:
    mainModuleNameSpace.canvas = document.getElementById("moonCanvas");
    
    //--- 2 --- Then, call its getContext() method 
    //(you must pass the string "2d" to the getContext() method):
    mainModuleNameSpace.context = mainModuleNameSpace.canvas.getContext("2d");
    
    //add click()event for #prev_date button
    $("#prev_date a").click(function(){
        mainModuleNameSpace.offsetCurrentDate--; 
        moonCalcModuleNameSpace.calcAndShowMoonParams();
    });

    //add click()event for #next_date button
    $("#next_date a").click(function(){
        mainModuleNameSpace.offsetCurrentDate++;
        moonCalcModuleNameSpace.calcAndShowMoonParams();
    });	

    //add click()event for #now button
    $("#now a").click(function(){
        mainModuleNameSpace.offsetCurrentDate=0;
        moonCalcModuleNameSpace.calcAndShowMoonParams();
    });
    
   
    //add click()event for #more (About) button on #page2-About
    $("#about-button").click(function(){
            var pageAbout = document.getElementById("page2-About");
            tau.changePage(pageAbout);
    }); 
    
    //add click()event for #more (Home) button on #page1-MoonCalc
    $("#back-home-button").click(function(){
            var pageMoonCalc = document.getElementById("page1-MoonCalc");
            tau.changePage(pageMoonCalc);
    }); 

    
    //#user_agreement 
    //relative positioning and add User agreement button (#user_agreement)
    //calculate "left" CSS property for #user_agreement
    var userAgreementCSSLeft=mainModuleNameSpace.documentWidth/2-($("#user_agreement").width()/2);
    $("#user_agreement").css("left",userAgreementCSSLeft+"px");	
    
    //add click()event for #now button
    $("#user_agreement a").click(function(){
        var pageUserAgreement = document.getElementById("page3-UserAgreement");
        tau.changePage(pageUserAgreement);
    });
    
     //add click()event for #more (Home) button on #page1-MoonCalc
    $("#back-about-button").click(function(){
            var pageAbout = document.getElementById("page2-About");
            tau.changePage(pageAbout);
    }); 
   
    
    moonCalcModuleNameSpace.getGeoPosition();
});
