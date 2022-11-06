import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NavPage from "./NavPage";
import '../assets/main.css'

function Main() {
    return (
        <section >
            <div>
                <Navbar />

                <div className="main-page container">
                    <Sidebar />
                    <NavPage />
                </div>

            </div>
        </section>

    )
}

export default Main;

