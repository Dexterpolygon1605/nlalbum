import React from "react";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('homepageAcc');
                }
            })
    }
    render() {
        return (
            <div>
                <form className="pa4 gray-80-ns center b--black-ns shadow-2-ns ba-ns br3-ns mt6 w-50-ns w-80 bg-light-gray-ns">
                    <div className="measure center pv4 z-2">
                        <div className="f2-ns f3 b db mb2 tc mb4">Register</div>
                        <label for="name" className="f6 b db mb2 tl tracked">Name: <span className="normal black-60"></span></label>
                        <input onChange={this.onNameChange} id="name" name="name" className="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                        <label for="email" className="f6 b db mb2 tl tracked">Email: <span className="normal black-60"></span></label>
                        <input onChange={this.onEmailChange} id="email" name="email" className="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="email" aria-describedby="email-desc" />
                        <label for="pass" className="f6 b db mb2 tl tracked">Password:</label>
                        <input onChange={this.onPasswordChange} id="pass" name="password" className="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="password" minLength="5" required />
                        <button onClick={this.onRegister} type="button" className="btn center pa2 f5 pointer grow"><span>Submit</span></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;