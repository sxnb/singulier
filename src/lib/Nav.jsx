import React from 'react';
import { mapFactorToString } from './utils';
import './scss/styles.scss';

export const TabContainer = (props) => (<ul className="tabs-container" {...props}>{props.children}</ul>);
export const Tab = (props) => (<li className={`tab${mapFactorToString('tab-', props.factor)}`} {...props}>{props.children}</li>);

export const PillContainer = (props) => (<ul className={`pills-container${mapFactorToString('pills-container-', props.factor)}`} {...props}>{props.children}</ul>);
export const Pill = (props) => (<li className={`pill${mapFactorToString('pill-', props.factor)}`} {...props}>{props.children}</li>);

export const NavContainer = (props) => (<ul className={`nav-container${mapFactorToString('nav-container-', props.factor)}`} {...props}>{props.children}</ul>);
export const NavSeparator = (props) => (<li className="nav-separator-container"><div className={`nav-separator`} {...props}></div></li>);
export const NavItem = (props) => (<li className={`nav${mapFactorToString('nav-', props.factor)}`} {...props}>{props.children}</li>);
