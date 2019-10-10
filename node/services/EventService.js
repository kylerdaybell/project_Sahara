
var ISaharaService;
const Event = require('../models/EventModel.js');

var EventService ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    getalluserevents: async function(userid){
        var UserEvents = await ISaharaService.getAllUserEvents(userid);
        console.log(UserEvents);
    }
}
module.exports = EventService;