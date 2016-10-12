function main() {
    var currentUser = "luke.skywalker@lightside.jed"
    var theCalendar = buildCalendar();
    var app = {
        services: {
            eventService: new EventService()
        }
    }

    EventController(theCalendar, app.services.eventService)
    debugger
    app.services.eventService.loadEvents();
}
main()