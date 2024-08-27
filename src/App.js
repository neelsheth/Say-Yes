import React, { useState ,useEffect} from 'react';
import './App.css';
import ParticlesBg from 'particles-bg';


function App() {
  const [showYes, setShowYes] = useState(false);
  const handleYesClick = () => {
    setShowYes(!showYes);
    // document.getElementById('particles-bg').style.display = 'block';
  };

  const [noButtonPosition, setNoButtonPosition] = useState({ });


  const handleNoHover = () => {
    const increment1 = Math.floor(Math.random() * 100)
    const increment2 = Math.floor(Math.random() * 50) 
    const increment = increment1 + increment2

    const randomTop = Math.floor(Math.random() * 250)  + '%';
    // const randomLeft = Math.floor(Math.random() * 90) + 10 + '%';
    const randomLeft = Math.floor(Math.random() * 200) - 50 + '%';

    setNoButtonPosition({ top: randomTop, left: randomLeft });
  };

  const[id,setId] = useState(null);
  const[cr,setCr] = useState('#ffa726');
  const[textcr,setTextCr] = useState('black');


  useEffect(() => {
    // Extract URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    
    const param = urlParams.get('id');
    console.log(urlParams);
    console.log(param);
    // Change text based on URL parameter
    if (param === '1') {
      setId(1);
      setCr('red')
      setTextCr('white')
    }else{
      setCr('#ffa726')
      setTextCr('black')
      
      setId(null);
    }
  }, []);

  

  return (
    <div className="App">
      {id == 1 && <h1>
        <span style={{color:"red"}}>I Love You..!!</span> Will You?
      </h1>}
      {id == null && <h1>
        <span style={{color:cr}}>Will my salary be ₹35,000..??</span>
      </h1>}
      {console.log(noButtonPosition)}
      <div className="buttons" style={{marginLeft:"-90px"}}>
        <button className="yes-button" style={{background:cr,color:textcr}} onClick={handleYesClick}>Yes</button>
        <button
          className="no-button"
          style={{ top: noButtonPosition.top, left: noButtonPosition.left, }}
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
     {showYes && <ParticlesBg type="lines" bg={true} id="particles-bg" />}
    


    </div>
  );
}

export default App;
