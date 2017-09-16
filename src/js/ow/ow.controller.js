class OwCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.gameTitle = "OVERWATCH";
    this.game = "ow";

    // this.about = "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information. "
    //   + "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information."
    //   + "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information."
    //   + "Ow club information.  Ow club information.  Ow club information.  Ow club information.  Ow club information."

    // this.aboutCompetitive = "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."
    //   + "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."
    //   + "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."
    //   + "Ow club competitive team information. Ow club competitive team information. Ow club competitive team information."

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

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }

}

export default OwCtrl;
