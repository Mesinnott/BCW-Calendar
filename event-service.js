function EventService() {
    /**FUNCTIONS TO WRITE:
     * add
     * edit
     * delete
     * dropOff
     * reserve
     */
    var idCounter = 0;

    ///CONSTRUCTOR///
    function Event(title, owner, type, timeA, timeB, place, description, id, filled, reservable) {
        this.title = title
        this.owner = user.email,
            this.type = type,
            this.start = timeA,
            this.end = timeB,
            this.place = place,
            this.description = "",
            this.id = id,
            this.filled = filled,
            this.reservable = reservable
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
        EventList.push(event);
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








}