import React from "react";

class Signup extends React.Component {
    render() {
        return (
            <div>
                <form class="pa4 gray-80 center ba-ns br3-ns mt6 w-50-ns w-80">
                    <div class="measure center pv4 z-2">
                        <div class="f2-ns f3 b db mb2 tc mb4">Sign up</div>
                        <label for="email" class="f6 b db mb2 tl">Email: <span class="normal black-60"></span></label>
                        <input id="email" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="email-desc" />
                        <label for="pass" class="f6 b db mb2 tl">Password:</label>
                        <input id="pass" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="password" minlength="8" required />
                        <button type="submit" className="ba br3 bg-white b--black-20 pa2 f5 pointer grow" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;