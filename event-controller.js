function EventController(theCalendar, eventService) {


    //Add events
    $('.eventForm').on('submit', function createEvent() {
        debugger
        event.preventDefault();
        var form = event.target;
        //get elements from input form and pass them in in order
        var owner = "luke.skywalker@lightside.jed";
        var title = $('#eventTitle').val()

        if ($('#formType').val() == 'Meet Ups and Pubs') {
            var type = 1
        } else if ($('#formType').val() == 'TA Adventure Time') {
            var type = 2
        } else if ($('#formType').val() == "'Study' Groups") {
            var type = 3
        } else if ($('#formType').val() == "Call me Maybe?") {
            var type = 4
        }

        var timeA = $('#eventTime').val()
        var timeB = 4
        var place = $('#eventLocation').val()
        var description = $('#eventDescription').val()
        var filled = false
        console.log($('#eventPrivacy'))
        if ($('#eventPrivacy')[0].checked == true) {
            var reservable = true
        } if ($('#eventPrivacy')[0].checked == false) {
            var reservable = false
        }

        // if($('#eventPrivacy').val()){
        // var reservable = true}


        eventService.addEvent(title, owner, type, timeA, timeB, place, description, filled, reservable);
        eventService.saveEvents();

        $('#addEvent').addClass('hidden')

        location.reload()

    })


    function update(arr, currentUser) {
        // Renders each event in the arr
        arr.forEach(function (event) {
            if (authenticate(event, currentUser)) {
                event.editable = true
            }
            theCalendar.fullCalendar('renderEvent', event, 'stick')
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
        debugger
        eventService.saveEvents();
    })

    ////closes the form field///
    $('#close').on('click', function () {
        $('#addEvent').addClass('hidden')
    })


    update(eventService.getEvents())

}

