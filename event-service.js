function EventService() {
    /**FUNCTIONS TO WRITE:
     * add
     * edit
     * delete
     * dropOff
     * reserve
     */
    var eventList


    this.loadEvents = function () {
        loadEvents()
    }

    this.saveEvents = function () {
        saveEvents()
    }


    this.getEvents = function () {
        return eventList;

    }


    this.random = function () {
        var idCounter = Math.floor(Math.random() * 1000000)
        return idCounter
    }


    ///CONSTRUCTOR///
    function Event(title, owner, type, timeA, timeB, place, description, id, filled, reservable) {
        this.title = title
        this.owner = main.currentUser,
            this.type = type,
            this.start = timeA,
            this.end = timeB,
            this.place = place,
            this.description = "",
            this.id = id,
            this.filled = filled,
            this.reservable = reservable
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





    ///ADD EVENT///
    this.addEvent = function (title, owner, type, timeA, timeB, place, description, id, filled, reservable) {
        //to be called by a function in the event controller, 
        //all information passed in from there.
        // title = 
        // owner =
        // type =
        // start =
        // end =
        // place =
        // description = 
        var id = this.random();
        // var id = idCounter;
        // filled = 
        // reservable =
        var event = new Event(title, owner, type, timeA, timeB, place, description, id, filled, reservable)
        eventList.push(event);
        // idCounter++;
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
        // {
        // id
        // time 
        // place 
        // filled (boolean)
        // description
        // owner
        // reservable (boolean)
        // type (use as class)
        // }
    ]


    var events = loadEvents();
}