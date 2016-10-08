function main(){

    var theCalendar = buildCalendar();
    var app = {
        services: {
            eventService: new EventService()
        }
    }


    EventController(theCalendar, app.services.eventService)
    
}
main()