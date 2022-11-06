import { SidebarData } from "./SidebarData";
import '../assets/sidebar.css'

function Sidebar() {
    return (
        <section>
            <ul className="sidebar-list">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }} >
                            <div href={val.link}>{val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Sidebar; 