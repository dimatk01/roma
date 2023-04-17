const Contact = require('../models/post');
const createPath = require('../helpers/create-path');

const handleError = (res, error) => {
  console.log(error);
  res.render(createPath('error'), { title: 'Error' });
};

const getContact = (req, res) => {
  const title = 'Post';
  Contact
    .findById(req.params.id)
    .then(post => res.render(createPath('post'), { post, title }))
    .catch((error) => handleError(res, error));
}

const deleteContact = (req, res) => {
  Contact
  .findByIdAndDelete(req.params.id)
  .then((result) => {
    res.sendStatus(200);
  })
  .catch((error) => handleError(res, error));
}

const getEditContact = (req, res) => {
  const title = 'Edit post';
  Contact
    .findById(req.params.id)
    .then(post => res.render(createPath('edit-post'), { post, title }))
    .catch((error) => handleError(res, error));
}

const editContact = (req, res) => {
  const { name_surname, email, career } = req.body;
  const { id } = req.params;
  Contact
    .findByIdAndUpdate(req.params.id, { name_surname, email, career })
    .then((result) => res.redirect(`/posts/${id}`))
    .catch((error) => handleError(res, error));
}

const getContacts = (req, res) => {
  const title = 'Posts';
  Contact
    .find()
    .sort({ createdAt: -1 })
    .then(posts => res.render(createPath('posts'), { posts, title }))
    .catch((error) => handleError(res, error));
}

const getAddContact = (req, res) => {
  const title = 'Add Post';
  res.render(createPath('add-post'), { title });
}

const addContact = (req, res) => {
    const { name_surname, email, career } = req.body;
    const contact = new Contact({ name_surname, email, career, phone:"none" , address:"none", birthday:"none",
    facebook:"none", twitter:"none", linkedin:"none", image:"none" })
    contact
        .save()
        .then((result) => res.redirect('/posts'))
        .catch((error) => handleError(res, error));
}

const getPosts = (req, res) => {
    const title = 'Contacts';
    Contact
      .find()
      .then(contacts => res.render(createPath('contacts'), { contacts, title }))
      .catch((error) => {
        console.log(error);
        res.render(createPath('error'), { title: 'Error' });
      });
}

module.exports = {
  getContact,
  deleteContact,
  getEditContact,
  editContact,
  getContacts,
  getAddContact,
  addContact,
  getPosts,
};