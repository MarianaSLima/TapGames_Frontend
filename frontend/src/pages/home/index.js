import React, { useState } from 'react';
import './style.css';
import Banner from '../../components/banner/index';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';

function App() {

  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  function handleSignin() {
    setOpenSignin(!openSignin);
  }

  function handleSignup() {
    setOpenSignup(!openSignup);
  }

  return (
    <>
    <Header onclickSignin={handleSignin}
            onclickSignup={handleSignup}
            openSignin={openSignin}/>
            
    <Banner openSignup={openSignup}
            openSignin={openSignin}
            onClickCancel={handleSignup}/>
    <Footer />
    </>
  );
}

export default App;
