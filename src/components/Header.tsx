import { NavLink } from "react-router-dom";
import '../App.css'


const Header = () => {
    return (
    <div className= "header">
        <div className="header-title">
            <NavLink to="/" end className="header-element" >
                    CM
            </NavLink>
            <NavLink to="/" end className="header-element" >
                    Ciaran McDonnell
            </NavLink>
        </div>
        <div className="header-nav-bar">
            <div>
                <NavLink to="/" end className="header-element" >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/about" end className="header-element" >
                    About
                </NavLink>
            </div>
            <div>
                <NavLink to="/cv" end className="header-element" >
                    CV
                </NavLink>
            </div>
            <div>
                <NavLink to="/projects" end className="header-element" >
                    Projects
                </NavLink>
            </div>
            <div>
                <NavLink to="/certificates" end className="header-element" >
                    Certificates
                </NavLink>
            </div>
        </div>
    </div>
    )
};

// Return the component
export default Header;