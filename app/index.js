// Angular & Router ES6 Imports
import angular from 'angular';
import angularRes from 'angular-resource';
import angularUIRouter from 'angular-ui-router';
import angularMocks from "angular-mocks";
import angularMaterial from "angular-material";
import appComponents from './components/components.js';
import commonComponents from './common/components.js';
import appServices from './services/services.js';
import appConfiguration from './app.config';
import appMockBackend from "./app.mockbackend";



const app = angular.module('app', ['ngMockE2E', 'ngResource', 'ngMaterial', angularUIRouter]);


// Components Entrypoint
appComponents(app);

// Common Components Entrypoint
commonComponents(app);

// App Services Entrypoint
appServices(app);

// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// Router Configuration
// appConfiguration(app);

// We will mock $httpBackend, capturing routes and returning data
appMockBackend(app);
