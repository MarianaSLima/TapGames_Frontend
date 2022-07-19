import React from "react";
import SignIn from "../signin/index";

function Header(props) {
  return (
    
    <header>
      <nav>
        <ul>
          <li>
            <button className="btn" onClick={() => props.onclickSignin()}>sign in</button>
          </li>
          <li>
            <button className="btn" onClick={() => props.onclickSignup()}>sign up</button>
          </li>
          <div>
            {props.openSignin &&
              <SignIn />
            }
          </div>
        </ul>
      </nav>
    </header>

  );
}

export default Header;