import React from 'react';

class Modal extends React.Component {
    closeModal = () => {
        document.getElementById('modal').style.display = 'none';
    }
    render() {
        return (
            <div id="modal" style={{ display: 'none' }} className="modal pointer" onClick={this.closeModal}>
                <article class="ba b--white">
                    <h1 class="f4 bg-near-black white mv0 pv2 ph3">Thank you!</h1>
                    <div class="pa3 bt bg-gray">
                        <p class="f6 f5-ns lh-copy measure mv0 white">
                            Your message has been sent!
                            <p>(click on the modal to close)</p>
                        </p>
                    </div>
                </article>
            </div>
        )
    }
}

export default Modal;