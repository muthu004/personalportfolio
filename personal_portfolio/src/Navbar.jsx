import { useState } from "react";

function Navbar() {
  const [click, setclick] = useState(false);
  const handleClick = (e) => {
    e.preventDefault(); 
    setclick(!click);
  };

  return (
    <div>
      Navbar
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a onClick={handleClick} href="/about">
              About
            </a>

            {click && (
              <ul>
                <li>
                  <a href="/projects">Projects</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
