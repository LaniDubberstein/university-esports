class HsCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.gameTitle = "HEARTHSTONE";
    this.game = "hs";

    // =======================================================================
    // ==   BELOW IS INFORMATION YOU CAN EDIT                               ==
    // ==   SECTIONS THAT ARE COMMENTED OUT WILL NOT SHOW UP ON THE PAGE    ==
    // =======================================================================

    /* SOCIAL MEDIA */
    // this.website = "https://gopherlink.umn.edu/organization/udota";
    // this.facebook = "http://www.facebook.com";
    // this.email = "mailto:example@gmail.com";

    /* ABOUT SECTION */
    // this.about = "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information. "
    //   + "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information."
    //   + "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information."
    //   + "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information."

    /* ABOUT COMPETITIVE TEAMS SECTION */
    // this.aboutCompetitive = "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."
    //   + "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."
    //   + "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."
    //   + "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."

    /* TEAMS SECTION */
    this.teams = [
      {
        "label": "Hearthstone Competitive Team",
        "description": "Team to be determined through tryouts.",
        "teammates": [
          {
            "role": "",
            "name": "TBD",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "",
            "name": "TBD",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "",
            "name": "TBD",
            "imgPath": "http://placehold.it/200x200"
          }
        ],
        "coaches": [
          {
            "role": "Team Lead",
            "name": "Austin Reddington",
            "imgPath": "http://placehold.it/200x200"
          }
        ]
      }
    ]

    /* EVENTS SECTION */
    this.events = [
      {
        "label": "Hearthstone Tryouts",
        "date": "Sept 15 2017",
        "time": "",
        "location": "Goldy's Gameroom",
        "imgPath": "images/hs_logo.png",
        "description": "Hearthstone competitive team tryouts.",
        "signupLink": ""
      },
      {
        "label": "Hearthstone Sealed Event",
        "date": "Sept 21 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/hs_logo.png",
        "description": "",
        "signupLink": ""
      },
      {
        "label": "Hearthstone Wild Tournament",
        "date": "Oct 19 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/hs_logo.png",
        "description": "",
        "signupLink": ""
      },
      {
        "label": "Hearthstone Standard Tournament",
        "date": "Dec 14 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/hs_logo.png",
        "description": "",
        "signupLink": ""
      }
    ]

    /* NEWS SECTION */
    // this.news = [
    //   {
    //     "description": "Description of [Hs] news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.jpg"
    //   },
    //   {
    //     "description": "Description of [Hs] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.jpg"
    //   },
    //   {
    //     "description": "Description of [Hs] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stage.jpg"
    //   }
    // ]

    /* OFFICERS SECTION */
    // this.officers = [
    //   {
    //     "label": "Dota Club Officers",
    //     "teammates": [
    //       {
    //         "role": "President",
    //         "name": "TBD",
    //         "imgPath": "http://placehold.it/200x200"
    //       },
    //       {
    //         "role": "President",
    //         "name": "TBD",
    //         "imgPath": "http://placehold.it/200x200"
    //       },
    //       {
    //         "role": "President",
    //         "name": "TBD",
    //         "imgPath": "http://placehold.it/200x200"
    //       },
    //       {
    //         "role": "President",
    //         "name": "TBD",
    //         "imgPath": "http://placehold.it/200x200"
    //       },
    //       {
    //         "role": "President",
    //         "name": "TBD",
    //         "imgPath": "http://placehold.it/200x200"
    //       },
    //       {
    //         "role": "President",
    //         "name": "TBD",
    //         "imgPath": "http://placehold.it/200x200"
    //       }
    //     ]
    //   }
    // ]

    /* SPONSORS SECTION */
    // this.sponsors = [
    //   {
    //     "logo": "https://upload.wikimedia.org/wikipedia/en/4/47/Riot_Games_logo.png",
    //     "link": "https://www.riotgames.com/"
    //   },
    //   {
    //     "logo": "https://upload.wikimedia.org/wikipedia/en/4/47/Riot_Games_logo.png",
    //     "link": "https://www.riotgames.com/"
    //   },      {
    //     "logo": "https://upload.wikimedia.org/wikipedia/en/4/47/Riot_Games_logo.png",
    //     "link": "https://www.riotgames.com/"
    //   }
    // ]
  }
}

export default HsCtrl;
