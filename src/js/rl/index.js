import angular from 'angular';

// Create the module where our functionality can attach to
let rlModule = angular.module('app.rl', []);

// Include our UI-Router config settings
import RlConfig from './rl.config';
rlModule.config(RlConfig);

// Controllers
import RlCtrl from './rl.controller';
rlModule.controller('RlCtrl', RlCtrl);


export default rlModule;
