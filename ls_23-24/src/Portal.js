import React from 'react';
import {createPortal} from 'react-dom';

import { Portal2 } from './Portal2';

import { storeCounter } from './store';


export const Portal = () => {

    // React.createPortal()
    const el = document.getElementById('text')

    // createPortal(<div>ddddd</div>, document.body)

    return (<>
        <strong> I'm a Portal </strong>
        { storeCounter().count }
        <Portal2/>
        <div>
            {/* <Portal2/> */}
            {
                createPortal(<Portal2/>, el)
            }
        </div>
    </>)
}