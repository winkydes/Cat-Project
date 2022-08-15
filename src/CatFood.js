import Draggable from "react-draggable";
import React from "react";
import catFood from './assets/catFood.png';
import audio1 from './assets/audio/catSound1.mp3';
import audio2 from './assets/audio/catSound2.mp3';
import audio3 from './assets/audio/catSound3.mp3'

function CatFood(props) {
  let catAudio1 = new Audio(audio1);
  let catAudio2 = new Audio(audio2);
  let catAudio3 = new Audio(audio3);

  let audioArr = [catAudio1, catAudio2, catAudio3];

  function rndNo() {
    return Math.floor(Math.random() * audioArr.length);
  }

  function preventDragHandler(e) {
    e.preventDefault();
  }

  function handleStop(event) {
    if (event.clientX > props.x && event.clientX < props.x + props.width && event.clientY > props.y && event.clientY < props.y + props.height) {
      props.callBack();
      audioArr[rndNo()].play();
    }
  }

  return (
    <Draggable onStop={(event) => handleStop(event)} className={"drag"} position={{x:0, y:0}}>
      <div>
        <img src={catFood} alt="food" width={"50"} onDragStart={e => preventDragHandler(e)}/>
      </div>
    </Draggable>
  )
}

export default CatFood;