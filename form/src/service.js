import axios from "axios";

import config from "./config";

const axPlacesAutoComplete = axios.create({
    baseURL: config.placesAutoCompleteURI
});

const axSRCMStaticData = axios.create({
    baseURL: config.srcmStaticDataURI
});

class DropdownService {
    getCachedCitySuggestions(payload) {
        return axSRCMStaticData.get(`cities/${payload}.json`);
    }

    getCachedStateSuggestions(payload) {
        return axSRCMStaticData.get(`states/${payload}.json`);
    }

    getCachedCountrySuggestions() {
        return axSRCMStaticData.get(`countries/all.json`);
    }

    getGPlaceSuggestions(payload) {
        return axPlacesAutoComplete.get("gplaces", {
            params: {
                session: config.gPlacesSessionKey,
                input: payload
            }
        });
    }
}

export default DropdownService;
