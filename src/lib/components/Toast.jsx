import React, { useEffect }  from 'react';

const Toast = (props) => {
    return (
        <div onClick={() => props.closeCb()}
        className={`toast toast-${props.type}`}
        style={{ animation: `fadeIn 0.3s` }}>{props.children}</div>
    )
}

export class ToastContainer extends React.Component {
    state = {
        toastList: [],
        idx: 0
    };

    getRandomKey = () => {
        return Math.random().toString(36).substring(7);
    }

    scheduleRemove(id, ms) {
        setTimeout(() => {
            const newList = this.state.toastList.slice();
            newList.pop();

            this.setState({
                toastList: newList
            })
        }, ms);
    }

    remove = (key) => {
        const newList = this.state.toastList.filter((i) => { return i.key !== key; });

        this.setState({
            toastList: newList
        })
    }

    toast = (type, message) => {
        const key = this.getRandomKey();

        const newToast = (
        <Toast key={key} type={type}
            closeCb={() => this.remove(key)}>{message}</Toast>
        );

        const newList = this.state.toastList.slice();
        newList.unshift(newToast);

        this.setState({
            toastList: newList,
            idx: this.state.idx + 1
        })

        this.scheduleRemove(this.state.toastList.length - 1, this.props.duration ? this.props.duration : 3000);
    }

    success = (message) => this.toast('success', message);
    warning = (message) => this.toast('warning', message);
    info = (message) => this.toast('info', message);
    danger = (message) => this.toast('danger', message);

    render = () => (
        <div className={`toast-container`}>
            {React.createElement('div', null, ...this.state.toastList)}
            <span style={{visibility: 'hidden'}}>{this.state.idx}</span>
        </div>
    );
};
