import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';


const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
	
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeydown);
	};

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeydown);
	};
	
	handleKeydown = event => {
		if (event.code === 'Escape') {
			this.props.onClose();
		};
	};

	handleBackdropClick = event => {
		if (event.currentTarget === event.target) {
			this.props.onClose()
		};
	};

	render() {
		const { url, alt} = this.props
		return createPortal(
			<div className="Overlay" onClick={ this.handleBackdropClick}>
  			<div className="Modal">
					<img src={url} alt={alt} />
 				</div>
			</div>, modalRoot
		);
	}
};

Modal.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
}
 
export default Modal;