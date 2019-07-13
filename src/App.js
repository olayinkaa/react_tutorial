import React from 'react';
import './App.css';
import Card from './components/CardComponent'
import Event from './components/EventComponent'
import Data from './data/courses'

function App() {
  const heading = 'INSTAGRAM'
  const myData = Data.map((data)=>{

          return(

            <Card title={data.title} text={data.content} button="Register" key={data.id} />
          )
  })
  return (
    <div className="m-3">
        <h3>{heading}</h3>
        <Event />
    </div>
  );
}

export default App;
