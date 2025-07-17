import { useState } from "react";

function Navbar() {
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  function choose(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    if (!isOpen) {
      setOptions(["Option 1", "Option 2", "Option 3"]);
    } else {
      setOptions([]);
    }
  }

  return (
    <div>
      Navbar
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a onClick={choose} href="/about">About</a>
            {options.map((option, index) => (
              <div key={index} className="option-item">
                {option}
              </div>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
