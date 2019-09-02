import React from 'react'

const slider = () => {
   

    return (
        // <div className="slider" id="banner">
        //     <div className="slider__slides">
        //       <div className="slide s--active">
        //         <div className="slide__inner" id="slider1">
        //           <div className="slide__content">
        //             <h2 className="slide__heading">Share Your Favorite Memories</h2>
        //             <p className="slide__text">Its super easy!</p>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="slide">
        //         <div className="slide__inner" id="slider2">
        //           <div className="slide__content">
        //             <h2 className="slide__heading">The time Of Love</h2>
        //             <p className="slide__text">Time to gum body!</p>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="slide">
        //         <div className="slide__inner" id="slider3">
        //           <div className="slide__content">
        //             <h2 className="slide__heading">Win the Ultimate Prize</h2>
        //             <p className="slide__text">Just give it a try</p>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="slide">
        //         <div className="slide__inner" id="slider4">
        //           <div className="slide__content">
        //             <h2 className="slide__heading">It all Starts With One Step</h2>
        //             <p className="slide__text">Just click on share your story</p>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="slide s--prev">
        //         <div className="slide__inner" id="slider5">
        //           <div className="slide__content">
        //             <h2 className="slide__heading">Check Out My Other Stuff!</h2>
        //             <p className="slide__text">you will be impressed (i hope)</p>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="slider__control">
        //       <div className="slider__control-line"></div>
        //       <div className="slider__control-line"></div>
        //     </div>
        //     <div className="slider__control slider__control--right m--right">
        //       <div className="slider__control-line"></div>
        //       <div className="slider__control-line"></div>
        //     </div>
        //   </div>
        <div className="carousel-wrapper" id="banner">
          <span id="item-1"></span>
          <span id="item-2"></span>
          <span id="item-3"></span>
          <span id="item-4"></span>
          <span id="item-5"></span>
          <div className="carousel-item item-1" id="items-1">
              <div style={{position:'relative',height:'100%'}}><h2>Share Your Favorite Memories</h2></div>
            <a className="arrow arrow-prev" href="#item-5"></a>
            <a className="arrow arrow-next" href="#item-2"></a>
          </div>
          
          <div className="carousel-item item-2" id="items-2">
          <div style={{position:'relative',height:'100%'}}><h2>The time Of Love</h2></div>
            <a className="arrow arrow-prev" href="#item-1"></a>
            <a className="arrow arrow-next" href="#item-3"></a>
          </div>
          
          <div className="carousel-item item-3" id="items-3">
          <div style={{position:'relative',height:'100%'}}><h2>Win the Ultimate Prize1</h2></div>
            <a className="arrow arrow-prev" href="#item-2"></a>
            <a className="arrow arrow-next" href="#item-4"></a>
          </div>

          <div className="carousel-item item-4" id="items-4">
          <div style={{position:'relative',height:'100%'}}><h2>It all Starts With One Step</h2></div>
            <a className="arrow arrow-prev" href="#item-3"></a>
            <a className="arrow arrow-next" href="#item-5"></a>
          </div>

          <div className="carousel-item item-5" id="items-5">
          <div style={{position:'relative',height:'100%'}}><h2>Check Out My Other Stuff</h2></div>
            <a className="arrow arrow-prev" href="#item-4"></a>
            <a className="arrow arrow-next" href="#item-1"></a>
          </div>
        </div>
        
    )
}

export default slider