function HotsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.hots', {
    url: '/',
    controller: 'HotsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'game.html',
    title: 'Hots'
  });

};

export default HotsConfig;
