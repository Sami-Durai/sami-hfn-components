import * as React from "react";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";

type ToastPositionType = "center" | "top-center" | "top-left" | "top-right" | "bottom-center" | "bottom-left" | "bottom-right";

type TypeToastMessage = {
    summary?: React.ReactNode;
    detail?: React.ReactNode;
    content?: React.ReactNode;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
    className?: string;
    style?: object;
    contentClassName?: string;
    contentStyle?: object;
};

type TypeToastMessages = string | string[] | TypeToastMessage | TypeToastMessage[];

type ToastMessage = {
    severity?: "success" | "info" | "warn" | "error";
    summary?: React.ReactNode;
    detail?: React.ReactNode;
    content?: React.ReactNode;
    closable?: boolean;
    sticky?: boolean;
    life?: number;
    className?: string;
    style?: object;
    contentClassName?: string;
    contentStyle?: object;
};

type ToastProps = {
    id?: string;
    className?: string;
    style?: object;
    baseZIndex?: number;
    position?: ToastPositionType;
    transitionOptions?: object;
    onClick?(message: ToastMessage): void;
    onRemove?(message: ToastMessage): void;
    onShow?(): void;
    onHide?(): void;
};

export namespace toaster {
    function props(payload: ToastProps): void;
    function merge(payload: ToastProps): void;
    function clear(): void;
    function success(payload: TypeToastMessages): void;
    function info(payload: TypeToastMessages): void;
    function warn(payload: TypeToastMessages): void;
    function error(payload: TypeToastMessages): void;
    function custom(payload: ToastMessage | TypeToastMessages[]): void;
    function close(): void;
}

export default HFNToast;

declare const HFNToast: ReactRedux.ConnectedComponent<React.ComponentType<ReactRedux.Matching<ReactRedux.DispatchProp<Redux.AnyAction> & {
    toastProps: any;
}, unknown>>, ReactRedux.Omit<ReactRedux.Matching<ReactRedux.DispatchProp<Redux.AnyAction> & {
    toastProps: any;
}, unknown>, never> | ReactRedux.Omit<React.ClassAttributes<React.Component<ReactRedux.Matching<ReactRedux.DispatchProp<Redux.AnyAction> & {
    toastProps: any;
}, unknown>, any, any>> & ReactRedux.Matching<ReactRedux.DispatchProp<Redux.AnyAction> & {
    toastProps: any;
}, unknown>, never>>;
