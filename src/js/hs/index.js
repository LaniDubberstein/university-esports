import angular from 'angular';

// Create the module where our functionality can attach to
let hsModule = angular.module('app.hs', []);

// Include our UI-Router config settings
import HsConfig from './hs.config';
hsModule.config(HsConfig);


// Controllers
import HsCtrl from './hs.controller';
hsModule.controller('HsCtrl', HsCtrl);


export default hsModule;
