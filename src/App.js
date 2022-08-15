import React from 'react';
import './App.css';
import CatImageHolder from './CatImageHolder';

function App() {
  const [feedCount, setFeedCount] = React.useState(0);
  return (
    <div className="App">
      <p>You have fed {feedCount} {feedCount < 2? "cat" : "cats"}</p>
      <header className="App-header">
        <CatImageHolder callBack={() => setFeedCount(feedCount + 1)}/>
      </header>
    </div>
  );
}

export default App;
