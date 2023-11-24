'use client'
import { useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [menuLateral, setMenuLateral] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="navBar">
        <button onClick={()=> setMenuLateral(!menuLateral)}>Menu</button>
        <div>Logo</div>
        <button onClick={()=> router.push('/login')}>Login</button>
      </nav>

      {menuLateral && (
        <div className="menuLateral">
          <div className="fechar" onClick={()=> setMenuLateral(!menuLateral)}>X</div>
          <ul>
            <li>ITEM 1</li>
            <li>ITEM 2</li>
            <li>ITEM 3</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
