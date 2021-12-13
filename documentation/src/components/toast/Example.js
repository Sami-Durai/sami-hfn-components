import React from "react";

// components
// prime components
import { Button } from "primereact/button";

// utils
import { toaster } from "sami-toast";

const Example = () => {
  return (
    <div>
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
        </div>
      </div>
      <div className="p-card p-mt-3">
        <div className="p-card-body">
          <h3 className="p-pb-2">Multiple</h3>
          <div className="p-d-flex p-flex-wrap p-jc-start">
            <div className="p-text-center p-m-1">
              <Button
                label="Success"
                className="p-button-success"
                onClick={() => toaster.success(["Mutiple Success button clicked 1", "Mutiple Success button clicked 2"])}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Info"
                className="p-button-info"
                onClick={() => toaster.info(["Mutiple Info button clicked 1", "Mutiple Info button clicked 2"])}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Warning"
                className="p-button-warning"
                onClick={() => toaster.warn(["Mutiple Warning button clicked 1", "Mutiple Warning button clicked 2", "Mutiple Warning button clicked 3"])}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Error"
                className="p-button-danger"
                onClick={() => toaster.error(["Mutiple Error button clicked 1", "Mutiple Error button clicked 2"])}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-card p-mt-3">
        <div className="p-card-body">
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
      <div className="p-card p-mt-3">
        <div className="p-card-body">
          <h3 className="p-pb-2">UI and style</h3>
          <div className="p-d-flex p-flex-wrap p-jc-start">
            <div className="p-text-center p-m-1">
              <Button
                label="Success (Header)"
                className="p-button-success"
                onClick={() => toaster.success({ detail: "Message has custom header", summary: "Custom Header" })}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Info (Message only)"
                className="p-button-info"
                onClick={() => toaster.info({ content: "Toast has only message" })}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Warning (Toast style)"
                className="p-button-warning"
                onClick={() => toaster.warn({
                  detail: "Sticky toast",
                  className: "",
                  style: { color: "#64648c", backgroundColor: "#ff00f738", fontWeight: "bold" }
                })}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Error (Content style)"
                className="p-button-danger"
                onClick={() => toaster.error({
                  detail: "Sticky toast",
                  contentClassName: "",
                  contentStyle: { color: "red", backgroundColor: "#ccff00", fontWeight: "bold" }
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-card p-mt-3">
        <div className="p-card-body">
          <h3 className="p-pb-2">Position</h3>
          <div className="p-d-flex p-flex-wrap p-jc-start">
            <div className="p-text-center p-m-1">
              <Button
                label="Success (Center)"
                className="p-button-success"
                onClick={() => { toaster.props({ position: "center" }); toaster.success("Center position") }}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Info (Top left)"
                className="p-button-info"
                onClick={() => { toaster.props({ position: "top-left" }); toaster.info("Top left position") }}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Warning (Bottom center)"
                className="p-button-warning"
                onClick={() => { toaster.props({ position: "bottom-center" }); toaster.warn("Bottom center position") }}
              />
            </div>
            <div className="p-text-center p-m-1">
              <Button
                label="Error (Clear Props)"
                className="p-button-danger"
                onClick={() => { toaster.clear() }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example;
