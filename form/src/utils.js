import React from "react";

import DropdownService from "./service";

export const cityACTemplate = ({ name, state, country }, { context }) => {
    if (context === "menu")
        return (
            <div className="cac-wrapper">
                <div className="cac-name">{name}</div>
                <div className="cac-sc-wrapper">
                    <span className="cac-sc">
                        {state}
                        {
                            (state) ? <span>&nbsp;,&nbsp;</span> : <></>
                        }
                        {country}
                    </span>
                </div>
            </div>
        );
    else
        return (name ? (name + (state ? ", " + state : "") + (country ? ", " + country : "")) : null);
};

export const getCitySuggestions = async (inputValue, callback) => {
    const filterValue = inputValue ? inputValue.trim().toLowerCase() : null;
    let suggestions = [];

    if (filterValue) {
        const dropdownService = new DropdownService();
        let apiResponse;

        try {
            apiResponse = await dropdownService.getCachedCitySuggestions(filterValue[0]);
            let results = apiResponse.data.results;
            for (const item of results) {
                if (item.active && item.name.toLowerCase().startsWith(filterValue)) {
                    suggestions.push({ ...item, value: item.id, label: item.name });
                    if (suggestions.length === 20)
                        break;
                }
            }

            if (suggestions.length === 0) {
                try {
                    apiResponse = await dropdownService.getGPlaceSuggestions(filterValue);
                    suggestions = apiResponse.data;
                }
                catch {
                    console.log("Something went wong.");
                }
            }
        }
        catch {
            try {
                apiResponse = await dropdownService.getGPlaceSuggestions(filterValue);
                suggestions = apiResponse.data;
            }
            catch {
                console.log("Something went wong.");
            }
        }
    }

    callback(suggestions || []);
};

export const getStateSuggestions = async (inputValue, callback) => {
    const filterValue = inputValue ? inputValue.trim().toLowerCase() : null;
    let suggestions = [];

    if (filterValue) {
        const dropdownService = new DropdownService();
        let apiResponse;

        try {
            apiResponse = await dropdownService.getCachedStateSuggestions(filterValue[0]);
            let results = apiResponse.data.results;
            for (const item of results) {
                if (item.active && item.name.toLowerCase().startsWith(filterValue)) {
                    suggestions.push({ ...item, value: item.id, label: item.name });
                    if (suggestions.length === 20)
                        break;
                }
            }

            if (suggestions.length === 0) {
                try {
                    apiResponse = await dropdownService.getGPlaceSuggestions(filterValue);
                    suggestions = apiResponse.data.map(item => ({ ...item, value: item.state_id, label: item.state }));
                }
                catch {
                    console.log("Something went wong.");
                }
            }
        }
        catch {
            try {
                apiResponse = await dropdownService.getGPlaceSuggestions(filterValue);
                suggestions = apiResponse.data.map(item => ({ ...item, value: item.state_id, label: item.state }));
            }
            catch {
                console.log("Something went wong.");
            }
        }
    }

    callback(suggestions || []);
};

export const getCountrySuggestions = async (inputValue, callback) => {
    const filterValue = inputValue ? inputValue.trim().toLowerCase() : null;
    let suggestions = [];

    if (filterValue) {
        const dropdownService = new DropdownService();
        let apiResponse;

        try {
            apiResponse = await dropdownService.getCachedCountrySuggestions(filterValue[0]);
            let results = apiResponse.data.results;
            for (const item of results) {
                if (item.active && item.name.toLowerCase().startsWith(filterValue)) {
                    suggestions.push({ ...item, value: item.id, label: item.name });
                    if (suggestions.length === 20)
                        break;
                }
            }

            if (suggestions.length === 0) {
                try {
                    apiResponse = await dropdownService.getGPlaceSuggestions(filterValue);
                    suggestions = apiResponse.data.map(item => ({ ...item, value: item.country_id, label: item.country }));
                }
                catch {
                    console.log("Something went wong.");
                }
            }
        }
        catch {
            try {
                apiResponse = await dropdownService.getGPlaceSuggestions(filterValue);
                suggestions = apiResponse.data.map(item => ({ ...item, value: item.country_id, label: item.country }));
            }
            catch {
                console.log("Something went wong.");
            }
        }
    }

    callback(suggestions || []);
};
