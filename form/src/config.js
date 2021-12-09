// eslint-disable-next-line no-undef
const configData = process.env;
let config = {};

try {
    config.placesAutoCompleteURI = configData.REACT_APP_PLACES_AUTOCOMPLETE_URI || "https://us-central1-hfn-registration-qa.cloudfunctions.net/";
    config.srcmStaticDataURI = configData.REACT_APP_STATIC_DATA_SRCM_URI || "https://static-gatsby-qa.web.app/srcmapi/";
    config.gPlacesSession = configData.REACT_APP_GPLACES_SESSION_KEY || "74c576ef-7234-4f47-8b11-f8e41d247f3b";
}
catch {
    config.placesAutoCompleteURI = "https://us-central1-hfn-registration-qa.cloudfunctions.net/";
    config.srcmStaticDataURI = "https://static-gatsby-qa.web.app/srcmapi/";
    config.gPlacesSessionKey = "74c576ef-7234-4f47-8b11-f8e41d247f3b";
}

export default config;
