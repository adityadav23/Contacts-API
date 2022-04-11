const Contact = require('../models/contacts.model')
const APIFeautures = require('../utils//apiFeatures')

async function createContact(req,res){
    try {
        const contact =  await Contact.create(req.body)
    
        res.status(201).json({
            status: "success",
            data:{
                contact
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data:{
                msg: error
            }
        })
    }
}


async function updateContact(req,res){
 try {
     const contact = await Contact.findByIdAndUpdate(
         {_id: req.params.contactId},
         req.body,
         {
             new: true,
             runValidators: true
         })
     res.status(200).json({
         status: "success",
         data:{
             contact
         }
     })
     
     
 } catch (error) {
    res.status(400).json({
        status: "failed",
        data:{
            msg: error
        }
    })
 }
}

async function  deleteContact(req,res){
    try {
        const contact = await Contact.findOneAndDelete(
            {_id : req.params.contactId}
        )

        if(!contact){
            res.status(400).json({
                status: "contact not found to delete",
                data:{
                    msg: error
                }
            })
        }
        res.status(204).json({
            status: "contact deleted",
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            data:{
                msg: error
            }
        })
    }
}

async function  getContact(req,res){
    const contact = await Contact.findOne({
        _id : req.params.contactId 
    })

    res.status(200).json({
        status: "success",
        data:{
            contact
        }
    })
}

async function  getManyContact(req,res){
    const features = new APIFeautures(Contact.find(), req.query)
        .paginate()

    const allContact = await features.query

    res.status(200).json({
        status: "success",
        data:{
            allContact
        }
    })
}


async function  getMatchingContact(req,res){

    const {name, mobile, address} = req.query
    const queryObject = {}

    if(name){
        queryObject.name = { $regex: name, $options: 'i'}
    }
    if(mobile){
        queryObject.mobile = { $regex: mobile, $options: 'i'}
    }
    if(address){
        queryObject.address = { $regex: address, $options: 'i'}
    }
    const contact = await Contact.find(queryObject)

    res.status(200).json({
        status: "success",
        data:{
            contact
        }
    })
}


module.exports = { createContact,
    getContact,
    getManyContact,
    getMatchingContact,
    updateContact,
    deleteContact,
}