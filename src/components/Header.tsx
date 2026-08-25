import { NavLink } from "react-router-dom";
import '../App.css'


const Header = () => {
    return (
    <div className= "header">
        <div className="headerNav">
            <div>
                <NavLink to="/" end className="text-lg font-medium text-slate-300 hover:text-sky-400 transition-colors" >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink to="/certificates" end className="text-lg font-medium text-slate-300 hover:text-sky-400 transition-colors" >
                    Certificates
                </NavLink>
            </div>
        </div>
    </div>
    )
};

// Return the component
export default Header;