/*
    Project 01_06_01

    Author: Jamin Pottle
    Date:   8.16.18

    Filename: script.js
*/
"use strict";
 var formValidity = true;

// function to validate required fields
function validateRequired(){
    var requiredElements = document.querySelectorAll("input");
    var errorDiv = document.getElementById("#errorText");
    var currentElement;
    try {
        for (var i = 0; i < requiredElements.length; i++) {
            const element = array[i];
            
        }
    } catch (error) {
        
    }
}

//function to validate form
function validateForm(evt){
     // prevent form default behavior - submit
     if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;

    validateRequired();
}

// function to create event listeners
function createEventListeners() {
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
    } else if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm);
    }
}

// function to set up the page
function setUpPage(){
    createEventListeners();
}

// page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}