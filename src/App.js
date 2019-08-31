import React from 'react';

function App() {
  return (
    <div>
      <nav className="navigation">
        <div className="row navigation-content">
            <h3 className="logo">Val Memoirs</h3>
            <button className="button">Share Your Story</button>
        </div>
      </nav>
      <div className="banner"></div>
      <main className="row">
        <h4 className="heading-secondary">How to Share Your Story</h4>
        <br/>
        <div className="instructions">
          <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Click on share your story button</p>
          <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Fill in the required information</p>
          <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Click submit to publish your story</p>
          <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Don't forget to vote</p>
        </div>

        <section className="stories">
          <div className="story">
              <div className="story__img-cont">
                <img src="/img/inlove.jpg" className="story__img"/>
              </div>
              <div className="story__content">
                <h4 className="story__content--title">Love at First Sight</h4>
                <p className="story__content--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in
                </p>
                <div className="story__avatar">
                    <img src="/img/smile.png" className="story__avatar--img"/>
                    <span className="story__avatar--initials" >D.A</span>
                </div>
                <p className="story__personName">David <span className="story__personName-sub"> Adeoye</span> </p>
                <div className="story__button--cont">
                  <button className="story__button">VOTE</button>
                  <span className="story__button--votes">0 votes</span>
                </div>
              </div>
          </div>
          <div className="story">
              <div className="story__img-cont">
                <img src="/img/inlove.jpg" className="story__img"/>
              </div>
              <div className="story__content">
                <h4 className="story__content--title">Love at First Sight</h4>
                <p className="story__content--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in
                </p>
                <div className="story__avatar">
                    <img src="/img/smile.png" className="story__avatar--img"/>
                    <span className="story__avatar--initials" >D.A</span>
                </div>
                <p className="story__personName">David <span className="story__personName-sub"> Adeoye</span> </p>
                <div className="story__button--cont">
                  <button className="story__button">VOTE</button>
                  <span className="story__button--votes">0 votes</span>
                </div>
              </div>
          </div>
          <div className="story">
              <div className="story__img-cont">
                <img src="/img/inlove.jpg" className="story__img"/>
              </div>
              <div className="story__content">
                <h4 className="story__content--title">Love at First Sight</h4>
                <p className="story__content--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in
                </p>
                <div className="story__avatar">
                    <img src="/img/smile.png" className="story__avatar--img"/>
                    <span className="story__avatar--initials" >D.A</span>
                </div>
                <p className="story__personName">David <span className="story__personName-sub"> Adeoye</span> </p>
                <div className="story__button--cont">
                  <button className="story__button">VOTE</button>
                  <span className="story__button--votes">0 votes</span>
                </div>
              </div>
          </div>
          <div className="story">
              <div className="story__img-cont">
                <img src="/img/inlove.jpg" className="story__img"/>
              </div>
              <div className="story__content">
                <h4 className="story__content--title">Love at First Sight</h4>
                <p className="story__content--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in
                </p>
                <div className="story__avatar">
                    <img src="/img/smile.png" className="story__avatar--img"/>
                    <span className="story__avatar--initials" >D.A</span>
                </div>
                <p className="story__personName">David <span className="story__personName-sub"> Adeoye</span> </p>
                <div className="story__button--cont">
                  <button className="story__button">VOTE</button>
                  <span className="story__button--votes">0 votes</span>
                </div>
              </div>
          </div>
          <div className="story">
              <div className="story__img-cont">
                <img src="/img/inlove.jpg" className="story__img"/>
              </div>
              <div className="story__content">
                <h4 className="story__content--title">Love at First Sight</h4>
                <p className="story__content--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in
                </p>
                <div className="story__avatar">
                    <img src="/img/smile.png" className="story__avatar--img"/>
                    <span className="story__avatar--initials" >D.A</span>
                </div>
                <p className="story__personName">David <span className="story__personName-sub"> Adeoye</span> </p>
                <div className="story__button--cont">
                  <button className="story__button">VOTE</button>
                  <span className="story__button--votes">0 votes</span>
                </div>
              </div>
          </div>
          <div className="story">
              <div className="story__img-cont">
                <img src="/img/inlove.jpg" className="story__img"/>
              </div>
              <div className="story__content">
                <h4 className="story__content--title">Love at First Sight</h4>
                <p className="story__content--description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in
                </p>
                <div className="story__avatar">
                    <img src="/img/smile.png" className="story__avatar--img"/>
                    <span className="story__avatar--initials" >D.A</span>
                </div>
                <p className="story__personName">David <span className="story__personName-sub"> Adeoye</span> </p>
                <div className="story__button--cont">
                  <button className="story__button">VOTE</button>
                  <span className="story__button--votes">0 votes</span>
                </div>
              </div>
          </div>
          
        </section>
      </main>

      <footer className="footer">
        <h4>&copy; Copyright 2019</h4>
      </footer>

    </div>
  );
}

export default App;
