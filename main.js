function main(){
    var currentUser = "luke.skywalker@lightside.jed"
    var theCalendar = buildCalendar();
    var app = {
        services: {
            eventService: new EventService()
        }
    }
    app.services.eventService.loadEvents();

    EventController(theCalendar, app.services.eventService)

}
main()