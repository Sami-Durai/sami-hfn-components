import React, { useEffect } from "react";

// components
// prime components
import { Button } from "primereact/button";

// utils
import { breadcrumb } from "sami-breadcrumb";

import { confirmPopup } from "sami-confirm-popup";

// constants
const breadcrumbs = [
    { label: "Home", url: "" },
    { label: "Confirm Popup", url: "" }
];

// page component
const Toast = () => {
    useEffect(() => {
        breadcrumb(breadcrumbs);
    }, []);

    return (
        <>
            <div className="p-card">
                <div className="p-card-body">
                    <h3 className="p-pb-2">Basic</h3>
                    <div className="p-d-flex p-flex-wrap p-jc-start">
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Confirm"
                                className="p-button-warning"
                                onClick={() =>
                                    confirmPopup.custom({
                                        message: "Are you sure you want to proceed?",
                                        accept: () => {  },
                                        visible: true
                                    })} 
                                    />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Delete"
                                className="p-button-danger"
                                onClick={() =>
                                    confirmPopup.custom({
                                        message: "Are you sure you want to delete?",
                                        header: 'Delete Confirmation',
                                        icon: 'pi pi-times',                            
                                        acceptClassName: 'p-button-danger',
                                        accept: () => {  },
                                        visible: true
                                    })}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-card">
                <div className="p-card-body">
                    <h3 className="p-pb-2">Position</h3>
                    <div className="p-d-flex p-flex-wrap p-jc-start">
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Confirm"
                                className="p-button-success"
                                onClick={() =>
                                    confirmPopup.custom({
                                        message: "Are you sure you want to proceed?",
                                        accept: () => {  },
                                        position: "top-right",
                                        visible: true
                                    })} 
                                    />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Delete"
                                className="p-button-info"
                                onClick={() =>
                                    confirmPopup.custom({
                                        message: "Are you sure you want to delete?",
                                        header: 'Delete Confirmation',
                                        icon: 'pi pi-times',
                                        acceptClassName: 'p-button-danger',
                                        acceptIcon: 'pi pi-times', 
                                        position: "bottom",
                                        accept: () => {  },
                                        visible: true
                                    })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Toast;
