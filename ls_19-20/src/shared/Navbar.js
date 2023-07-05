import { NavLink, Link } from "react-router-dom";
import { routes } from '../constants';

import 'bootstrap/dist/css/bootstrap.css';

export const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="d-flex justify-content-around">
                { 
                   routes.map((val, i) => {

                    return (
                        <div className="nav-link ms-2 me-2" key={i}>
                            <NavLink
                                activeClass to={val.link}
                                className={({ isActive, isPending }) => {
                                    return isActive ? 'btn btn-success' : ''
                                }}
                                >
                                {val.text}
                            </NavLink>
                        </div>
                    )
                   }) 
                }
            </div>
        </nav>
    )
}