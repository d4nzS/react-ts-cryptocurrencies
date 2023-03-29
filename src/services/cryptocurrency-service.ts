import api from '../api';

import ApiUrlsConstants from '../constants/api-urls';

import Cryptocurrency from '../models/cryptocurrency';

class CryptocurrencyService {
  static async getMostExpensive(): Promise<{ data: Cryptocurrency[] }> {
    return (await api.get(ApiUrlsConstants.GET_CRYPTOCURRENCIES, { params: { limit: 3 } })).data.data;
  }

  static async getAll(): Promise<{ data: Cryptocurrency[] }> {
    return (await api.get(ApiUrlsConstants.GET_CRYPTOCURRENCIES)).data.data;
  }
}

export default CryptocurrencyService;