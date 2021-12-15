import React from "react";

// router
import { Routes, Route } from "react-router-dom";

import Header from "components/layouts/Header";

//import Sidebar from "components/layouts/Sidebar";

import Footer from "components/layouts/Footer";

import HFNBreadcrumb from "sami-breadcrumb";

// components
import HFNSideBar from "sami-sidebar";

// shared components 
import HFNLoader from "sharedComponents/lazyLoading";

// utils 
import lazy from "utils/lazy";

// routes
import sideBarRoutes from "routes/sidebar.json";

// constants
const lazyDelay = 500;

// lazy components 
const Breadcrumb = lazy("breadcrumb", lazyDelay);
const ConfirmPopup = lazy("confirmPopup", lazyDelay);
const Form = lazy("form", lazyDelay);
const Modal = lazy("modal", lazyDelay);
const SideBar = lazy("sidebar", lazyDelay);
const Table = lazy("table", lazyDelay);
const Toast = lazy("toast", lazyDelay);
const Reports = lazy("reports", lazyDelay);

const DashboardContainer = () => {
  return (
    <div className="app-wrapper">

      <HFNSideBar menu={sideBarRoutes} position="right" logo="/assets/logo.png" />

      <div className="layout">

        <div className="header">
          <Header />
        </div>

        <div className="main-wrapper">

          <div className="main-container">

            <div className="breadcrums-section">
              <HFNBreadcrumb />
            </div>

            <HFNLoader>
              <Routes>
                <Route path="/breadcrumb" element={<Breadcrumb />} />
                <Route path="/confirm-popup" element={<ConfirmPopup />} />
                <Route path="/modal" element={<Modal />} />
                <Route path="/form" element={<Form />} />
                <Route path="/sidebar" element={<SideBar />} />
                <Route path="/table" element={<Table />} />
                <Route path="/toast" element={<Toast />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="*" element={null} />
              </Routes>
            </HFNLoader>

          </div>

          <div className="footer-section">
            <Footer />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardContainer;
