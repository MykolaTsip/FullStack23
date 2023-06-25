import React, {Component, PureComponent} from 'react';


export default class LifeComp  extends Component {
    listener;
    setCount = () => {
        this.setState({count: this.state.count + 1});
        // this.state.count = !this.state.count
    }

    setSameState = () => {
        
        this.setState({count: this.state.count})
    }

    constructor(prop) {
        super(prop)

        this.state = {
            count: 0,
            date: null
        }
    }


    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state, '4555', nextState)
        // // console.log(nextProps, 111, nextState, 2222, snapthot);


        // console.log(this.state.count !== nextState.count)
        return this.state.count !== nextState.count;
    }


    render() {

        // console.log(a)

        // this.listener = document.addEventListener('click', () => console.log(4646464646464646))

        return (
            <div>
                <div>
                    <button onClick={this.setCount} >
                    Add 1
                    </button>
                    <button onClick={this.setSameState}>
                        Set same state
                    </button>
                    <div>
                    {this.state.count}
                    <br/>
                    {this.state.date}
                    </div>
                </div>

                Hellow world
            </div>
        )
    }

    // getSnapshotBeforeUpdate(prevProps, prevState, shapshot) {
    //     console.log(prevProps, prevState, shapshot)

    //     return null
    // }

    componentDidUpdate() {
        // this.setState({data: new Date().toDateString()})
        console.log('componentDidUpdate')
    }

    componentDidMount() {
        console.log('componentDidMount ')
    }

    componentWillUnmount() {
        // alert('You left this component!')
        // document.removeEventListener('click', this.listener)
        console.log('componentWillUnmount')
    }
}



function sumator() {
    let a = 0;

    function addNumber(num) {
        a += num;
    }

    function getMyN () {
        return a
    }


    return {
        addNumber,
        getMyN
    }
}

const mySumator = sumator();

mySumator.addNumber(103);
console.log(mySumator.getMyN())