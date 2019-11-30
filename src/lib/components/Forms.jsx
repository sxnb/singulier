import React from 'react';
import { mapFactorToString, factorContainsProperty, getExtraClassName } from './utils';
import '../scss/styles.scss';

export const TextInput = (props) => (<input {...props} className={`form-input${mapFactorToString('input-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</input>);
export const SelectInput = (props) => (<select {...props} className={`form-select-input${mapFactorToString('input-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</select>);
export const Textarea = (props) => (<textarea {...props} className={`form-input${mapFactorToString('input-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</textarea>);
export const Checkbox = (props) => {
    return (
    <div className="form-checkbox-container">
        <input {...props} type="checkbox" 
            disabled={factorContainsProperty(props.factor, 'disabled')}
            defaultChecked={factorContainsProperty(props.factor, 'checked')}
            className={`form-checkbox-input${mapFactorToString('form-checkbox-input-', props.factor)}${getExtraClassName(props.className)}`}/>
        <label htmlFor={props.id}>{props.label}</label>
    </div>
    )
}

export const RadioOption = (props) => {
    return (
    <div className="form-radio-container">
        <input {...props} type="radio" 
            disabled={factorContainsProperty(props.factor, 'disabled')}
            defaultChecked={factorContainsProperty(props.factor, 'checked')}
            className={`form-radio-input${mapFactorToString('form-radio-input-', props.factor)}${getExtraClassName(props.className)}`}/>
        <label htmlFor={props.id}>{props.label}</label>
    </div>
    );
}

export const DropdownToggle = (props) => (<div className={'dropdown-toggle ' + props.className} {...props}>{props.children}</div>);
export const DropdownList = (props) => (<div className={`dropdown-content${mapFactorToString('dropdown-content-', props.factor)} ` + props.className} {...props}>{props.children}</div>);