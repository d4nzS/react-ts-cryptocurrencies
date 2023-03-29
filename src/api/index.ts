import axios from 'axios';

import ApiUrlsConstants from '../constants/api-urls';

const api = axios.create({ baseURL: ApiUrlsConstants.API_URL });

export default api;