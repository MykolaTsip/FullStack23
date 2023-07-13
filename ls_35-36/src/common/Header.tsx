import React from "react"

import {INavbar} from '../models';

import './Header.scss';

export const Header: React.FC<{nav: INavbar[]}> = ({nav}) => (
    <div>
        <span className="hl_text">
            Hello header
        </span>

                <nav>
                {
                    nav.map((nav, i) => 
                        <a key={i} href={nav.ref}> {nav.name} {nav.addText && nav.addText} </a>
                    )
                }
                </nav>
    </div>
)


// function a<T>(arg: T) {return arg}
// // Header()

// a<string | boolean>(true);

// a<number>(53)

// a(4)