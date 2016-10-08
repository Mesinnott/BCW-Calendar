function buildCalendar(){

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
        eventDrop: function(e,delta,revert){
            debugger
            
        },
        // editable: true,
        // theme: true,

        dayClick: function (a,b,c) {
            debugger
            var timeStamp = a._d
            // document.getElementById('#')
            $('#addEvent').removeClass('hidden')
            console.log(a._d)
            $('#eventTime').val = (a._d)
            // prompt('event?', 'event')
            // alert('YOU MADE MY DAY!!!');
        }
    })

return theCalendar;

}




