import React, { useMemo } from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { BreadCrumb } from "primereact/breadcrumb";

import { store, HFNContext, breadcrumb as breadcrumbActions } from "sami-redux";

const { BREADCRUMB } = breadcrumbActions;

const options = {
  context: HFNContext,
  pure: true
};

const mapStateToProps = state => ({
  menu: state.breadcrumb.menu,
  hasHome: state.breadcrumb.hasHome
});

const HFNBreadcrumb = ({ menu, hasHome, id, style, className }) => {
  const [model, home] = useMemo(() => {
    const homeMenuItem = (hasHome && menuItems[0]) ? menuItems[0] : null;
    let menuItems = menu.map((menuItem, index) => {
      return {
        ...menuItem,
        template: (item, options) => (
          <Link to={`/${item.url}`} className={`${(menu.length - 1 === index) ? "disabled" : ""} ${options.className}`} key={index} >
            <span className={options.labelClassName}>{item.label}</span>
          </Link>
        )
      };
    });

    if (hasHome) menuItems.shift();

    return [menuItems, homeMenuItem];
  }, [menu, hasHome]);

  return (
    <BreadCrumb id={id || null} style={style || null} className={className || null} model={model} home={home} />
  );
};

export const breadcrumb = (breadcrumbs, showHomeIcon) => {
  let payload = { menu: breadcrumbs };

  if (showHomeIcon === true)
    payload.showHome = true;

  store.dispatch({ type: BREADCRUMB, payload: payload });
};

export default connect(mapStateToProps, null, null, options)(HFNBreadcrumb);
