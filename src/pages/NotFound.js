import { Link } from 'react-router-dom';
import '../assets/not-found.css'

function NotFound() {
    return (
        <div className='error-container'>
            <h1>404 Error</h1>
            <p>This page does not exist</p>
            <Link className='link-cta' to="/">Go back Home</Link>
        </div>
    )
}

export default NotFound;