import React from 'react';
import { mapFactorToString, getExtraClassName } from './utils';
import '../scss/typography.scss';

export const Heading1 = (props) => (<h1 {...props} className={`${mapFactorToString('heading-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</h1>);
export const Heading2 = (props) => (<h2 {...props} className={`${mapFactorToString('heading-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</h2>);
export const Heading3 = (props) => (<h3 {...props} className={`${mapFactorToString('heading-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</h3>);
export const Heading4 = (props) => (<h4 {...props} className={`${mapFactorToString('heading-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</h4>);
export const Heading5 = (props) => (<h5 {...props} className={`${mapFactorToString('heading-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</h5>);
export const Heading6 = (props) => (<h6 {...props} className={`${mapFactorToString('heading-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</h6>);
export const Hint = (props) => (<div className="hint" {...props}>{props.children}</div>);
export const Text = (props) => (<div className={`text${mapFactorToString('text-', props.factor)}`} style={{color: props.color ? props.color : '#000000', fontSize: props.size ? props.size : '14px', padding: props.padding ? props.padding: '0 8px'}} {...props}>{props.children}</div>);
export const Code = (props) => (<div className="code" {...props}>{props.children}</div>);
export const Icon = (props) => (<i {...props} className={`eva eva-${props.name} ${getExtraClassName(props.className)}`} 
    style={{fontSize: `${props.size ? props.size : 'inherit'}`}}></i>);