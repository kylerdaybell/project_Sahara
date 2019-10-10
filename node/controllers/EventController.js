var UserService = require('../services/UserService');
UserService.constructor(require('./../services/SaharaSQLService'));
var EventService = require('../services/EventService');
EventService.constructor(require('./../services/SaharaSQLService'));

var EventController ={
    getevents: async function(req,res){
        if(req.session.username != null){
            await EventService.getalluserevents();
            return res.render('events');
        }
    }
}
module.exports = EventController;