function OwConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.ow', {
    url: '/',
    controller: 'OwCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'ow/ow.html',
    title: 'Ow'
  });

};

export default OwConfig;
