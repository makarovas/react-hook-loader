import React, {useState, useEffect} from 'react';

function App({username} ={}) {
  const [data, setData] = useState(null);
  useEffect(() => {
   return () => {
    fetch('url')
    .then(setData)
   }
  }, [username])
  if(data===null) {return <p>Loading...</p>}
  const {heading, avatar, text} = data;
  return (
    <div >
     <h1>{heading || 'heading'}</h1>
     <img src={avatar || 'img'}/>
     <p>{text || 'text'}</p>
    </div>
  );
}

export default App;
