$(document).ready(function() {

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        header:{ center: 'month,agendaWeek,agendaDay, listWeek'},


        weekends: true,
        weekNumbers: true,
        businessHours: true,
        navLinks: true,
        selectable: true,
        buttonText:{
            today: 'Today',
            month: 'Month',
            week:'Week',
            day:'Day',
            list: 'This Week\'s Tasks'
        },
        droppable: true,

        dayClick: function(){
            alert('YOU PRESSED MY DAY!!!');
        },
        
        
    })

});

