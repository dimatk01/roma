const express = require('express');
const router = express.Router()
const {
    getContact, 
    deleteContact,
    getEditContact,
    editContact,
    getContacts,
    getAddContact,
    addContact,
    getPosts
} = require('../controller/contact-controller');

router.get('/posts/:id', getContact);
router.delete('/posts/:id', deleteContact);
router.get('/edit/:id', getEditContact);
router.put('/edit/:id', editContact);
router.get('/posts', getContacts);
router.get('/add-post', getAddContact);
router.post('/add-post', addContact);
router.get('/contacts',getPosts)





module.exports = router