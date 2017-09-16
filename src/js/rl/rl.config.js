function RlConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.rl', {
    url: '/',
    controller: 'RlCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'game.html',
    title: 'Rl'
  });

};

export default RlConfig;
