
Parse.initialize("6MOaLqbspioqwFGiWa7Zn7OXgfh7wa1lMYcji8mz", "5vY2KiRA8sW0FEKuaDvzDIeikDVX8lAKqAgiZwg1");
var Ticket = Parse.Object.extend("Ticket");
var ticket = new Ticket();
 
ticket.set("nombre", nombre);
ticket.set("apellido", ticket.apellido);
ticket.set("email", ticket.email);
 
ticket.save(null, {
  success: function(ticket) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + ticket.id);
  },
  error: function(ticket, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and description.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
