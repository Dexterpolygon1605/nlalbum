import React from "react";
import './Navigator.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import { ImMenu3 } from 'react-icons/im';
import { BsArrowRightShort } from 'react-icons/bs';

class Navigator extends React.Component {
    btnMenu = () => {
        if (document.getElementById('main-nav').style.display === 'none') {
            document.getElementById('main-nav').style.display = 'block';
        } else if (document.getElementById('main-nav').style.display === 'block') {
            document.getElementById('main-nav').style.display = 'none';
            document.getElementById('dropD').style.display = 'none';
        }
    }
    btnAlbums = () => {
        if (document.getElementById('dropD').style.display === 'none') {
            document.getElementById('dropD').style.display = 'block';
        } else if (document.getElementById('dropD').style.display === 'block') {
            document.getElementById('dropD').style.display = 'none';
        }
    }



render() {
    const { onRouteChange } = this.props;

    return (
        <div>
            <nav className="bg-gray fixed top-0 w-100 z-1">
                <ul className="list top-0">
                    <li className="grow fl white f2-ns f3 dim dib pv3 mt0-ns mt2 ml5-m pointer">
                       <span onClick={() => onRouteChange('homepage')}>  NL Album </span>
                    </li>
                    <li className="dib-ns dn pv2 ml5-ns ml3 mr0-ns ml5-m">
                        <p onClick={this.btnAlbums} class="btn link dib pa2 pv2 white b--white pointer grow mb0 z-2"><ImMenu3 style={{ fontSize: '15px' }} /><span> Albums </span></p>
                    </li>
                    <li className="dn-ns dib pv2 ml5-ns ml3 mr0-ns">
                        <p onClick={this.btnMenu} class="btn link dib pa2 pv2 color-inherit ba br2 pointer grow dim mb0"><ImMenu3 style={{ fontSize: '15px' }} /><span> Menu </span></p>
                    </li>
                    <li className="dib pv2 w-40-ns w-100-m w-100 tl ml4-ns ml5-m mr0-ns mr5 ">
                        <input class="gray pa2 b--transparent br3 grow mr1 w-70 ml0" type="text" placeholder="Search.." name="search" />
                        <button class="pa2 b--transparent br3 dim grow pointer" type="submit"><BiSearchAlt2 style={{ fontSize: '15px' }} /></button>
                    </li>
                    <li className="dib-ns pv2 fr-ns fl-m ml5-m mr3-m mr3-ns dn">
                        <p onClick={() => onRouteChange('support')} href="0#" class="btn link db dib-l pa2 pv2 white b--white pointer grow"><span>Support</span></p>
                    </li>
                    <li className="dib-ns pv2 fr-ns fl-m ml5-m mr2-ns dn">
                        <p onClick={() => onRouteChange('signin')} class="btn link dib pa2 pv2 white b--white pointer grow"><span>Sign in</span></p>
                    </li>

                </ul>
                <nav id="main-nav" style={{ display: 'none' }} class="dn-ns ba">
                    <p href="0#" onClick={this.btnAlbums} class="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90"><ImMenu3 style={{ fontSize: '15px' }} /> Albums</p>
                    <p onClick={() => onRouteChange('support')} href="0#" class="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Support</p>
                    <p onClick={() => onRouteChange('signin')} class="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Sign in</p>
                </nav>
                <div id="dropD" style={{ display: 'none' }} class="dropdown-content tl center w-100 absolute shadow-5">
                    <a href="0#" className="dim">Favorites <b class="fr no-underline"> <BsArrowRightShort /> </b></a>
                    <a href="0#" className="dim">Rap <b class="fr no-underline"> <BsArrowRightShort /> </b> </a>
                    <a href="0#" className="dim">Indie <b class="fr no-underline"> <BsArrowRightShort /> </b></a>
                    <a href="0#" className="dim">Retro <b class="fr no-underline"> <BsArrowRightShort /> </b></a>
                </div>
            </nav>
        </div>
    )
}
}

export default Navigator;