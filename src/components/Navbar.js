import useFetch from "./useFetch";
import '../assets/navbar.css'
import { logo } from "../assets/images/cropped-AltSchool-Logo-1.webp";
import { Link } from 'react-router-dom';


function Navbar() {
    const url = "https://api.github.com/users/codekage25"
    const { loading, data } = useFetch(url)
    return (
        <header className="container">
            <div className="navbar-container">
                {/* <img src="../assets/images/cropped-AltSchool-Logo-1.webp" alt="" style={{ width: "%" }} /> */}
                <h1 className="logo">AltSchool Exam</h1>

                {/* Image & Names */}
                <div className="img-and-name">
                <Link to="/wrong-page" className="link">404 page</Link>
                    <p className="name">{data.name}</p>
                    <img src={data.avatar_url} alt="Github dp" />
                </div>
            </div>
        </header>

    )
}

export default Navbar;

