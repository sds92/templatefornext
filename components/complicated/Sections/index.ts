import MainScreenM0 from './MainScreenM0';
import PromoM0 from './PromoM0';
import PromoM1 from './PromoM1';
import PromoM2 from './PromoM2';
import PromoM3 from './PromoM3';
import CatalogM0 from './CatalogM0';
import CatalogM1 from './CatalogM1';
import ContactsM0 from './ContactsM0';
import MainScreenM1 from './MainScreenM1';

// TODO: fix types
const Sections: { [key: string]: any } = {
  ContactsM0,
  CatalogM0,
  CatalogM1,
  MainScreenM0,
  MainScreenM1,
  PromoM0,
  PromoM1,
  PromoM2,
  PromoM3,
};

export default Sections;
export { default as FeedBackForm } from '../Forms/FeedBackForm';
