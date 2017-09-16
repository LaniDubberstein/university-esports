class HomeCtrl {
  constructor(Schedule, AppConstants, $scope) {
    'ngInject';

    this.schedule = Schedule;
    this.appName = AppConstants.appName;
    this._$scope = $scope;

    this.specialText = "The University of Minnesota - Twin Cities has a thriving collegiate community for most popular eSports in the country";
    this.about = "We are a University of Minnesota RSO and Tespa-backed organization. We host Hearthstone,"
      + " Heroes of the Storm, and many other gaming events on campus."

    this.teams = [
      {
        "label": "Officers",
        "description": "",
        "teammates": [
          {
            "role": "President",
            "name": "Evan Christenson",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Vice President",
            "name": "David Moline",
            "imgPath": "http://placehold.it/200x200"
          },
          {
            "role": "Marketing",
            "name": "David Mo",
            "imgPath": "http://placehold.it/200x200"
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
  }

  changeList(newList) {
    this._$scope.$broadcast('setListTo', newList);
  }


}

export default HomeCtrl;
