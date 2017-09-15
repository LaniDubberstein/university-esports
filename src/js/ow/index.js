import angular from 'angular';

// Create the module where our functionality can attach to
let owModule = angular.module('app.ow', []);

// Include our UI-Router config settings
import OwConfig from './ow.config';
owModule.config(OwConfig);


// Controllers
import OwCtrl from './ow.controller';
owModule.controller('OwCtrl', OwCtrl);


export default owModule;
