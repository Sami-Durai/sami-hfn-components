import React, { useState, useEffect, useCallback } from "react";

// components
// prime components
import { Button } from "primereact/button";

// utils
import { breadcrumb } from "sami-breadcrumb";

// page component
const Breadcrumb = () => {
    const [breadcrumbs, setbreadcrumbs] = useState([
        { label: "Home", url: "" },
        { label: "Breadcrumb", url: "breadcrumb" }
    ]);

    useEffect(() => {
        breadcrumb(breadcrumbs);
    }, [breadcrumbs]);
    
    const updateBreadcrumb = useCallback(breadcrumb => {
        const breadcrumbIndex = breadcrumbs.findIndex(item => item.url === breadcrumb.url);
        let updatedBreadcrumbs = breadcrumbs.slice();

        if (breadcrumbIndex !== -1) {
            updatedBreadcrumbs.splice(breadcrumbIndex, 1);
            setbreadcrumbs(updatedBreadcrumbs);
        }
        else {
            updatedBreadcrumbs.push(breadcrumb);
            setbreadcrumbs(updatedBreadcrumbs);
        }
    }, [breadcrumbs]);

    return (
        <>
            <div className="p-card">
                <div className="p-card-body">
                    <h3 className="p-pb-2">Add / Remove Breadcrumb Menu</h3>
                    <div className="p-d-flex p-flex-wrap p-jc-start">
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Breadcrumb"
                                className={breadcrumbs.find(item => item.url === "breadcrumb") ? "p-button-secondary" : "p-button-success"}
                                onClick={() => updateBreadcrumb({ url: "breadcrumb", label: "Breadcrumb" })}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Confirm Popup"
                                className={breadcrumbs.find(item => item.url === "confirm-popup") ? "p-button-secondary" : "p-button-success"}
                                onClick={() => updateBreadcrumb({ url: "confirm-popup", label: "Confirm Popup" })}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Modal"
                                className={breadcrumbs.find(item => item.url === "modal") ? "p-button-secondary" : "p-button-success"}
                                onClick={() => updateBreadcrumb({ url: "modal", label: "Modal" })}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Table"
                                className={breadcrumbs.find(item => item.url === "table") ? "p-button-secondary" : "p-button-success"}
                                onClick={() => updateBreadcrumb({ url: "table", label: "Table" })}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Toast"
                                className={breadcrumbs.find(item => item.url === "toast") ? "p-button-secondary" : "p-button-success"}
                                onClick={() => updateBreadcrumb({ url: "toast", label: "Toast" })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
