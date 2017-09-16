import angular from 'angular';

// Create the module where our functionality can attach to
let dotaModule = angular.module('app.dota', []);

// Include our UI-Router config settings
import DotaConfig from './dota.config';
dotaModule.config(DotaConfig);


// Controllers
import DotaCtrl from './dota.controller';
dotaModule.controller('DotaCtrl', DotaCtrl);

export default dotaModule;
