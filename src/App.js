import React, { Component } from 'react';
import Modal from './components/Modal';
import {CSSTransition} from 'react-transition-group';

class App extends Component {
  state = {
    isModalOpen: false,
    modalType: '',
    stories: [
      {
        title: 'Love at First Sight',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in alterest',
        name: 'David Adeoye',
        username: 'davidola',
        initials: 'D.A',
        banner: "/img/inlove.jpg",
        avatar: "/img/smile.png",
        voteCount: 60,
        id: 1
      },
      {
        title: 'A day in with the stars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in alterest Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in alterest',
        name: 'Ayo Afolabi',
        username: 'ayo@startrek.co',
        initials: 'A.A',
        banner: "/img/inlove.jpg",
        avatar: "/img/smile.png",
        voteCount: 76,
        id: 2
      },
      {
        title: 'Dinner is all that counts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in alterest Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper luctus quam, quis tempus tortor bibendum in alterest',
        name: 'Tunde Bakare',
        username: 'tundeforshow@almightydollar.com',
        initials: 'T.B',
        banner: "/img/inlove.jpg",
        avatar: "/img/smile.png",
        voteCount: 65,
        id: 3
      }
    ],
    selectedStory: {},
    form: {
      name: '',
      username: '',
      description: '',
      title: ''
    },
    errors: {
      name: '',
      username: '',
      description: '',
      title: ''
    },
    submitValidity: false,
  };

