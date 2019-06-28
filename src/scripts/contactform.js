import { API } from "./contactcollection";
import { BUILD } from "./contact";

function contactForm() {
  let formDiv = document.createElement("div");
  let formSave = document.createElement("button");
  let contact_form = `
        <form action="" class="main_form">
          <fieldset>
            <label for="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              class="nameInput"
              required
            />
          </fieldset>
          <fieldset>
            <label for="name">Email: </label>
            <input
              type="text"
              name="email"
              id="email"
              class="emailInput"
              required
            />
          </fieldset>
          <fieldset>
            <label for="name">Phone: </label>
            <input
              type="text"
              name="phone"
              id="phone"
              class="phoneInput"
              required
            />
          </fieldset>
          <fieldset>
            <label for="name">Address: </label>
            <input
              type="text"
              name="address"
              id="address"
              class="addressInput"
              required
            />
          </fieldset>
        </form>
    `;
  formDiv.innerHTML = contact_form;
  formSave.textContent = "Save";
  formDiv.appendChild(formSave);
  formSave.addEventListener("click", () => {
    let name_input = document.querySelector(".nameInput");
    let email_input = document.querySelector(".emailInput");
    let phone_input = document.querySelector(".phoneInput");
    let address_input = document.querySelector(".addressInput");
    let newContact = BUILD.createContact(
      name_input,
      email_input,
      phone_input,
      address_input
    );
    API.saveContact(newContact);
  });
  return formDiv;
}

export { contactForm };
