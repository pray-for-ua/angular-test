import ServerDataModelService from './ServerDataModel/ServerDataModel';
import itemsService from './items/items';

export default app => {
  INCLUDE_ALL_MODULES([itemsService, ServerDataModelService], app);
}
