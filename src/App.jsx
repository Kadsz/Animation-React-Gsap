
import './App.css'

import { gsap } from 'gsap'
import { useEffect } from 'react';


function App() {

  const tl = gsap.timeline();
  const welcomeScreen = gsap.timeline({
    paused: "true",
  })

  useEffect(() => {
    tl.from(".title", {
      duration: 0.5,
      opacity: 0,
      y: 10,
    })
    tl.from(".bracket", {
      duration: 0.3,
      scale: 0,
      margin: 0,
    })
    tl.from("#loader", {
      duration: .2,
      scale: 0,
    })
    tl.from("img", {
      duration: .8,
      y: 150,
      opacity: 0,
      stagger: {
        amount: 0.1,
      }
    })
    tl.from(".bottom-line", {
      duration: 0.5,
      y: 50,
      opacity: 0,
      stagger: {
        amount: 0.1,
      },
    },
      "-=.5"
    );

    welcomeScreen.to(".loading-section, .loading-images-container", {
      y: -10,
      opacity: 0,
    })
    welcomeScreen.to(".loading-screen", {
      duration: 0.8,
      y: -2000,
      ease: "Power4.out"
    })
    welcomeScreen.from(".welcome-screen h1 ", {
      y: 200,
      duration: .5,
      stagger: {
        amount: 0.2
      },
    }, "-=1")
  }, [])

  // inicio do scroll
  let id, i = 0;
  function loader() {
    id = setInterval(frame, 45)
  }

  function frame() {
    if (i >= 100) {
      clearInterval(id)
      welcomeScreen.play()
    }
    else {
      i++
      document.getElementById("loader").innerHTML = i + "%"
    }
  }
  window.onload = function () {
    loader()
  }

  const loaderImages = [
    {
      images: '01'
    }
  ]





  return (
    <>
      <div className="loading-screen">
        <div className="loading-section">
          <div className="title">Carlos</div>
          <div className="bracket bracket1">(</div>
          <div id="loader"></div>
          <div className="bracket bracket2">)</div>
          <div className="title">Eduardo</div>
        </div>
        <div className='loading-images-container'>
          <div className='loading-images'>
            <img src="../images/loader/01.jpg" alt="" />
            <img src="../images/loader/02.jpg" alt="" />
            <img src="../images/loader/03.jpg" alt="" />
            <img src="../images/loader/05.jpg" alt="" />
          </div>
          <div className='bottom-section'>
            <div className='bottom-line'>
              Carlos Eduardo Sousa design studio
            </div>
            <div className='bottom-line'>
              2022 &#169;
            </div>
          </div>
        </div>
      </div>

      <div className='welcome-screen'>
        <span>
          <h1>Bem-Vindo</h1>
        </span>
        <span>
          <h1>👋🏽</h1>
        </span>
      </div>
    </>

  )
}

export default App
