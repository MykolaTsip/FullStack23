import React from 'react';


export class Com extends React.Component {

    state = {
        isShow: true
    }

    isHide = () => {
        this.setState({ isShow: !this.state.isShow });
    }

    render() {
        const { isShow } = this.state;

        return (
            <div>
                <button onClick={this.isHide}>
                    SHow\Hide
                </button>
                {isShow && <div> My text </div>}
            </div>
        )
    }
}