import angular from 'angular';

// Create the module where our functionality can attach to
let hotsModule = angular.module('app.hots', []);

// Include our UI-Router config settings
import HotsConfig from './hots.config';
hotsModule.config(HotsConfig);


// Controllers
import HotsCtrl from './hots.controller';
hotsModule.controller('HotsCtrl', HotsCtrl);


export default hotsModule;
