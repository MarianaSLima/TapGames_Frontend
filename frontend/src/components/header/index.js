import React from "react";
import './style.css'
import SignIn from "../signin/index";

function Header(props) {
  return (
    
    <header>
      <nav>
        <ul>
          <li>
            <a className="btn" onClick={() => props.onclickSignin()}>sign in</a>
          </li>
          <li>
            <a className="btn" onClick={() => props.onclickSignup()}>sign up</a>
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