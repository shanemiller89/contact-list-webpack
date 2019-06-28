import {BUILD} from "./contact";
import {API} from "./contactcollection"
import {contactForm} from "./contactform";


let contactDisplay = document.querySelector("#display_container")
let formDisplay = document.querySelector("#form_container")

const RENDER = {
    insertContact: function(contactArray) {
      for (let i = 0; i < contactArray.length; i++) {
        contactDisplay.innerHTML += BUILD.contactComponent(contactArray[i]);
      }
    },
    insertForm: function(){
        formDisplay.appendChild(contactForm())
    }
  };

export {RENDER}