import React from "react";
import '../Navigator/Navigator.css'

class Signin extends React.Component {
    render() {
        return (
            <div>
                <form class="pa4 gray-80 center b--black shadow-2 ba-ns br3-ns mt6 w-50-ns w-80 bg-light-gray">
                    <div class="measure center pv4 z-2">
                        <div class="f2-ns f3 b db mb2 tc mb4">Sign in</div>
                        <label for="name" class="f6 b db mb2 tl tracked">Name: <span class="normal black-60"></span></label>
                        <input id="name" name="name" class="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                        <label for="email" class="f6 b db mb2 tl tracked">Email: <span class="normal black-60"></span></label>
                        <input id="email" name="email" class="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="email" aria-describedby="email-desc" />
                        <label for="pass" class="f6 b db mb2 tl tracked">Password (8 characters minimum):</label>
                        <input id="pass" name="password" class="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="password" minlength="8" required />
                        <button type="submit" className="btn center pa2 f5 pointer grow" ><span className="z-2">Submit</span></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;