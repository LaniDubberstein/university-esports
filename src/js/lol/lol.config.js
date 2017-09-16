function LolConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.lol', {
    url: '/',
    controller: 'LolCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'game.html',
    title: 'Lol'
  });

};

export default LolConfig;
