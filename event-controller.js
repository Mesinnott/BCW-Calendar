function EventController() {
    var eventService = new EventService();


    ///Add events
    $(((((form))))).on('submit', function createEvent(title, owner, type, timeA, timeB, place, description, filled, reservable) {
        //get elements from input form and pass them in in order
        //owner comes from email of user
        eventService.addEvent(title, owner, type, timeA, timeB, place, description, filled, reservable);
    })
    
    

    ///Edit event (need authentication)
    this.editEvent = function(event, user, ) {
        if (authenticate(event, user)) {
            //function here



            //run .fullCalendar('updateEvent') method to render to screen
        }
    }


    ///Delete event (need authentication)



    ///Drop off calendar
    $('#calendar').fullCalendar('removeEvents', function dropOff(id) {
        ///check whether timestamp of event is more than 30 days old
    })



    ///Reserve spot at event








    ///Authentication function
    var authenticate = function(event, user) {
        if (event.user == user) {
            return true;
        }else{
            return false;
        }
    }

}

EventController();

//display interaction; listeners, etc.

//authentication (email address matching)

//inputting events