import React from "react";

class Support extends React.Component {
    render() {
        return (
            <form class="pa4 black-80 center mt6 ba br3 w-50-ns w-80">
                <div class="measure center">
                    <div class="f3 b db mb2 tc mb4"> Support </div>
                    <label for="name" class="f6 b db mb2 tl">Email: <span class="normal black-60"></span></label>
                    <input id="email" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" aria-describedby="name-desc" />
                    <label for="name" class="f6 b db mb2 tl">Assunto: <span class="normal black-60"></span></label>
                    <input id="assunto" name="assunto" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="assunto-desc" />
                    <label for="mensagem" class="f6 b db mb2 tl">Mensagem: <span class="normal black-60"></span></label>
                    <textarea rows="6" id="mensagem" name="mensagem" class="db border-box hover-black w-100 ba b--black-20 pa2 br2 mb2" aria-describedby="mensagem-desc"></textarea>
                    <button type="submit" className="ba br3 bg-white b--black-20 pa2 f5 pointer grow" >Submit</button>
                </div>
            </form>
        )
    }
}

export default Support;