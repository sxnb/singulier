export const getExtraClassName = (className) => {
    if (!className) return '';
    return ' ' + className;
};

export const factorContainsProperty = (factor, property) => {
    if (!factor) return false;
    return factor.split(' ').indexOf(property) > -1;
};

export const mapFactorToString = (prefix, factor) => {
    if (!factor) return '';
    return ' ' + factor.split(' ').map(p => (p.substr(0, 5) !== 'show-' && p.substr(0, 5) !== 'hide-' ? prefix : '') + p).join(' ');
};
