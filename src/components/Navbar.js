import User from "../pages/User";
import { getData } from './Fetch'
import useFetch from "./useFetch";
import '../assets/navbar.css'


function Navbar() {
    const url = "https://api.github.com/users/codekage25"
    const { loading, data } = useFetch(url)
    return (
        <header className="container">
            <div className="navbar-container">
                <h1 className="logo">AltSchool Second Semester Exam</h1>

                {/* Image & Names */}
                <div className="img-and-name">
                    <p className="name">{data.name}</p>
                    <img src={data.avatar_url} alt="Github dp" />
                </div>
            </div>
        </header>

    )
}

export default Navbar;

