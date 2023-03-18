import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!", "success")
  }

  const handleLoClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!", "success")
  }

  const handleTiClick = () =>{
    let newText = titlecase(text);
    setText(newText);
    props.showAlert("Converted to Titlecase!!", "success")
  }
  function titlecase(text){
    text = text.toLowerCase().split(' ');
    for(var i=0;i<text.length;i++){
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
    }
    return text.join(' ');
  }

  const speak = () =>{
    let newText = new SpeechSynthesisUtterance();
    newText.text = text;
    window.speechSynthesis.speak(newText);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Read out"){
      toogle.innerHTML = "Stop"
      props.showAlert("Reading Out!!", "success")
    }
    else {
      toogle.innerHTML = "Read out"
      if (toogle.innerHTML === "Read out"){
        window.speechSynthesis.cancel();
        props.showAlert("Reading Paused!!", "success")
      }
    }
  }

  const handleTalktoType = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.onstart = () => {
        console.log('voice is activated, you can to microphone')
    } 
    recognition.onresult = (event) => {
        const current = event.resultIndex
        const transcript = event.results[current][0].transcript
        console.log(transcript)
        setText(text + transcript)
    
    }
    recognition.start()        
    props.showAlert('say to write text', 'success')
  } 

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('Copied to clipboard!', 'success')
  }

  const handleClear = () =>{
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!!", "success")
  }

  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  //text = 'new text'; //wrong way to change state
  //setText("new text"); //correct way to change state


  return (
    <>
     <div className='container' style={{color: props.mode==='dark'? 'white' : '#264362', fontFamily: 'Roboto Slab'| 'serif'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#445c76':'white', color: props.mode === 'dark'?'white':'black'}} id="textarea" rows="8" placeholder="Enter your text here"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>UPPERCASE</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleLoClick}>lowerCase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleTiClick}>Title Case</button>
        <button className='btn btn-primary mx-2 my-1' onClick={speak} id="toggle">Read Out</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleTalktoType}>Talk to Type</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleClear}>CLEAR</button>     
      </div>
      <div className='container my-3' style={{color: props.mode==='dark'? 'white' : '#264362'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length - 1) } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in textbox to preview it here"}</p>
      </div>
    </>
  
  )
}
 