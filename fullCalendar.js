function buildCalendar() {

    var theCalendar = $('#calendar').fullCalendar({
        // put your options and callbacks here
        header: { center: 'month,agendaWeek,agendaDay, listWeek' },

        
        weekends: true,
        weekNumbers: true,
        businessHours: true,
        navLinks: true,
        selectable: true,
        buttonText: {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day',
            list: 'This Week\'s Tasks'
        },
        droppable: true,
        draggable: true,
        resizing: true,
        eventDrop: function (e, delta, revert) {
            debugger

        },
        editable: true,
        // theme: true,
        timezone: 'America/Denver',

        dayClick: function (date, jsEvent, calendarView) {
            debugger;
            console.log(date);
            var timeStamp = date._d;
            // document.getElementById('#')
            $('#addEvent').removeClass('hidden');
            var timeString = JSON.stringify(timeStamp);
            $('#eventTime').val(timeStamp)
        },

        eventClick: function (scheduledEvent, jsEvent, calendarView) {
            debugger;
            var title = scheduledEvent.title;
            var place = scheduledEvent.place;
            var description = scheduledEvent.description;
            $('#eventViewTitle').html(title);
            $('#eventViewPlace').html(place);
            $('#eventViewDescription').html(description);
            $('#eventEditTitle').val(title);
            $('#eventEditPlace').val(place);
            $('#eventEditDescription').val(description);

            console.log(scheduledEvent.title);
            console.log(title);
            
            $('#viewEvent').removeClass('hidden')
        },

        

        // eventClick: function(calEvent, jsEvent, view){
        //     debugger
        //     var template = "";
        //     template += `
        //     <div class='hidden addEvent' id='addEvent'>
        //         <div class="row formRow">
        //             <form class='eventForm col-xs-10 col-xs-offset-1'>
        //                 <div class='form-inline'>
        //                     <div class='form-group'>
        //                         <label for="eventTitle">Event Title</label>
        //                         <input type='text' required class='form-control' id='eventTitle' name='eventTitle' placeholder=${this.title}>
        //                     </div>
        //                     <div class='form-group'>
        //                         <label for="eventTime">When We Doing This?</label>
        //                         <input type='text' required class='form-control' id='eventTime' name='eventTime' placeholder=${this.start}>
        //                     </div>
        //                     <div class='form-group'>
        //                         <label for="eventLocation">Where We Doing This?</label>
        //                         <input type='text' required class='form-control' id='eventLocation' placeholder=${this.place}>
        //                     </div>
        //                 </div>
        //                 <div class='form-group'>
        //                     <label for="eventDescription">What We Doing?</label>
        //                     <textarea class='form-control' required rows='3' id='eventDescription' placeholder=${this.description}></textarea>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
            
        //     `
        //     document.getElementById('logIn').innerHTML = template

        // }

        //      eventClick: function(calEvent, jsEvent, view) {
        // $('#calendar').fullCalendar('removeEvents', function (event) {
        //     return event == calEvent;
        // });
        // }             ***************This will delete one event.  BUT, still not saving on refresh**************





    })

    return theCalendar;

}




