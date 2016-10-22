function EventService() {
    /**FUNCTIONS TO WRITE:
     * add
     * edit
     * delete
     * dropOff
     * reserve
     */
    var eventList;


    this.loadEvents = function () {
        loadEvents()
    }

    this.saveEvents = function () {
        saveEvents()
    }

    this.getEvents = function () {
        return eventList;
    }

    this.randomId = function () {
        var idCounter = Math.floor(Math.random() * 1000000)
        return idCounter
    }

    ///CONSTRUCTOR///
    function Event(plan) {
        this.title = plan.title;
        this.owner = main.currentUser;
        this.type = plan.type;
        this.start = plan.timeA;
        this.end = plan.timeB;
        this.place = plan.place;
        this.description = plan.description || "";
        this.id = plan.id;
        this.filled = plan.filled;
        this.reservable = plan.reservable
    }

    ///ADD EVENT///
    this.addEvent = function (title, owner, type, timeA, timeB, place, description, reservable, filled) {
        var id = this.randomId();
        var filled;
        if (!reservable) {
            filled = false;
        }
        var plan = {
            title: title,
            owner: owner,
            type: type,
            timeA: timeA,
            timeB: timeB,
            place: place,
            description: description,
            reservable: reservable,
            filled: filled,
            id: id
        }
        var event = new Event(plan)
        eventList.push(event);
    }

    ///FIND EVENTS///
    this.findEventById = function (id) {
        var eventList = getEvents();
        for (var i = 0; i < eventList.length; i++) {
            if (eventList[i].id == id) {
                return eventList[i];
            }
        }
    }

    ///EDIT EVENT///
    this.editEvent = function (event) {

    }






    ///reserve events
    this.reserveEvent = function (event) {

    }




    //availability




    ///DROP OFF CALENDAR///



    ///SAVE EVENTS///
    function saveEvents() {
        localStorage.setItem('BCWEvents', JSON.stringify(eventList));
    }
    function loadEvents() {
        eventList = localStorage.getItem('BCWEvents');
        if (eventList) {
            eventList = JSON.parse(eventList)
        } else {
            eventList = defaultEventList;
        }
        var events = eventList.filter(function (event) {
            if (moment().diff(event.start, 'days') > 30) {
                return false;
            } else {
                return true;
            }
        })
        return eventList;
    }

    var defaultEventList = [
        {
            "title": "Dinner at Guido\'s",
            "place": "${Guido address}",
            "start": moment('2016-10-07'), //fix formatting
            "owner": 'anakin.skywalker@darkside.sth',
            "description": "Come have dinner with BCW!",
            "filled": false,
            "reservable": false,
            "type": "meetup"
        },
        {
            "title": "BCW Hackathon",
            "place": "Garden City Office",
            "start": moment('2016-10-07'), //fix formatting
            "owner": 'luke.skywalker@lightside.jed',
            "description": "Come code with BCW!",
            "filled": true,
            "reservable": false,
            "type": "meetup"
        }
    ]


    var events = loadEvents();
}