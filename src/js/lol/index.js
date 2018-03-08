import angular from 'angular';

// Create the module where our functionality can attach to
let lolModule = angular.module('app.lol', []);

// Include our UI-Router config settings
import LolConfig from './lol.config';
lolModule.config(LolConfig);


// Controllers
import LolCtrl from './lol.controller';
lolModule.controller('LolCtrl', LolCtrl);


export default lolModule;
