import * as ReactRedux from "react-redux";
export namespace confirmPopup {
    function toggle(payload: any): void;
    function accept(payload: any): void;
    function reject(payload: any): void;
    function onHide(payload: any): void;
    function custom(payload: any): void;
}
declare var _default: ReactRedux.ConnectedComponent<({ popupProps }: {
    popupProps: any;
}) => JSX.Element, ReactRedux.Omit<{
    popupProps: any;
}, "popupProps">>;
export default _default;
