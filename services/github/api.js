import axios from 'axios'
import { API_URL } from './constants'
import { getToken } from '../../utils/oauth/client'

const setHeaders = token => ({
  headers: {
        'Authorization': `token ${token}`
  }
});

const buildURL = (uri = '', query) =>
    `${API_URL}${uri}?${query ? qs.stringify(query) : ''}`;

const parseResponse = response => response.status !== 200 ?
  response.json()
  :
  Promise.reject(
        new Error(`${response.status}: ${response.statusText}`)
  );


export const list = (token) => axios(
  buildURL('gists'),
  setHeaders(token || getToken())
)

export const gist = (id, token) => !id
  ? Promise.reject(new Error('id is not defined at /gist/gist_id'))
  : axios(
    buildURL('/gists/id')
  )
