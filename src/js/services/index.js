import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import ScheduleService from './schedule.service'
servicesModule.service('Schedule', ScheduleService);

import JwtService from './jwt.service'
servicesModule.service('JWT', JwtService);

export default servicesModule;
