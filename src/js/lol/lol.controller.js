class LolCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

    // this.about = "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information. "
    //   + "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information."
    //   + "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information."
    //   + "Lol club information.  Lol club information.  Lol club information.  Lol club information.  Lol club information."

    // this.aboutCompetitive = "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."
    //   + "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."
    //   + "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."
    //   + "Lol club competitive team information. Lol club competitive team information. Lol club competitive team information."

    this.teams = [
      {
        "label": "League of Legends Competitive Team",
        "description": "Team to be determined through tryouts.",
        "teammates": [
          {
            "role": "Role 1",
            "name": "Name1",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 2",
            "name": "Name2",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 3",
            "name": "Name3",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 4",
            "name": "Name4",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Role 5",
            "name": "Name5",
            "imgPath": "http://placehold.it/200x200"
          }
        ],
        "coaches": [
          {
            "model": "Coach",
            "doors": "Name6",
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
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "Dec 26 2017",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "May 11 2018",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      },
      {
        "label": "Cool event!",
        "date": "Jul 4 2018",
        "time": "10:00am - 10:00pm",
        "location": "Bruininks 420a",
        "imgPath": "images/dota_logo.png",
        "description": "Really cool [Lol] event!!!",
        "signupLink": "link"
      }
    ]

    // this.news = [
    //   {
    //     "description": "Description of [Lol] news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.jpg"
    //   },
    //   {
    //     "description": "Description of [Lol] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.jpg"
    //   },
    //   {
    //     "description": "Description of [Lol] news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stage.jpg"
    //   }
    // ]

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }

}

export default LolCtrl;
