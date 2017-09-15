class RlCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

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

    this.events = [
      {
        "label": "Rocket League",
        "date": "Nov 30 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/rl_logo.jpg",
        "description": "",
        "signupLink": ""
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

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }

}

export default RlCtrl;
