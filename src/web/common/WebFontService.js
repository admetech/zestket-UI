import { load as webFontLoader } from 'webfontloader';

const configureWebFontService = () => {
  if (typeof webFontLoader !== 'undefined') {
    webFontLoader({
      google: {
        families: ['Open+Sans:400,600,700,800&display=swap'],
      },
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('WebFont not defined!');
  }
};

export default configureWebFontService;
