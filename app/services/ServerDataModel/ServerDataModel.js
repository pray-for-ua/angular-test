import ServerDataModelService from './ServerDataModel.service';

export default app => {
  app.factory('ServerDataModel', ServerDataModelService);
}
