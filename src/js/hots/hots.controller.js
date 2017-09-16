class HotsCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;
    
    this.gameTitle = "HEROES OF THE STORM";
    this.game = "hots";

    // this.about = "Hots club information.  Hots club information.  Hots club information.  Hots club information.  Hots club information. "
    //   + "Hots club information.  Hots club information.  Hots club information.  Hots club information.  Hots club information."
    //   + "Hots club information.  Hots club information.  Hots club information.  Hots club information.  Hots club information."
    //   + "Hots club information.  Hots club information.  Hots club information.  Hots club information.  Hots club information."

    // this.aboutCompetitive = "Hots club competitive team information. Hots club competitive team information. Hots club competitive team information."
    //   + "Hots club competitive team information. Hots club competitive team information. Hots club competitive team information."
    //   + "Hots club competitive team information. Hots club competitive team information. Hots club competitive team information."
    //   + "Hots club competitive team information. Hots club competitive team information. Hots club competitive team information."

    this.teams = [
      {
        "label": "Heroes of the Storm Competitive Team",
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
            "name": "John Otts",
            "imgPath": "http://placehold.it/200x200"
          }
        ]
      }
    ]

    // this.news = [
    //   {
    //     "description": "Description of [Hots] news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.jpg"
    //   },
    //   {
    //     "description": "Description of [Hots] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.jpg"
    //   },
    //   {
    //     "description": "Description of [Hots] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stage.jpg"
    //   }
    // ]
  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }

}

export default HotsCtrl;
