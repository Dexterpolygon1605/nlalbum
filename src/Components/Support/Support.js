import React from "react";

class Support extends React.Component {
    render() {
        return (
            <div>
                <form className="pa4 gray-80 center ba-ns br3-ns mt6-ns w-50-ns w-80 bg-light-gray">
                    <div className="measure center pv4 z-2">
                        <div className="f2-ns f3 b db mb2 tc mb4 mt6 mt0-ns"> Support </div>
                        <label for="name" className="f6 b db mb2 tl tracked">Email: <span className="normal black-60"></span></label>
                        <input id="email" name="email" className="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="email" aria-describedby="name-desc" />
                        <label for="name" className="f6 b db mb2 tl tracked">Assunto: <span className="normal black-60"></span></label>
                        <input id="assunto" name="assunto" className="input-reset white b--transparent grow br3 pa2 mb2 db w-100" type="text" aria-describedby="assunto-desc" />
                        <label for="mensagem" className="f6 b db mb2 tl tracked">Mensagem: <span className="normal black-60"></span></label>
                        <textarea rows="6" id="mensagem" name="mensagem" className="db border-box w-100 b--transparent grow br3 pa2 mb2" aria-describedby="mensagem-desc"></textarea>
                        <button type="submit" className="btn center bg-white b--black-20 pa2 f5 pointer grow"><span className="z-2">Submit</span></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Support;