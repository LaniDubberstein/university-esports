class LolCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    
    this.gameTitle = "LEAGUE OF LEGENDS";
    this.game = "lol";

    // =======================================================================
    // ==   BELOW IS INFORMATION YOU CAN EDIT                               ==
    // ==   SECTIONS THAT ARE COMMENTED OUT WILL NOT SHOW UP ON THE PAGE    ==
    // =======================================================================

    /* SOCIAL MEDIA */
    // this.website = "https://gopherlink.umn.edu/organization/udota";
    // this.facebook = "http://www.facebook.com";
    // this.email = "mailto:example@gmail.com";

    /* ABOUT SECTION */
    // this.about = "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information. "
    //   + "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information."
    //   + "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information."
    //   + "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information."

    /* ABOUT COMPETITIVE TEAMS SECTION */
    // this.aboutCompetitive = "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."
    //   + "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."
    //   + "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."
    //   + "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."

    /* TEAMS SECTION */
    this.teams = [
      {
        "label": "League of Legends Competitive Team",
        "description": "Team to be determined through tryouts.",
        "teammates": [
          {
            "role": "Role 1",
            "name": "Name1",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 2",
            "name": "Name2",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 3",
            "name": "Name3",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 4",
            "name": "Name4",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 5",
            "name": "Name5",
            "imgPath": "http://placehold.it/200x200"
          }
        ],
        "coaches": [
          {
            "model": "Coach",
            "doors": "Name6",
            "imgPath": "http://placehold.it/200x200"
          }
        ]
      }
    ]

    this.events = [
      {
        "label": "Cool event!",
        "date": "Dec 1 2017",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "Dec 26 2017",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "May 11 2018",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "Jul 4 2018",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      }
    ]

    // this.news = [
    //   {
    //     "description": "Description of [Lol] news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.jpg"
    //   },
    //   {
    //     "description": "Description of [Lol] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.jpg"
    //   },
    //   {
    //     "description": "Description of [Lol] news. News news news news news news news news news news news.",
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

export default LolCtrl;
