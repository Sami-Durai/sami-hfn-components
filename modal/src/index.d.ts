import * as ReactRedux from "react-redux";

import * as React from "react";

type ModalProps = {
    id?: string;
    header?: React.ReactNode | ((props: ModalProps) => React.ReactNode);
    footer?: React.ReactNode | ((props: ModalProps) => React.ReactNode);
    visible?: boolean;
    position?: "center" | "top" | "bottom" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    draggable?: boolean;
    resizable?: boolean;
    modal?: boolean;
    contentStyle?: object;
    contentClassName?: string;
    closeOnEscape?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    closable?: boolean;
    style?: object;
    className?: string;
    maskClassName?: string;
    showHeader?: boolean;
    appendTo?: "self" | HTMLElement | undefined | null;
    baseZIndex?: number;
    maximizable?: boolean;
    blockScroll?: boolean;
    icons?: React.ReactNode | ((props: ModalProps) => React.ReactNode);
    ariaCloseIconLabel?: string;
    focusOnShow?: boolean;
    minX?: number;
    minY?: number;
    keepInViewport?: boolean;
    maximized?: boolean;
    breakpoints?: { [key: string]: string; };
    transitionOptions?: object;
    onMaximize?(e: { originalEvent: React.SyntheticEvent; maximized: boolean; }): void;
    onDragStart?(e: React.DragEvent<HTMLElement>): void;
    onDrag?(e: React.DragEvent<HTMLElement>): void;
    onDragEnd?(e: React.DragEvent<HTMLElement>): void;
    onResizeStart?(e: React.MouseEvent<HTMLElement>): void;
    onResize?(e: React.MouseEvent<HTMLElement>): void;
    onResizeEnd?(e: React.MouseEvent<HTMLElement>): void;
    onHide(): void;
    onShow?(): void;
    onMaskClick?(e: React.MouseEvent<HTMLElement>): void;
    onClick?(e: React.MouseEvent<HTMLElement>): void;
};

export namespace modal {
    function toggle(visible: boolean): void;
    function onHide(onHide: () => void): void;
    function onShow(onShow: () => void): void;
    function custom(ModalProps: ModalProps): void;
}

declare var _default: ReactRedux.ConnectedComponent<({ children, modalProps }: {
    children: any;
    modalProps: any;
}) => JSX.Element, ReactRedux.Omit<{
    children: any;
    modalProps: any;
}, "modalProps">>;

export default _default;
