import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { uid } from 'uid';


// import './Navbar.css';
import style from './Navbar.module.css';
import './Navbar.css';

import cn from 'classnames';


export class Navbar extends React.Component {
    constructor(props) {
        super(props)   
        this.state = {
            isShow: true
        }
    }


    render() {
        // const a = 1;
        // const hasBtn = 0;

        // // console.log(this.props);
        const {data} = this.props;
        // // console.log(data);

        return (
            <nav className={cn(style.wrapper)}>

                <div className={cn({tr: true})}>
                    {/* {  this.state.isShow &&
                        data.map((value, index) => {
                            return (
                                <div key={index}>
                                        <div>
                                            <strong>
                                                {value.name}
                                            </strong>
                                        </div>
                                </div>
                            )
                        })
                    } */}

                    {/* {
                        data.filter(val =>  val.name.length > 5).map((v, i) => {
                            return (
                                <div key={i}>
                                 {v}
                                </div>
                            )
                        })
                    } */}

                    {/* { data.spilce() } */}


                    {/* { 
                        data.map((value, index) => {
                            const uiKey = index + 101
                            return (
                                <div key={uid()}>
                                    <strong>
                                        {value.name}
                                    </strong>
                                    <button onClick={this.deleteN}> delete </button>
                                </div>
                        )
                        })
                    } */}

{/* 
                    {
                        !!hasBtn && <div>my btn</div>
                    }

                    {
                        hasBtn ? <div>my btn</div> : <div>my text</div>
                    } */}
                </div>
            </nav>
        )
    }
};


// Navbar.PropTypes = {
//     data: PropTypes.arrayOf
// };
Navbar.propTypes = {
    data: PropTypes.array
};

export default Navbar;
