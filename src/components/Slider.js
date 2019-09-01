import React from 'react'

const slider = () => {
   

    return (
        <div className="slider" id="banner">
            <div className="slider__slides">
              <div className="slide s--active">
                <div className="slide__inner" id="slider1">
                  <div className="slide__content">
                    <h2 className="slide__heading">Share Your Favorite Memories</h2>
                    <p className="slide__text">Its super easy!</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="slide__inner" id="slider2">
                  <div className="slide__content">
                    <h2 className="slide__heading">The time Of Love</h2>
                    <p className="slide__text">Time to gum body!</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="slide__inner" id="slider3">
                  <div className="slide__content">
                    <h2 className="slide__heading">Win the Ultimate Prize</h2>
                    <p className="slide__text">Just give it a try</p>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="slide__inner" id="slider4">
                  <div className="slide__content">
                    <h2 className="slide__heading">It all Starts With One Step</h2>
                    <p className="slide__text">Just click on share your story</p>
                  </div>
                </div>
              </div>
              <div className="slide s--prev">
                <div className="slide__inner" id="slider5">
                  <div className="slide__content">
                    <h2 className="slide__heading">Check out Other Stuff!</h2>
                    <p className="slide__text">you will be impressed (i hope)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider__control">
              <div className="slider__control-line"></div>
              <div className="slider__control-line"></div>
            </div>
            <div className="slider__control slider__control--right m--right">
              <div className="slider__control-line"></div>
              <div className="slider__control-line"></div>
            </div>
          </div>
    )
}

export default slider