var UserService = require('../services/UserService');
UserService.constructor(require('./../services/SaharaSQLService'));
var EventService = require('../services/EventService');
EventService.constructor(require('./../services/SaharaSQLService'));

var EventController ={
    getevents: async function(req,res){
        if(req.session.username != null){
            var EventList = await EventService.getalluserevents();
            return res.render('events',{items:EventList});
        }else{
            return res.render('index',{title:"please login to see this page",display:true});
        }
    }
}
module.exports = EventController;