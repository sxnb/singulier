import React from "react";
import { getExtraClassName, mapFactorToString } from "./utils";
import '../scss/styles.scss';

const mapColfactorToString = (prefix, factor) => {
  if (!factor) return "";
  return (
    " " +
    factor
      .split(" ")
      .map(p => (p.substr(0, 4) !== "col-" && p.substr(0, 5) !== "show-" && p.substr(0, 5) !== "hide-" ? prefix : "") + p)
      .join(" ")
  );
};

export const Container = props => (
  <div
    {...props}
    className={
      "container " +
      getExtraClassName(props.className) +
      mapFactorToString("container-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const Content = props => (
  <div
    {...props}
    className={
      "content " +
      getExtraClassName(props.className) +
      mapFactorToString("content-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const Card = props => (
  <div
    {...props}
    className={
      "card " +
      getExtraClassName(props.className) +
      mapFactorToString("card-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const CardHeader = props => (
  <div
    {...props}
    className={
      "card-header " +
      getExtraClassName(props.className) +
      mapFactorToString("card-header-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const CardBody = props => (
  <div
    {...props}
    className={
      "card-body " +
      getExtraClassName(props.className) +
      mapFactorToString("card-body-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const FlexRow = props => (
  <div
    {...props}
    className={
      "flex-row " +
      getExtraClassName(props.className) +
      mapFactorToString("flex-row-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const Enum = props => (
  <div
    {...props}
    className={`enum-${
      props.orientation ? props.orientation : "row"
    } ${getExtraClassName(props.className) +
      mapFactorToString("enum-", props.factor)}`}
  >
    {props.children}
  </div>
);
export const EnumItem = props => (
  <div
    {...props}
    className={
      "enum-item " +
      getExtraClassName(props.className) +
      mapFactorToString("enum-item-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const Row = props => (
  <div
    {...props}
    className={
      "row " +
      getExtraClassName(props.className) +
      mapFactorToString("row-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const Col = props => (
  <div
    {...props}
    className={`col${props.type ? ` ${props.type}` : ""} ${getExtraClassName(
      props.className
    ) + mapColfactorToString("col-", props.factor)}`}
  >
    {props.children}
  </div>
);
export const Header = props => (
  <div
    {...props}
    className={
      "header " +
      getExtraClassName(props.className) +
      mapFactorToString("header-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const Footer = props => (
  <div
    {...props}
    className={
      "footer " +
      getExtraClassName(props.className) +
      mapFactorToString("footer-", props.factor)
    }
  >
    {props.children}
  </div>
);
export const Separator = props => (
  <div className="separator" style={{ height: props.size }}></div>
);
