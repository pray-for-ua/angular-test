import createComponent from './createEdit/createEdit';
import homeComponent from './home/home';

export default app => {
  INCLUDE_ALL_MODULES([homeComponent, createComponent], app);
}
