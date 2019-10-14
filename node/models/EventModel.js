class Event{
    constructor(id,categoryid,title,color,description,starttime,endtime){
        this.id = id;
        this.categoryid = categoryid;
        this.title = title;
        this.description = description;
        this.color = color;
        this.description = description;
        this.starttime = starttime;
        this.endtime = endtime;
    }
}

module.exports = Event;