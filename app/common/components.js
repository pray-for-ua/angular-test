import tilesComponent from './tiles/tiles';
import tableComponent from './table/table';
import navbarComponent from './navbar/navbar';

export default app => {
  INCLUDE_ALL_MODULES([navbarComponent, tableComponent, tilesComponent], app);
}
