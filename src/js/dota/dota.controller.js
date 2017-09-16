class DotaCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.gameTitle = "DOTA"; // Title that shows up on the main page
    this.game = "dota";

    // =======================================================================
    // ==   BELOW IS INFORMATION YOU CAN EDIT                               ==
    // ==   SECTIONS THAT ARE COMMENTED OUT WILL NOT SHOW UP ON THE PAGE    ==
    // =======================================================================

    /* SOCIAL MEDIA */
    // this.website = "https://gopherlink.umn.edu/organization/udota";
    // this.facebook = "http://www.facebook.com";
    // this.email = "mailto:example@gmail.com";

    /* ABOUT SECTION */
    // this.about = "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information. "
    //   + "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information."
    //   + "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information."
    //   + "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information."

    /* ABOUT COMPETITIVE TEAMS SECTION */
    // this.aboutCompetitive = "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."
    //   + "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."
    //   + "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."
    //   + "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."

    /* TEAMS SECTION */
    this.teams = [
      {
        "label": "Dota Competitive Team",
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
            "name": "TBD",
            "imgPath": "http://placehold.it/200x200"
          }
        ]
      }
    ]

    /* NEWS SECTION */
    // this.news = [
    //   {
    //     "description": "Description of [Dota] news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.jpg"
    //   },
    //   {
    //     "description": "Description of [Dota] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.jpg"
    //   },
    //   {
    //     "description": "Description of [Dota] news. News news news news news news news news news news news.",
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

export default DotaCtrl;
