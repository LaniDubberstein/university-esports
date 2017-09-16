class DotaCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.gameTitle = "DOTA";
    this.game = "dota";

    // this.about = "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information. "
    //   + "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information."
    //   + "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information."
    //   + "Dota club information.  Dota club information.  Dota club information.  Dota club information.  Dota club information."

    // this.aboutCompetitive = "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."
    //   + "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."
    //   + "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."
    //   + "Dota club competitive team information. Dota club competitive team information. Dota club competitive team information."

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

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }

}

export default DotaCtrl;
