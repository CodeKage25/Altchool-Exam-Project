import { Link } from 'react-router-dom';
import '../assets/not-found.css'

function NotFound() {
    return (
        <div className='error-container'>
            <h1>404 Error</h1>
            <p className='text'>This page does not exist</p>
            <Link className='link-cta' to="/">Go to Profile page</Link>
        </div>
    )
}

export default NotFound;