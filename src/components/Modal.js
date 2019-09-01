import React, {Component} from 'react';
import ReactDom from 'react-dom';
const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
    

    render() {
        return ReactDom.createPortal(
            <div className="Modal">
                
                <div className="Modal-content">
                    { this.props.modalType == 'form' ? <form className="form" onSubmit={this.props.addStory}>
                        <div className="form__title"><h3><span></span>Share Your Story</h3></div>
                        <label className="form__label">Fullname<span className="required"> *</span></label>
                        <input type="text" className="form__input" placeholder="Enter fullname "  value={this.props.form.name} onChange={(event)=>{this.props.changed(event, 'name')}}/>
                        {this.props.errors.name == '' ? null : <label className="form__error">{this.props.errors.name}</label> }

                        <label className="form__label">Username<span className="required"> *</span></label>
                        <input type="text" className="form__input" placeholder="Enter username " value={this.props.form.username}  onChange={(event)=>{this.props.changed(event, 'username')}} />
                        {this.props.errors.username == '' ? null : <label className="form__error">{this.props.errors.username}</label> }
                        <label className="form__label">Title of Story<span className="required"> *</span></label>
                        <input type="text" className="form__input" placeholder="Enter title " value={this.props.form.title}  onChange={(event)=>{this.props.changed(event, 'title')}}/>
                        {this.props.errors.title == '' ? null : <label className="form__error">{this.props.errors.title}</label> }
                        <label className="form__label">Description of Story<span className="required"> *</span></label>
                        <textarea className="form__textarea" placeholder="Enter story description " value={this.props.form.description}  onChange={(event)=>{this.props.changed(event, 'description')}}/>
                        {this.props.errors.description == '' ? null : <label className="form__error">{this.props.errors.description}</label> }
                        {/* <label className="form__label">Add Banner<span className="required"> *</span></label>
                        <input type="file" placeholder="Add Banner" className="form__upload"/>
                        <label className="form__label">Add Avatar</label>
                        <input type="file" placeholder="Add Avatar" className="form__upload"/> */}


                        {this.props.submitError ? <p className="form__button--error">{this.props.submitString}</p> : null }
                        <input type="button" value="Submit" className="form__button" onClick={this.props.addStory}/>

                    </form>: null}

                    {
                        this.props.modalType == "view" ?
                            <div>
                               <div className="story" id="modal-story">
                                <div className="story__img-cont">
                                <img src="/img/inlove.jpg" className="story__img"/>
                                </div>
                                <div className="story__content">
                                <h4 className="story__content--title">{this.props.story.title}</h4>
                                <p className="story__content--description">
                                    {this.props.story.description}
                                </p>
                                <div className="story__avatar">
                                    <img src="/img/smile.png" className="story__avatar--img"/>
                                    <span className="story__avatar--initials" >{this.props.story.initials}</span>
                                </div>
                                <p className="story__personName">{this.props.story.username} </p>
                                <div className="story__button--cont">
                                    <button className="story__button" onClick={()=>{this.props.incrementVote(this.props.story.id)}}>VOTE</button>
                                    <span className="story__button--votes">{this.props.story.voteCount} votes</span>
                                </div>
                                </div>
                            </div>
                        </div> :null
                    }
                </div>
                <div className="Modal-backdrop" onMouseDown={this.props.closeModal}></div>
            </div>, modalRoot
        )
    }
}

export default Modal