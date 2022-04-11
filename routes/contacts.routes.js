const express = require('express')

const {createContact,
    getManyContact,
    getContact,
    getMatchingContact,
    updateContact,
    deleteContact,
    } = require('../controllers/contacts.controller')

const router = express.Router()

router.route('/').post(createContact).get(getManyContact)
router.route('/match').get(getMatchingContact);
router.route('/:contactId').get(getContact).patch(updateContact).delete(deleteContact)



module.exports = router