class Event{
    constructor(id,category,title,color,description,starttime,endtime){
        this.id = id;
        this.title = title;
        this.description = description;
        this.color = color;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
}

module.exports = Event;