import React from 'react';

export default function Age(obj) {

    console.log(obj);

    return (
        <div>
           <h2>
            AGE: 
                { obj.children }
            </h2> 
        </div>
    )
}