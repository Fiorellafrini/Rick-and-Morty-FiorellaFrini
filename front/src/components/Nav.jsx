import SearchBar from "./ShearchBar";
import React from "react";
import { Link } from "react-router-dom";



const Nav = ({ onSearch }) => {
   return(
       <nav>
        {/* <Link to="/home">Home</Link>
        <Link to="/favorites">Favorites</Link> */}

           <SearchBar onSearch={onSearch} />
       </nav>
   )
}

export default Nav;






// export default function Nav(props){
// return (
//    <Nav>
//       <SearchBar onSearch={props.onSearch} />    
//         {/* //recibe a onsearch por props y la manda a search */}
//    </Nav>

// )
// }

