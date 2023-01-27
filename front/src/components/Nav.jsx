import SearchBar from "./ShearchBar";
import React from "react";



const Nav = ({ onSearch }) => {
   return(
       <nav>
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

