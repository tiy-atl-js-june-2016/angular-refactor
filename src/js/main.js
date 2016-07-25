import angular from 'angular';
import 'angular-ui-router';

// Import our config & constant
import { config } from './config';
import { serverConstant } from './server.constant';

// Import our controllers
import { HomeController }   from './controllers/home.controller';
import { AddController }    from './controllers/add.controller';
import { SingleController } from './controllers/single.controller';

// Import our services
import { GifService } from './services/gif.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('SingleController', SingleController)
  .service('GifService', GifService);