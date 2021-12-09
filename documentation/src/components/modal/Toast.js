import React from "react";

import { Button } from "primereact/button";

import { toaster } from "sami-toast";

const Toast = () => {
    return (
        <>
            <div className="p-card">
                <div className="p-card-body">
                    <h3 className="p-pb-2">Single</h3>
                    <div className="p-d-flex p-flex-wrap p-jc-start">
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Success"
                                className="p-button-success"
                                onClick={() => toaster.success("Success button clicked")} />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Info"
                                className="p-button-info"
                                onClick={() => toaster.info("Info button clicked")}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Warning"
                                className="p-button-warning"
                                onClick={() => toaster.warn("Warning button clicked")}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Error"
                                className="p-button-danger"
                                onClick={() => toaster.error("Error button clicked")}
                            />
                        </div>
                    </div>
                    <h3 className="p-pb-2">Timer</h3>
                    <div className="p-d-flex p-flex-wrap p-jc-start">
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Success (Not Closable)"
                                className="p-button-success"
                                onClick={() => toaster.success({ detail: "Success default timer", closable: false })}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Info (10s)"
                                className="p-button-info"
                                onClick={() => toaster.info({ detail: "Timer set for 10s", life: 10000 })}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Warning (Infinite)"
                                className="p-button-warning"
                                onClick={() => toaster.warn({ detail: "Sticky toast", sticky: true })}
                            />
                        </div>
                        <div className="p-text-center p-m-1">
                            <Button
                                label="Error (Close)"
                                className="p-button-danger"
                                onClick={() => toaster.close()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Toast;
