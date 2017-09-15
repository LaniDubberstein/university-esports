function LolConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.lol', {
    url: '/',
    controller: 'LolCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'lol/lol.html',
    title: 'Lol'
  });

};

export default LolConfig;
