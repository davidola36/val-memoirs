import React, { Component } from 'react';
import Modal from './components/Modal';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';
import Slider from './components/Slider';

class App extends Component {
  state = {
    isModalOpen: false,
    loading: true,
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
    sliderImages:[],
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
    validityString: ""
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
    this.setState({form:form,errors:form,submitValidity:false})
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
    let validString = ""
    formArray.forEach((el) =>{
      if(el == ''){
        valid = false
        validString = "Ensure all required * fields have been field"
      }
    })
    errorArray.forEach((el) =>{
      if(el != ''){
        valid = false
        validString = "Ensure all required * fields have been field"
      }
    })

    if(valid) {
      let username = form.username
      let stories = [...this.state.stories]
      stories.forEach((el)=>{
        if(el.username == username) {
          valid = false
          validString = "This username has been taken"
        }
      })
    }
    this.setState({submitValidity: !valid,validityString:validString})
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
        if(i === 0){
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
    axios.get('https://api.unsplash.com/collections/2152381/photos?per_page=5', {
      headers: {
        Authorization: 'Client-ID cacac51dbd74689b4acf2d4cf363fa2799adac8d7420ea547763fee5fac8f246 '
      }
    })
    .then((res)=>{
      this.setState({loading:false,sliderImages:[...res.data]}, ()=>{
        res.data.forEach((el, i)=>{
          let id = 'slider' + (i + 1)
          let url =  'url(' + el.urls.regular + ')';
          document.getElementById(id).style.backgroundImage = url
        })
      })
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
            submitString = {this.state.validityString}
            >
            </Modal>
            </CSSTransition>
        <nav className="navigation" id="navigation">
          <div className="row navigation-content">
              <h3 className="logo">Val Memoirs</h3>
              <button onClick={()=>{this.toggleState('form')}} className="button">Share Your Story</button>
          </div>
        </nav>
        {this.state.loading ?  <div style={{marginTop:'8rem',textAlign:'center'}}><div className="loader"></div></div> : <Slider /> }
        <main className="row">
          <h4 className="heading-secondary">Read How to Share Your Story</h4>
          <br/>
          <div className="instructions">
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img" alt="instructions 1"/>Click on share your story button</p>
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img" alt="instructions 2"/>Fill in the required information</p>
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img" alt="instructions 3"/>Click submit to publish your story</p>
            <p className="instructions__text"><img src="/img/redheart.svg" className="instructions__img" alt="instructions 4"/>Don't forget to vote</p>
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
                            <img src={item.avatar} className="story__avatar--img" alt="person avatar"/>
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
