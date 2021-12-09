import { combineReducers } from "redux";

import toast from "./toast";

import modal from "./modal";

import breadcrumb from "./breadcrumb";

import confirmPopup from "./confirmPopup";

import sidebar from "./sidebar";

const rootReducer = combineReducers({ toast, modal, breadcrumb, confirmPopup, sidebar });

export default rootReducer;
