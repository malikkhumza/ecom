import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

function Navbar() {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "All Products", link: "/allproduct" },
    { name: "Signup", link: "/signup" },
    { name: "Cart", link: "/cart" },
    // {name:"admin", link:"/admin"},
    // {name:"logout", link:"/logout"},
  ];

  return (
    <header className="bg-pink-500 sticky top-0">
      <nav className="flex justify-between p-4 text-white">
        <div>
          <Link>Logo</Link>
        </div>

        <div>
          <ul className="flex ">
            {menuItems.map((items) => 
              <li
              
              key={items.name}>
                <button
                className="px-3 " 
                onClick={() => navigate(items.link)}>
                  {items.name}
                </button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <SearchBar/>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
