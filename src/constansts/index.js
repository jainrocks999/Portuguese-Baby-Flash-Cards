import {Platform} from 'react-native';
const productSkus = Platform.select({
  android: ['portuguese_in_ads_product'],
  ios: ['com.eflashapps.portuguesefree.proupgrade'],
});
export const constants = {
  productSkus,
};
