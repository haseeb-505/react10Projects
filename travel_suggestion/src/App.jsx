import { useState } from 'react';
import backgroundImage from './images/Faisal_Masjid_From_Damn_e_koh.jpg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// switch import

import './App.css';

// import Navigation from './components/Navigation/Navigation'
import Navigation2 from './components/Navigation/Navigation2';
import Social_links from './components/social_links/Social_links';
import Welcome from './components/welocme_page/Welcome';


function App() {
  // const [count, setCount] = useState(0)
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // or 'contain' depending on your requirement
    backgroundPosition: 'contain',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
    padding: '0',
    margin: '0'
  }

  return (
    <div style={appStyle}>
      <Welcome />
    </div>
  )
}

export default App
