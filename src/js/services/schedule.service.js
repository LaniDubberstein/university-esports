export default class Schedule {
    constructor() {
        'ngInject';

        var dota = "dota";
        var hs = "hs";
        var hots = "hots";
        var lol = "lol";
        var ow = "ow";
        var rl = "rl";
        var other = "other";

        this.monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        // LIST OF UPCOMING EVENTS
        // - Only future events will be displayed on the main page.  Past dates will be filtered out.
        // - Games will only be displayed on the page with the proper game labels.
        this.events = [
            {
                "game": hots,
                "label": "HOTS Tryouts",
                "date": new Date(2017, 8, 7),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hots_logo.png",
                "description": "Heroes of the Storm competitive team tryouts.",
                "signupLink": ""
            },
            {
                "game": hs,
                "label": "Hearthstone Tryouts",
                "date": new Date(2017, 8, 16),
                "time": "",
                "location": "Goldy's Gameroom",
                "imgPath": "images/hs_logo.png",
                "description": "Hearthstone competitive team tryouts.",
                "signupLink": ""
            },
            {
                "game": hs,
                "label": "Hearthstone Sealed Event",
                "date": new Date(2017, 8, 21),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hs_logo.png",
                "description": "",
                "signupLink": ""
            },
            {
                "game": hots,
                "label": "HOTS Randomized Teams Event",
                "date": new Date(2017, 9, 5),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hots_logo.png",
                "description": "Heroes of the Storm Randomized Teams Event.",
                "signupLink": ""
            },
            {
                "game": other,
                "label": "Paint the Bridge",
                "date": new Date(2017, 9, 5),
                "time": "",
                "location": "Washington Ave. Bridge",
                "imgPath": "images/power.jpg",
                "description": "Bridge painting for the U's Tespa organization!",
                "signupLink": ""
            },
            {
                "game": hs,
                "label": "Hearthstone Wild Tournament",
                "date": new Date(2017, 9, 19),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hs_logo.png",
                "description": "",
                "signupLink": ""
            },
            {
                "game": other,
                "label": "NBA 2K and/or Madden",
                "date": new Date(2017, 10, 2),
                "time": "",
                "location": "Goldy's Gameroom",
                "imgPath": "images/power.jpg",
                "description": "",
                "signupLink": ""
            },
            {
                "game": ow,
                "label": "Overwatch",
                "date": new Date(2017, 10, 16),
                "time": "",
                "location": "Cofman Memorial Union rm 324",
                "imgPath": "images/ow_logo.png",
                "description": "",
                "signupLink": ""
            },
            {
                "game": rl,
                "label": "Rocket League",
                "date": new Date(2017, 10, 30),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/rl_logo.jpg",
                "description": "",
                "signupLink": ""
            },
            {
                "game": hs,
                "label": "Hearthstone Standard Tournament",
                "date": new Date(2017, 11, 14),
                "time": "",
                "location": "Coffman Memorial Union rm 324",
                "imgPath": "images/hs_logo.png",
                "description": "",
                "signupLink": ""
            }
        ]

        this.eventsFilteredByDate = function() {
            var today = new Date();
            var yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            return this.events.filter(event => event.date > yesterday);
        }

        this.eventsFilteredByGame = function(game) {
            return this.events.filter(event => event.game === game);
        }
    }
}
