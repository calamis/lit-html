import { config } from '../../config';

/**
 *
 * @param {string} url
 * @param {*} options
 */
export async function fetch (url, options) {
  const { fetch: fetchSelf } = self;
  const {
    method = 'GET',
    headers = {},
    body,
    auth
  } = options || {};

  headers['Content-Type'] = 'application/json';

  if (auth) {
    const { firebase } = await import('../../firebase/auth');
    const token = await firebase.auth().currentUser?.getIdToken();
    headers.authorization = `Bearer ${token}`;
  }

  const response = await fetchSelf(`${config.backend.url}${url}`, {
    // so as to send cookies httpOnly
    credentials: 'include',
    method,
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body)
  });

  return await response.json();
}
