import angular from 'angular';
import 'angular-ui-router';

// Import our config
import { config } from './config';

// Import our controllers
import { AddController } from './controllers/add.controller';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('AddController', AddController);