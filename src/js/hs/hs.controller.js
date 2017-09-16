class HsCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.gameTitle = "HEARTHSTONE";
    this.game = "hs";

    // this.about = "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information. "
    //   + "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information."
    //   + "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information."
    //   + "Hs club information.  Hs club information.  Hs club information.  Hs club information.  Hs club information."

    // this.aboutCompetitive = "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."
    //   + "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."
    //   + "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."
    //   + "Hs club competitive team information. Hs club competitive team information. Hs club competitive team information."

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

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }

}

export default HsCtrl;