  toggleState = (e,i) => {
    if(e == 'view') {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
        modalType: e,
        selectedStory: this.state.stories[i]
      });
    }else {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
        modalType: e,
      });
    }
    
  };

  resetForm = () => {
    let form = {
      name: '',
      username: '',
      description: '',
      title: ''
    }
    this.setState({form:form,errors:form})
  }

  closeModal = e => {
    this.setState({
      isModalOpen: false
    });
    this.resetForm();
  };

  changeHandler = (event, el) => {
    const updateForm = {...this.state.form};
    updateForm[el] = event.target.value
    let errors = {...this.state.errors}
    if(el == 'description') {
      errors.description = event.target.value.split(' ').length < 25 ? 'Description must be at least 25 words' : '';
    }else{
      errors[el] = event.target.value.length < 5 ? el + ' must be at leat 5 characters' : '';
    }
    this.setState({form:updateForm,errors:errors})
  }

  validateForm = () => {
    let valid = true
    let form = {...this.state.form}
    let errors = {...this.state.errors}
    let formArray = Object.values(form)
    let errorArray = Object.values(errors)

    formArray.forEach((el) =>{
      if(el == ''){
        valid = false
      }
    })
    errorArray.forEach((el) =>{
      if(el != ''){
        valid = false
      }
    })
    this.setState({submitValidity: !valid})
    return valid
  }

  incrementVote = (i) => {
    let stories = [...this.state.stories]
    stories.forEach((el,index)=>{
      if(el.id == i){
        el.voteCount++
      }
    })
    this.setState({
      stories:stories
    })
  }

  addStory = () => {
    let valid = this.validateForm();
    if(valid){
      // console.log("The form is valid")
      let initials = ""
      let firstForm = {...this.state.form}
      firstForm.name.split(' ').forEach((el,i)=>{
        if(i == 0){
          initials +=  el[0].toUpperCase()
        }else {
          initials += ('.' + el[0].toUpperCase())

        }
      })
      let form = {...this.state.form, banner: "/img/inlove.jpg", avatar: "/img/smile.png", initials: initials,voteCount: 0,id: 'new' + Math.random()}
      let stories = [...this.state.stories]
      stories.push(form)
      this.setState({stories:stories})
      this.closeModal();
    }else {
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', function(e) {
      let bannerHeight = this.document.getElementById('banner').offsetHeight;
      let scrollPosition = this.window.scrollY;
      if(bannerHeight - scrollPosition < 90) {
        this.document.getElementById('navigation').style.backgroundColor = '#FFFFFF'
        this.document.getElementById('navigation').style.borderBottom = '1px solid #FF5E4E';

      }else {
        this.document.getElementById('navigation').style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        this.document.getElementById('navigation').style.borderBottom = 'none';

      }

    })

    
  }
  render() {
    return (
      <div>

        {/* {
          this.state.isModalOpen ? <Modal closeModal={this.toggleState}></Modal> : null
        } */}
          <CSSTransition 
            in={this.state.isModalOpen} 
            timeout={300} 
            classNames="alert"
            unmountOnExit>
            <Modal
            closeModal={this.closeModal}
            modalType={this.state.modalType}
            story={this.state.selectedStory}
            changed={this.changeHandler}
            form={this.state.form}
            incrementVote={this.incrementVote}
            addStory={this.addStory}
            errors={this.state.errors}
            submitError={this.state.submitValidity}
            >
            </Modal>
            </CSSTransition>
        <nav className="navigation" id="navigation">
          <div className="row navigation-content">
              <h3 className="logo">Val Memoirs</h3>
              <button onClick={()=>{this.toggleState('form')}} className="button">Share Your Story</button>
          </div>
        </nav>
          <div class="slider" id="banner">
            <div class="slider__slides">
              <div class="slide s--active">
                <div class="slide__inner">
                  <div class="slide__content">
                    <h2 class="slide__heading">Clip-Path Revealing Slider</h2>
                    <p class="slide__text">Greetings, Traveler!</p>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="slide__inner">
                  <div class="slide__content">
                    <h2 class="slide__heading">Simple Animation</h2>
                    <p class="slide__text">Clip-path magic!</p>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="slide__inner">
                  <div class="slide__content">
                    <h2 class="slide__heading">Very Stylish Effect!</h2>
                    <p class="slide__text">It looks cool, isn't it?</p>
                  </div>
                </div>
              </div>
              <div class="slide">
                <div class="slide__inner">
                  <div class="slide__content">
                    <h2 class="slide__heading">Limited browser support</h2>
                    <p class="slide__text">Forget about IE/Edge and FF</p>
                  </div>
                </div>
              </div>
              <div class="slide s--prev">
                <div class="slide__inner">
                  <div class="slide__content">
                    <h2 class="slide__heading">Check my other stuff!</h2>
                    <p class="slide__text">Naaa and Still testing</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider__control">
              <div class="slider__control-line"></div>
              <div class="slider__control-line"></div>
            </div>
            <div class="slider__control slider__control--right m--right">
              <div class="slider__control-line"></div>
              <div class="slider__control-line"></div>
            </div>
          </div>
        <main className="row">
          <h4 className="heading-secondary">Read How to Share Your Story</h4>
          <br/>
          <div className="instructions">
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Click on share your story button</p>
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Fill in the required information</p>
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Click submit to publish your story</p>
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img"/>Don't forget to vote</p>
          </div>



          <section className="stories">
            {
              this.state.stories.map((item,i)=>{
                return(
                  <div className="story" key={i}>
                      <div className="story__img-cont">
                        <img src={item.banner} className="story__img" alt="story banner"/>
                      </div>
                      <div className="story__content">
                        <h4 className="story__content--title">{item.title}</h4>
                        <p className="story__content--description">
                        {item.description.substring(0, 100)}
                        {
                          item.description.length > 100  ?
                            <span className="story__content--read" onClick={()=>{this.toggleState('view',i)}}>...Read more</span> : null
                        }
                        </p>
                        <div className="story__avatar">
                            <img src={item.avatar} className="story__avatar--img"/>
                            <span className="story__avatar--initials" >{item.initials}</span>
                        </div>
                        <p className="story__personName"> {item.username} </p>
                        <div className="story__button--cont">
                          <button className="story__button" onClick={()=>{this.incrementVote(item.id)}}>VOTE</button>
                          <span className="story__button--votes" >{item.voteCount} votes</span>
                        </div>
                      </div>
                  </div>
                )
              })
            }
            
          </section>
        </main>

        <footer className="footer">
          <h4>&copy; Copyright 2019</h4>
        </footer>

      </div>
    );
  }
}

export default App;
