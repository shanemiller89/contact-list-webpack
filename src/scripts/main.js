console.log("Your Webpack application is set up and ready to go. Please start writing code.")

import {API} from "./contactcollection";
import {RENDER} from "./contactlist";

RENDER.insertForm();

API.getContacts()
.then(contact => {
    RENDER.insertContact(contact);
});