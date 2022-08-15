import React from 'react';
import CatFood from './CatFood';

function CatImageHolder() {
  const [image, setImage] = React.useState('');
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);

  const imageRef = React.useRef();

  function setPosition() {
    let bound = imageRef.current.getBoundingClientRect();
    console.log(bound);
    setX(bound.left);
    setY(bound.top);
    setWidth(bound.width);
    setHeight(bound.height);
  }

  async function callCatImageApi() {
    await fetch('https://api.thecatapi.com/v1/images/search', {
      method: 'GET',
      mode: 'cors',
    })
    .then(res => res.json())
    .then(res => setImage(res[0].url));
  }

  React.useEffect(() => {
    callCatImageApi();
  }, [refresh]);

  React.useEffect(() => {
    setPosition();
  }, [loaded]);

  return (
    <div className="container">
      <img className="cat-image" src={image} alt="new" ref={imageRef} onLoad={() => setLoaded(true)} style={loaded ? {} : {display: 'none'}}/>
      <CatFood x={x} y={y} width={width} height={height} callBack = {() => setRefresh(!refresh)}/>  
    </div>
  )
}

export default CatImageHolder;