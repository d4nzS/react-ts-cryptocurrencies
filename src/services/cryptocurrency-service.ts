import api from '../api';

import ApiUrlsConstants from '../constants/api-urls';

class CryptocurrencyService {
  static async getAll() {
    return (await api.get(ApiUrlsConstants.GET_CRYPTOCURRENCIES)).data;
  }
}

export default CryptocurrencyService;