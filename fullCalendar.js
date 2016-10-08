$(document).ready(function() {

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        header:{ center: 'month,agendaWeek,agendaDay, listWeek'},


        weekends: true,
        weekNumbers: true,
        businessHours: true,
        navLinks: true,
        
    })

});

