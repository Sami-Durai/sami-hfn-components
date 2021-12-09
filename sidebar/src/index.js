import React, { useMemo } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

// state
import { store, HFNContext, sidebar as sidebarActions } from "sami-redux";

// components
// prime components
import { PanelMenu } from "primereact/panelmenu";

// constants
const { SIDEBAR } = sidebarActions;

// state
const mapStateToProps = state => ({
  visible: state.sidebar.visible
});

const options = {
  context: HFNContext
};

const HFNSideBar = ({ id, style, className, position, visible, logo, text, menu, multiple, closeOnSelect = true }) => {

  const sideBarStyle = useMemo(() => {
    let cssProps = {};

    if (position === "right") {
      cssProps = {
        left: "auto",
        right: "0"
      };
    }
    else
      cssProps.left = "0";

    return cssProps;
  }, [position])

  const model = useMemo(() => {
    const menuTemplate = menuItems => {
      if (Array.isArray(menuItems) && menuItems.length > 0) {
        return menuItems.map(menuItem => {
          if (Array.isArray(menuItem.items) && menuItem.items.length > 0)
            menuItem.hasChild = true;
          else
            menuItem.hasChild = false;

          menuItem.template = ({ label, url, icon, expanded, hasChild }, options) => {
            return (
              <div className="menu">
                {(url && typeof url === "string") ?
                  <Link to={url} className={`${options.className} menu-item`} onClick={
                    () => {
                      if (hasChild) options.onClick();
                      if (closeOnSelect) sidebar.toggle();
                    }
                  }>
                    <div className="menu-title-wrapper">
                      {icon ? <i className={`menu-icon ${icon}`}></i> : null}
                      <span className="menu-title">{label}</span>
                    </div>
                  </Link>
                  : <span className="menu-item" onClick={hasChild ? options.onClick : null}>
                    <div className="menu-title-wrapper">
                      <i className={`menu-icon ${icon}`}></i>
                      <span className="menu-title">{label}</span>
                    </div>
                    {hasChild ?
                      <div>
                        {
                          expanded ?
                            <i className="menu-icon pi pi-angle-up"></i>
                            :
                            <i className="menu-icon pi pi-angle-false"></i>
                        }
                      </div>
                      : null}
                  </span>}
              </div>
            )
          };

          if (menuItem.hasChild)
            menuItem.items = menuTemplate(menuItem.items);

          return menuItem;
        });
      }
      else
        return [];
    };

    return menuTemplate(menu);
  }, [menu]);

  if (!visible)
    return null;
  else
    return (
      <div className="hfn-sidebar-wrapper" style={sideBarStyle} >
        <div className="sidebar">
          <div className="sidebar-header-section">
            {
              logo ?
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                : text ? text : null
            }
          </div>
          <div className="hfn-sidebar-menu">
            <div className="sidebar-menu">
              <PanelMenu id={id || null} style={style} className={className || null} model={model} multiple={multiple} />
            </div>
          </div>
        </div>
      </div>
    );
};

export const sidebar = {
  toggle: (payload) => {
    store.dispatch({ type: SIDEBAR, payload: payload });
  }
};

export default connect(mapStateToProps, null, null, options)(HFNSideBar);
