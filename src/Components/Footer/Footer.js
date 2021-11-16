import React from "react";
import github from './github.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="pa4 pa5-l black-70 bt b--black-10 mt4 reveal">
                <div className="mb4-l cf">
                    <h1 className="fc w-100 pv0 f3 f2-ns fw6 ttu tracked mb4">Contacts</h1>
                    <article className="fc w-50 w-auto-ns mb4 dib">
                        <h4 className="f5 f4-l fw6">PT</h4>
                        <span className="f7 f6-l db black-70">Porto</span>
                        <span className="f7 f6-l black-70">Portugal</span>
                        <a className="f6 db fw6 pv3 black-70 link dim" title="Call SF" href="tel:+351910480778">
                            +351 910 480 778
                        </a>
                    </article>
                </div>
                <div className="db dtc-ns black-70 tc center w-90-ns w-80 absolute ml4-ns">
                        <a href="https://github.com/Dexterpolygon1605" className="grow link dim dib mr3 black-70" title="Impossible Labs on Medium">
                            <img alt="github" src={github} id="gh" />
                        </a>
                        <a href="https://www.linkedin.com/in/nelson-lopes-1605/" className="grow link dim dib black-70">
                            <svg className="db w2 h2" x="0px" y="0px" viewBox="0 0 48 48" >
                                <linearGradient gradientUnits="userSpaceOnUse" x1="23.9995"
                                    y1="0" x2="23.9995" y2="48.0005" >
                                    <stop offset="0" ></stop>
                                    <stop offset="1" ></stop>
                                </linearGradient>
                                <path fill="black" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
                                ></path>
                                <g >
                                    <g >
                                        <path fill="#FFFFFF" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                <section className="cf mb2">
                    <div className="mb4 mb0-ns w-100 fr fc-ns mr0-ns mr3">
                        <a className="black-70 f3 f2-ns fw6 tl tc-ns link dim dib pv3 pv1-ns mt5-ns mt4 mb0 mb4-ns mb0-l" href="mailto:nelsonlopescp2020@gmail.com" >
                            nelsonlopescp2020@gmail.com
                        </a>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer;