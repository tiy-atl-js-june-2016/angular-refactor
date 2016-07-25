import angular from 'angular';
import 'angular-ui-router';

// Import our config
import { config } from './config';

angular
  .module('app', ['ui.router'])
  .config(config);