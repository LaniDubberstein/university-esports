function HsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.hs', {
    url: '/',
    controller: 'HsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'hs/hs.html',
    title: 'Hs'
  });

};

export default HsConfig;
