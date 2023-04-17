const Contact = require('../models/post');
const { post } = require('../routes/contact-routes');

const handleError = (res, error) => {
  res.status(500).send(error)
};

const getContact = (req, res) => {
  Contact
    .findById(req.params.id)
    .then((contact) => res.status(200).json(contact))
    .catch((error) => handleError(res, error));
}

const deleteContact = (req, res) => {
  const { id } = req.params;
  Contact
    .findByIdAndDelete(id)
    .then((contact) => res.status(200).json(req.params.id))
    .catch((error) => handleError(res, error));
}

const editContact = (req, res) => {
  const { name_surname, email, career } = req.body;
  const { id } = req.params;
  Contact
    .findByIdAndUpdate(id, { name_surname, email, career }, {new: true})
    .then((contact) => res.json(contact))
    .catch((error) => handleError(res, error));
}

const getContacts = (req, res) => {
  Contact
    .find()
    .sort({ createdAt: -1 })
    .then((contacts) => res.status(200).json(contacts))
    .catch((error) => handleError(res, error));
}

const addContact = (req, res) => {
    const { name_surname, email, career } = req.body;
    const contact = new Contact({ name_surname, email, career, phone:"none" , address:"none", birthday:"none",
    facebook:"none", twitter:"none", linkedin:"none", image:"none" })
    contact
        .save()
        .then((contact) => res.status(200).json(contact))
        .catch((error) => handleError(res, error));
}



module.exports = {
  getContact,
  deleteContact,
  editContact,
  getContacts,
  addContact,
};