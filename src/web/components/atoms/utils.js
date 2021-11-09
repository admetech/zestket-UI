export function hexToRGB(hexValue) {
  const x = [];
  let hex = getComputedStyle(document.documentElement).getPropertyValue(hexValue);
  hex = hex.replace('#', '');

  x.push(parseInt(hex.slice(1, 3), 16));
  x.push(parseInt(hex.slice(3, 5), 16));
  x.push(parseInt(hex.slice(5, 7), 16));
  return x.toString();
}

export function rgbToHex(rgb) {
  // eslint-disable-next-line radix
  const y = rgb.match(/\d+/g).map((x) => parseInt(x).toString(16).padStart(2, '0'));
  return y.join('').toUpperCase();
}

export function getExtension(path) {
  const fullFileName = path.substring(path.lastIndexOf('/') + 1);
  return fullFileName.substring(fullFileName.lastIndexOf('.') + 1).toLowerCase();
}

export const COUNTRY_CODE = {
  INDIA: '+91',
};

export const WHATSAPP = {
  URL: 'https://web.whatsapp.com',
  FOLDER_PATH: 'send',
  COUNTRY_CODE_PARAM: `?phone=${COUNTRY_CODE.INDIA}`,
};

export const getWhatsAppURL = (phone, message) => {
  const templateMsg = encodeURI(message);
  return `${WHATSAPP.URL}/${WHATSAPP.FOLDER_PATH}/${WHATSAPP.COUNTRY_CODE_PARAM}${phone}&text=${templateMsg}`;
};
