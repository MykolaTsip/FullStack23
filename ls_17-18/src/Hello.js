import { Link, NavLink } from 'react-router-dom';
 
export const Hello = () => {

    return (
        <div>
            <h1>
                Hello world
            </h1>
            <p>
                {/* <a href="form">A</a> */}
                <Link to='form'> Go to form </Link>
                <hr/>
                <NavLink to='text'> Go to text</NavLink>

            </p>
        </div>
    )
}