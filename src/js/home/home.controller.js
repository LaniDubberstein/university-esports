class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.specialText = "The University of Minnesota - Twin Cities has a thriving collegiate community for most popular eSports in the country";
    this.about = "We are a University of Minnesota RSO and Tespa-backed organization. We host Hearthstone," 
               + " Heroes of the Storm, and many other gaming events on campus."

    this.events = [
      {
        "label": "HOTS Tryouts",
        "date": "Sept 7 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/hots_logo.png",
        "description": "Heroes of the Storm competitive team tryouts.",
        "signupLink": ""
      },
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
        "label": "HOTS Randomized Teams Event",
        "date": "Oct 5 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/hots_logo.png",
        "description": "Heroes of the Storm Randomized Teams Event.",
        "signupLink": ""
      },
      {
        "label": "Paint the Bridge",
        "date": "Oct 5 & 6",
        "time": "",
        "location": "Washington Ave. Bridge",
        "imgPath": "images/power.jpg",
        "description": "Bridge painting for the U's Tespa organization!",
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
        "label": "NBA 2K and/or Madden",
        "date": "Nov 2 2017",
        "time": "",
        "location": "Goldy's Gameroom",
        "imgPath": "images/power.jpg",
        "description": "",
        "signupLink": ""
       },
       {
        "label": "Overwatch",
        "date": "Nov 16 2017",
        "time": "",
        "location": "Cofman Memorial Union rm 324",
        "imgPath": "images/ow_logo.png",
        "description": "",
        "signupLink": ""
       },
       {
        "label": "Rocket League",
        "date": "Nov 30 2017",
        "time": "",
        "location": "Coffman Memorial Union rm 324",
        "imgPath": "images/rl_logo.jpg",
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
      },
      {
        "label": "March Mayhem",
        "date": "March 23 2018",
        "time": "7 PM - 10 PM",
        "location": "Robert Bruininks Hall",
        "imgPath": "images/March_Mayhem.jpg",
        "description": "",
        "signupLink": ""
      }   
    ]

    this.teams = [
      {
        "label": "Officers",
        "description": "",
        "teammates": [
          {
            "role": "President",
            "name": "Evan Christenson",
            "imgPath": "images/Evan_front.png"
          },
          {
            "role": "Vice President",
            "name": "David Moline",
            "imgPath": "images/David_V.jpg"
          },
          {
            "role": "Marketing",
            "name": "David Mo",
            "imgPath": "Images/David_Mo.jpg"
          }
        ]
      }
    ]

    // this.news = [
    //   {
    //     "description": "Description of news. News news news news news news news news news news news.",
    //     "imgPath": "images/lol_tourny.png"
    //   },
    //   {
    //     "description": "Description of news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stadium.png"
    //   },
    //   {
    //     "description": "Description of news. News news news news news news news news news news news.",
    //     "imgPath": "images/dota_stage.png"
    //   }
    // ]

    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: User.current ? 'feed' : 'all'
    };

  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;
