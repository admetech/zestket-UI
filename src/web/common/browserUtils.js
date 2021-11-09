export const IN_SERVER = typeof window === 'undefined';

export function getProtocol() {
  if (!IN_SERVER) {
    return window.location.protocol;
  }
  return null;
}

/**
 * Get the hostname (the example.com part), with the port number
 */
export function getHostname() {
  if (!IN_SERVER) {
    return window.location.host;
  }
  return null;
}

/**
 * Get the hostname link (the https://example.com part), with the port number
 */
export function getHostlink() {
  return `${getProtocol()}//${getHostname()}`;
}

/**
 * Returns the full current URL including query parameters
 */
export function getCurrentUrl(req) {
  if (IN_SERVER && req !== undefined) {
    return `${getHostlink(req)}${req.originalUrl}`;
  }
  return window.location.href;
}
