import "./App.css";

import { useState } from "react";
import { marked } from "marked";



function App() {
  
  const [codeInput, setCodeInput] = useState(` <h1>Hello!</h1>
   
  <h2>This is a markdown previewer.</h2>
  <h3>Here's a link:</h3>
  <a href="https/www.google.com">https/www.google.com</a>
  <p> The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the
  array.<p>
  <code>const handleInput = (e) => {setCodeInput(e.target.value);}</code>
  <p>There are also lists:</p>
  <ul>
    <li>Item1</li>
    <li>Item2</li>
    <li>Item3</li>  
  </ul>
  <p>A block quote:</p>
  <blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
  <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
  </blockquote>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg">

  <b>Bold text</b>
  `);
const [fullScreen, setFullScreen] = useState('')



  const handleInput = (e) => {
    setCodeInput(e.target.value);
  };

  const handleFullScreenPreview = (e) => {
    const hide = document.querySelector('.editorContainer').classList.toggle('hide')  
    setFullScreen(hide);
  }
  const handleFullScreenEditor = (e) => {
    
    const container = document.querySelector('.parseContainer')
    const hide = container.classList.toggle('hide')
    setFullScreen(hide);
  }

  return (
    <div>
      <div class="editorContainer">
        <div class="editorToolbar" style={{ fontWeight: "bold" }}>
          Editor
          
          <button onClick={handleFullScreenEditor} >&#x26F6;</button>
        </div>
        <textarea
       
          onChange={handleInput}
          id="editor"
          rows="12"
          cols="50"
        >
          {codeInput}
        </textarea>
      </div>

      <div class="parseContainer">
        <div class="previewToolbar" style={{ fontWeight: "bold" }}>
          Preview<button onClick={handleFullScreenPreview}>&#x26F6;</button>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(codeInput)}}
        ></div>
      </div>
    </div>
  );
}

export default App;
