import angular from 'angular';
import 'angular-ui-router';

// Import our config & constant
import { config } from './config';
import { serverConstant } from './server.constant';

// Import our controllers
import { AddController } from './controllers/add.controller';

// Import our services
import { GifService } from './services/gif.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('AddController', AddController)
  .service('GifService', GifService);