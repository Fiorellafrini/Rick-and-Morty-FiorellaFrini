import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return(
        <nav className={style.nav} >
            <div className={style.btns}>
                <Link to='/' className={style.about} >LOGOUT</Link>
                <Link to='/about' className={style.about} >About</Link>
                <Link to='/home' className={style.home} >Home</Link>
            </div>

            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;