import {RENDER} from "./contactlist";


const API = {
  getContacts: function() {
    return fetch("http://localhost:8088/contacts").then(response =>
      response.json()
    );
  },
  postContact: function(entry) {
    return fetch("http://localhost:8088/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    });
  },
  deleteCotact: function(id) {
    return fetch(`http://localhost:8088/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  saveContact: function(entry) {
    let contactDisplay = document.querySelector("#display_container");
    return API.postContact(entry)
      .then(API.getContacts)
      .then( contact => {
        contactDisplay.innerHTML = "";
        RENDER.insertComponent(contact);
      });
  }
};

export { API };
