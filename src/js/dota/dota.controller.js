class DotaCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

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

    this.events = [
      {
        "label": "Cool event!",
        "date": "Dec 1 2017",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Dota] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "Dec 26 2017",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Dota] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "May 11 2018",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Dota] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "Jul 4 2018",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Dota] event!!!",
        "signupLink": "link"
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
