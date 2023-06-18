import React from 'react';

export class Count extends React.Component {
    state = {
        count: 0,
        color: 1
    };

    constructor(props) {
        super(props)
    };


    inc = () => {
        console.log(this.state.count);
    
        // setCount(++count)
        this.state.count = this.state.count + 1;
    }

    dec = () => this.state.count = this.state.count - 1;

   render() {

    return (
        <div>
            <h3>
                My first class component
            </h3>

            <div>
                { this.state.count }
            </div>
            <button onClick={this.dec}>
                decrement
            </button>
            <button onClick={this.inc}>
                increment
            </button>
        </div>
    )
   }
}