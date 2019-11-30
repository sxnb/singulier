import React from 'react';
import { mapFactorToString, getExtraClassName } from './utils';
import '../scss/styles.scss';

const isInline = (factor) => {
    return factor && factor.split(' ').indexOf('inline') !== -1;
}

export const Modal = (props) => (
    <>
        {(!props.hideBackdrop && !isInline(props.factor)) && (<div className="modal-backdrop" onClick={() => props.onClose()}></div>)}
        <div className={`modal${mapFactorToString('modal-', props.factor)}${getExtraClassName(props.className)}`}>
            {props.onClose && (<div className="modal-close-button" onClick={() => { return props.onClose ? props.onClose() : null }}>&#x2715;</div>)}
            {props.children}
        </div>
    </>
);

export const ModalHeader = (props) => (
    <div className={`modal-header${mapFactorToString('modal-header-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</div>
);

export const ModalContent = (props) => (
    <div className={`modal-content${mapFactorToString('modal-content-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</div>
);

export const ModalFooter = (props) => (
    <div className={`modal-footer${mapFactorToString('modal-footer-', props.factor)}${getExtraClassName(props.className)}`}>{props.children}</div>
);