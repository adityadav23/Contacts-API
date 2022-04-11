# Contacts-API

# Register a User
localhost:5000/api/v1/register

# Login a user
localhost:5000/api/v1/login

# After getting JWT token one can use below routes

# Create a contact/many contacts
localhost:5000/api/v1/contact/

# Get a Contact With Pagination
localhost:5000/api/v1/contact?page=2&limit=3

# Get a contact with id

localhost:5000/api/v1/contact/:contactId


# Update a contact with contactID

localhost:5000/api/v1/contact/:contactId

# delete a contact '
localhost:5000/api/v1/contact/:contactId

# Get a contact with matching properties
localhost:5000/api/v1/contact?name=test

