class OwCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

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
            "role": "DPS/Flex",
            "name": "Julian Kinneavy",
            "imgPath": "images/Guku.jpg"
          },
          {
            "role": "Support/Tank Flex",
            "name": "James Han",
            "imgPath": "images/Exio.jpg"
          },
          {
            "role": "Tank",
            "name": "Pankeel Shah",
            "imgPath": "images/Blue.jpg"
          },
          {
            "role": "Tank",
            "name": "TBD",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "DPS",
            "name": "Elliot Carpenter",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Support",
            "name": "Andy Groth",
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

    this.events = [
      {
        "label": "Overwatch",
        "date": "Nov 16 2017",
        "time": "",
        "location": "Cofman Memorial Union rm 324",
        "imgPath": "images/ow_logo.png",
        "description": "",
        "signupLink": ""
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
