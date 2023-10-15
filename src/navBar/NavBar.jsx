import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom/dist"
import Context from "../contexto/Context";

const NavBar = () => {
  
  const {deslogearse} = useContext(Context);
  const navegacion = useNavigate();

  const logout = ()=> {
      deslogearse();
      navegacion("/login", {replace: true});
  }

  return (
    <>
      <nav>
        <div className="menu">
            <NavLink to="cp" >Capital y Patagonia</NavLink>
            <NavLink to="no" >Norte y Oeste</NavLink>
            <NavLink to="/viaje" >Mi viaje</NavLink>
        </div>
        <div className="logout">
        <button onClick={logout}> Logout</button>
        </div>
        
            
      </nav> 
    </>
  )
}

export default NavBar
