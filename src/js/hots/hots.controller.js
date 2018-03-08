class HotsCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

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

    this.events = [
      {
        "label": "HOTS Tryouts",
        "date": "Sept 7 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/hots_logo.png",
        "description": "Heroes of the Storm competitive team tryouts.",
        "signupLink": "link"
      },
      {
        "label": "HOTS Randomized Teams Event",
        "date": "Oct 5 2017",
        "time": "",
        "location": "offman Memorial Union rm 324",
        "imgPath": "images/hots_logo.png",
        "description": "Heroes of the STorm Randomized Teams Event.",
        "signupLink": "link"
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
