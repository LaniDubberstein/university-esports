function HotsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.hots', {
    url: '/',
    controller: 'HotsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'hots/hots.html',
    title: 'Hots'
  });

};

export default HotsConfig;
