import React from 'react';
import { mapFactorToString, getExtraClassName } from './utils';
import '../scss/styles.scss';

/* badge */
export const Badge = (props) => (
    <div className={`badge${mapFactorToString('badge-', props.factor)}`}>{props.children}</div>
);

/* breadcrumbs */
export const Breadcrumbs = (props) => (
    <div className="breadcrumbs-container">
        {React.Children.map(props.children.filter(c => c.type.displayName === 'breadcrumb'), (c, idx) => {
            if (c.type.name !== 'Breadcrumb') return (<></>);
            return (<>
                {c}
                {idx < props.children.filter(c => c.type.displayName === 'breadcrumb').length - 1 && (
                    <div className="breadcrumbs-divider">{props.divider ? props.divider : '>'}</div>
                )}
            </>)})
        }
    </div>
);

export const Breadcrumb = (props) => (
    <div className="breadcrumb">{props.children}</div>
);
Breadcrumb.displayName = 'breadcrumb';

/* progress */
export const Progress = (props) => (
    <div className="progress-container">
        <div className={`progress${mapFactorToString('progress-', props.factor)}`}
            style={{width: `${props.value}%`}}>
        </div>    
    </div>
);

/* avatar */
export const Avatar = (props) => (
    <div className="avatar" style={{width: props.size ? props.size : '150px', height: props.size ? props.size : '150px'}}>
        <img alt="" {...props} src={props.src} style={{width: props.size ? props.size : '150px'}} />
    </div>
);

/* initials */
export const Initials = (props) => {
    const getInitials = (name) => {
        if (!name) return '';

        let names = name.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };

    const getColorFromNameHash = (name) => {
        if (!name) return '#353b48';

        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        let colour = '#';
        for (let i = 0; i < 3; i++) {
            let value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    };

    return (
    <div className={`initials${getExtraClassName(props.className)}`} 
        style={{width: props.size ? props.size : '72px', height: props.size ? props.size : '72px',
                fontSize: props.size ? `${Math.floor(props.size * 0.41)}px` : '30px',
                backgroundColor: props.color ? props.color : getColorFromNameHash(props.name)}}>
        {getInitials(props.name)}
    </div>);
};

/* spinner */
export const Spinner = (props) => (
    <div className="spinner" style={
        {
            width: props.size ? props.size : '50px', 
            height: props.size ? props.size : '50px',
            borderRightColor: props.factor ? props.factor : 'black',
            borderTopColor: props.factor ? props.factor : 'black',
            borderBottomColor: props.factor ? props.factor : 'black',
        }}></div>
);

/* color-circle */
export const ColorCircle = ({ style, ...props}) => (
    <div className="color-circle" style={Object.assign({backgroundColor: props.color}, style)} {...props}></div>
);

/* tooltip */
export const Tooltip = (props) => (
    <div className="tooltip">
        {props.children}
        <span className={`tooltip-text${mapFactorToString('tooltip-text-', props.factor)}`}>{props.value}</span>
    </div>
)

/* alert */
export const Alert = (props) => (
    <div className={`alert${mapFactorToString('alert-', props.factor)}`}>
        <div className="alert-content">{props.children}</div>
        {props && props.factor && props.factor.split(' ').indexOf('dismissable') > -1 && (
            <div className="alert-close" onClick={() => props.onClose()}>&#x2715;</div>
        )}
    </div>
);