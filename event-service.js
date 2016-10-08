function EventService() {
    /**FUNCTIONS TO WRITE:
     * add
     * edit
     * delete
     * dropOff
     * reserve
     */


    this.getEvents = function(){
        return _eventList;
    }


    var idCounter = 0;

    ///CONSTRUCTOR///
    function Event(title, owner, type, timeA, timeB, place, description, id, filled, reservable) {
        this.title = title
        this.owner = currentUser,
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
    this.addEvent = function () {
        //to be called by a function in the event controller, 
        //all information passed in from there.
        // title = 
        // owner =
        // type =
        // start =
        // end =
        // place =
        // description = 
        var id = idCounter;
        // filled = 
        // reservable =
        var event = new Event(title, owner, type, timeA, timeB, place, description, id, filled, reservable)
        eventList.push(event);
        idCounter++;
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
        var eventList = localStorage.getItem('BCWEvents');
        if (eventList) {
            eventList = JSON.parse(eventList)
        } else {
            eventList = defaultEventList;
        }
        var events = eventList.filter(event, function oneMonth() {
            if (moment().diff(event.start, 'days') > 30) {
                return false;
            }else{
                return true;
            }
        })
        return eventList;
    }
    var _eventList = loadEvents();


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


}