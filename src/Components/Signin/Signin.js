import React from "react";
import '../Navigator/Navigator.css'

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }


    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('homepageAcc');
                }
            })
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <div>
                <form className="pa4 gray-80-ns center b--black-ns shadow-2-ns ba-ns br3-ns mt6 w-50-ns w-80 bg-light-gray-ns">
                    <div className="measure center pv4 z-2">
                        <div className="f2-ns f3 b db mb2 tc mb4">Sign in</div>
                        <label htmlFor="email" className="f6 b db mb2 tl tracked">Email: <span className="normal black-60"></span></label>
                        <input onChange={this.onEmailChange} id="email" name="email" className="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="email" aria-describedby="email-desc" />
                        <label htmlFor="pass" className="f6 b db mb2 tl tracked">Password (5 characters minimum):</label>
                        <input onChange={this.onPasswordChange} id="pass" name="password" className="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="password" minLength="5" required />
                        <button onClick={this.onSubmitSignIn} type="button" className="btn center pa2 f5 pointer grow" ><span classNameName="z-2">Submit</span></button>
                        <button onClick={() => onRouteChange('signup')} type="submit" className="center pa2 f5 pointer grow mt2 b--transparent bg-transparent underline dim" ><span classNameName="z-2">Register</span></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;