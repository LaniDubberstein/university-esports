class RlCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    
    this.gameTitle = "ROCKET LEAGUE";
    this.game = "rl";

    // this.about = "Rl club information.  Rl club information.  Rl club information.  Rl club information.  Rl club information. "
    //   + "Rl club information.  Rl club information.  Rl club information.  Rl club information.  Rl club information."
    //   + "Rl club information.  Rl club information.  Rl club information.  Rl club information.  Rl club information."
    //   + "Rl club information.  Rl club information.  Rl club information.  Rl club information.  Rl club information."

    // this.aboutCompetitive = "Rl club competitive team information. Rl club competitive team information. Rl club competitive team information."
    //   + "Rl club competitive team information. Rl club competitive team information. Rl club competitive team information."
    //   + "Rl club competitive team information. Rl club competitive team information. Rl club competitive team information."
    //   + "Rl club competitive team information. Rl club competitive team information. Rl club competitive team information."

    this.teams = [
      {
        "label": "Rocket League Competitive Team",
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
            "name": "TBA",
            "imgPath": "http://placehold.it/200x200"
          }
        ]
      }
    ]

    // this.news = [
    //   {
    //     "description": "Description of [Rl] news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.jpg"
    //   },
    //   {
    //     "description": "Description of [Rl] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.jpg"
    //   },
    //   {
    //     "description": "Description of [Rl] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stage.jpg"
    //   }
    // ]

  }
}

export default RlCtrl;
