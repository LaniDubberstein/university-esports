function HsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.hs', {
    url: '/',
    controller: 'HsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'game.html',
    title: 'Hs'
  });

};

export default HsConfig;
