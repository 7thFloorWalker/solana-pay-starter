import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "7thfloorwalker";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header">Outdoor Outfitters E-Store</p>
          <p className="sub-text">We sell maps and shit</p>
        </header>

        <main>
          <img src="/mapreading1.jpg" alt="mapping" />
        </main>

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
              className="footer-text"
              href="https://twitter.com/@_buildspace"
              target="_blank"
              rel="noreferrer"
          >{`Special thanks to @_buildspace`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
