import React from 'react';
import { getExtraClassName, mapFactorToString } from "./utils";
import '../scss/styles.scss';

export const Button = (props) => (<button {...props} className={`button-base${mapFactorToString('button-', props.factor)}${getExtraClassName(props.className)} `}>{props.children}</button>);
export const ButtonPrimary = (props) => (<button {...props} className={`button-base button-primary${mapFactorToString('button-', props.factor)}${getExtraClassName(props.className)} `}>{props.children}</button>);
export const ButtonSecondary = (props) => (<button {...props} className={`button-base button-secondary${mapFactorToString('button-', props.factor)}${getExtraClassName(props.className)} `}>{props.children}</button>);
export const ButtonTertiary = (props) => (<button {...props} className={`button-base button-tertiary${mapFactorToString('button-', props.factor)}${getExtraClassName(props.className)} `}>{props.children}</button>);

export const ButtonOutlinePrimary = (props) => (<button {...props} className={`button-outline button-primary${mapFactorToString('button-', props.factor)}${getExtraClassName(props.className)} `}>{props.children}</button>);
export const ButtonOutlineSecondary = (props) => (<button {...props} className={`button-outline button-secondary${mapFactorToString('button-', props.factor)}${getExtraClassName(props.className)} `}>{props.children}</button>);
