import React from "react";

class Signin extends React.Component {
    render() {
        return (
            <div>
                <form class="pa4 black-80 center mt6 ba br3 w-50-ns w-80">
                    <div class="measure center">
                        <div class="f3 b db mb2 tc mb4">Sign in</div>
                        <label for="name" class="f6 b db mb2 tl">Name: <span class="normal black-60"></span></label>
                        <input id="name" name="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                        <label for="email" class="f6 b db mb2 tl">Email: <span class="normal black-60"></span></label>
                        <input id="email" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="email-desc" />
                        <label for="pass" class="f6 b db mb2 tl">Password (8 characters minimum):</label>
                        <input id="pass" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" minlength="8" required />
                        <button type="submit" className="ba br3 bg-white b--black-20 pa2 f5 pointer grow" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;