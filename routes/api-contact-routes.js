const express = require('express');
const router = express.Router()
const {
    getContact, 
    deleteContact,
    editContact,
    getContacts,
    addContact,
} = require('../controller/api-contact-controller');


//Get All Contacts
router.get('/`api/contacts`', getContacts);
//get contact by id
router.get('/api/contact/:id', getContact);
//Add new contact
router.post('/api/contact', addContact);
//Update post by id
router.put('/api/contact/:id', editContact);
//delete post by id
router.delete('/api/contact/:id', deleteContact);




module.exports = router