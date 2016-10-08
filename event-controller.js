function EventController(theCalendar, eventService) {


    ///Add events
    // $(((((form))))).on('submit', function createEvent(title, owner, type, timeA, timeB, place, description, filled, reservable) {
    //     event.preventDefault();
    //     var form = event.target;
    //     //get elements from input form and pass them in in order
    //     //owner comes from email of user
    //     eventService.addEvent(title, owner, type, timeA, timeB, place, description, filled, reservable);
    // })

    update(eventService.getEvents())

    function update(arr){
        // Renders each event in the arr
        arr.forEach(function(event){
            event.editable = true
            theCalendar.fullCalendar('renderEvent', event)
        })
    }



    ///Edit event (need authentication)
    this.editEvent = function (id, currentUser) {
        var event = eventService.findEventById(id);
        if (authenticate(event, currentUser)) {
            //function here



            SOMETHING.fullCalendar('updateEvent', event)
        }
    }


    ///Delete event (need authentication)
    this.removeEvent = function (id, currentUser) {
        var event = eventService.findEventById(id);
        if (authenticate(event, currentUser)) {
            $('#calendar').fullCalendar('removeEvents', id)
        }
    }



    ///Drop off calendar
    $('#calendar').fullCalendar('removeEvents', function dropOff(id) {
        ///check whether timestamp of event is more than 30 days old
    })



    ///Reserve spot at event








    ///Authentication function
    var authenticate = function (event, currentUser) {
        if (event.user == currentUser) {
            return true;
        } else {
            return false;
        }
    }

}


//display interaction; listeners, etc.

//authentication (email address matching)

//inputting events