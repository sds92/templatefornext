import MainScreenM0 from './MainScreenM0';
import PromoM0 from './PromoM0';
import PromoM1 from './PromoM1';
import PromoM2 from './PromoM2';
import PromoM3 from './PromoM3';
import CatalogM0 from './CatalogM0';
import ContactsM0 from './ContactsM0';

// TODO: fix types
const Sections: { [key: string]: any } = {
  ContactsM0,
  CatalogM0,
  MainScreenM0,
  PromoM0,
  PromoM1,
  PromoM2,
  PromoM3,
};

export default Sections;
export { default as FeedBackForm } from '../Forms/FeedBackForm';
