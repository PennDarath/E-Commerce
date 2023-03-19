import { useState } from 'react';
import Card from './components/Card/Card';
import Login from './components/HeaderSection/Login';
import NavBar from './components/HeaderSection/NavBar';
import Slides from './components/SlideSection/Slides';

const fakeimages = [
  '../images/anime4-removebg-preview.png',
  '../images/anime6.webp',
]

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-white">
      <Login />
      <NavBar />
      <Slides images={fakeimages}/>
    </div>
  );
}

export default App;
