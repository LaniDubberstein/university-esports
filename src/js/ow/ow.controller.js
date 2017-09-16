class OwCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.gameTitle = "OVERWATCH";
    this.game = "ow";

    // =======================================================================
    // ==   BELOW IS INFORMATION YOU CAN EDIT                               ==
    // ==   SECTIONS THAT ARE COMMENTED OUT WILL NOT SHOW UP ON THE PAGE    ==
    // =======================================================================

    /* SOCIAL MEDIA */
    // this.website = "https://gopherlink.umn.edu/organization/udota";
    // this.facebook = "http://www.facebook.com";
    // this.email = "mailto:example@gmail.com";

    /* ABOUT SECTION */
    // this.about = "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information. "
    //   + "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information."
    //   + "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information."
    //   + "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information."

    /* ABOUT COMPETITIVE SECTION */
    // this.aboutCompetitive = "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."
    //   + "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."
    //   + "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."
    //   + "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."

    /* TEAMS SECTION */
    this.teams = [
      {
        "label": "Overwatch Competitive Team",
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
            "name": "Cameron Rigby",
            "imgPath": "http://placehold.it/200x200"
          }
        ]
      }
    ]

    /* NEWS SECTION */
    // this.news = [
    //   {
    //     "description": "Description of [Ow] news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.jpg"
    //   },
    //   {
    //     "description": "Description of [Ow] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.jpg"
    //   },
    //   {
    //     "description": "Description of [Ow] news. News news news news news news news news news news news.",
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

export default OwCtrl;
