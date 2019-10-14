
var ISaharaService;
const Event = require('../models/EventModel.js');

var EventService ={
    constructor: function(ISaharaServiceInsert){
        ISaharaService = ISaharaServiceInsert
    },
    getalluserevents: async function(userid){
        var UserEvents = await ISaharaService.getAllUserEvents(userid);
        var UserEventsList = [];
        for(let i = 0; i<UserEvents[0].length;i++){
            let tempevent = new Event(UserEvents[0][i]["ID"],UserEvents[0][i]["CATEGORY_ID"],UserEvents[0][i]["TITLE"],UserEvents[0][i]["COLOR"],UserEvents[0][i]["DISCRIPTION"],UserEvents[0][i]["START_TIME"],UserEvents[0][i]["END_TIME"]);
            UserEventsList.push(tempevent);
        }
        return UserEventsList;

    }
}
module.exports = EventService;