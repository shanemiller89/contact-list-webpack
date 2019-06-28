
const BUILD = {
  contactComponent: function(contact) {
    return `
    <div class="contact_item">
    <h1>Contact Info</h1>
    <div><strong>Name:</strong> ${contact.name}</div>
    <div><strong>E-mail:</strong> ${contact.email}</div>
    <div><strong>Phone:</strong> ${contact.phone}</div>
    <div><strong>Address:</strong> ${contact.address}</div>
    </div>
    `;
  },
  createContact: function(name_, email_, phone_, address_) {
    return {
      name: name_.value,
      email: email_.value,
      phone: phone_.value,
      address: address_.value
    };
  }
};

export {BUILD}