import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {CSSTransition} from 'react-transition-group';
const modalRoot = document.getElementById("modal-root");

class Modal extends Component {


    render() {
        return ReactDom.createPortal(
            <div className="Modal">
                
                <div className="Modal-content">
                    <form className="form">
                        <div className="form__title"><h3><span></span>Share Your Story</h3></div>
                        <label className="form__label">Fullname<span className="required"> *</span></label>
                        <input type="text" className="form__input" placeholder="Enter fullname here" />
                        <label className="form__label">Email<span className="required"> *</span></label>
                        <input type="text" className="form__input" placeholder="Enter email here" />
                        <label className="form__label">Title of Story<span className="required"> *</span></label>
                        <input type="text" className="form__input" placeholder="Enter title here" />
                        <label className="form__label">Description of Story<span className="required"> *</span></label>
                        <textarea className="form__textarea" placeholder="Enter story description here"/>
                        <label className="form__label">Add Banner<span className="required"> *</span></label>
                        <input type="file" placeholder="Add Banner" className="form__upload"/>
                        <label className="form__label">Add Avatar</label>
                        <input type="file" placeholder="Add Avatar" className="form__upload"/>

                        <input type="button" value="Submit" className="form__button"/>

                    </form>
                </div>
                <div className="Modal-backdrop" onMouseDown={this.props.closeModal}></div>
            </div>, modalRoot
        )
    }
}

export default Modal