function EventController(theCalendar, eventService) {


    //Add events
    $(((((form))))).on('submit', function createEvent(title, owner, type, timeA, timeB, place, description, filled, reservable) {
        event.preventDefault();
        var form = event.target;
        //get elements from input form and pass them in in order
        var owner = "luke.skywalker@lightside.jed";
        eventService.addEvent(title, owner, type, timeA, timeB, place, description, filled, reservable);
        eventService.saveEvents();
    })

    update(eventService.getEvents())

    function update(arr, currentUser){
        // Renders each event in the arr
        arr.forEach(function(event){
            if (authenticate(event, currentUser)){
                event.editable = true
            }
            theCalendar.fullCalendar('renderEvent', event, stick)
        })
    }



    ///Edit event (need authentication)
    this.editEvent = function (id, currentUser) {
        var event = eventService.findEventById(id);
        if (authenticate(event, currentUser)) {
            //function here



            SOMETHING.fullCalendar('updateEvent', event)
        }
        eventService.saveEvents();
    }


    ///Delete event (need authentication)
    this.removeEvent = function (id, currentUser) {
        var event = eventService.findEventById(id);
        if (authenticate(event, currentUser)) {
            $('#calendar').fullCalendar('removeEvents', id)
        }
        eventService.saveEvents();
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

    
    ///Save button
    /////THIS ELEMENT YET NEEDS TO BE WRITTEN IN HTML
    $('.save-button').on('click', function () {
        eventService.saveEvents();
    })
}

