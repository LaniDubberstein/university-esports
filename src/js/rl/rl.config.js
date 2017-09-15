function RlConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.rl', {
    url: '/',
    controller: 'RlCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'rl/rl.html',
    title: 'Rl'
  });

};

export default RlConfig;
