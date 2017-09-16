function DotaConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.dota', {
    url: '/',
    controller: 'DotaCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'game.html',
    title: 'Dota'
  });

};

export default DotaConfig;
