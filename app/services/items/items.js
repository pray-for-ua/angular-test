import itemsService from './items.service';

export default app => {
  app.factory('itemsService', itemsService);
}
