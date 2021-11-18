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
        const { onRouteChange, inAcc } = this.props;
        if (inAcc) {
            return (
                <div>
                    <nav className="fixed top-0 w-100 z-1 overflow-hidden">
                        <ul className="list top-0">
                            <li className="grow fl black f2-ns f3 dim dib pv3 mt0-ns mt2 ml0-ns ml3 ml5-m pointer">
                                <span onClick={() => onRouteChange('homepageAcc')}>  NL Album </span>
                            </li>
                            <li className="dib-ns dn pv2 ml5-ns ml3 mr0-ns ml5-m">
                                <p onClick={this.btnAlbums} className="btn link dib pa2 pv2 black pointer grow mb0 z-2"><ImMenu3 style={{ fontSize: '15px' }} /><span> Albums </span></p>
                            </li>
                            <li className="dn-ns dib pv2 ml5-ns ml3">
                                <p onClick={this.btnMenu} className="link dib pa2 pv2 black ba br2 pointer grow dim mb0 ml0-ns ml3"><ImMenu3 style={{ fontSize: '15px' }} /><span> Menu </span></p>
                            </li>
                            <li className="dib pv2 w-40-ns w-100-m w-100 tl ml4-ns ml5-m mr0-ns">
                                <input className="gray white pa2 b--transparent br3 grow mr1 w-70 ml0-ns ml3" type="text" placeholder="Search.." name="search" />
                                <button className="searchBtn pa2 white b--transparent br3 dim grow pointer" type="submit"><BiSearchAlt2 style={{ fontSize: '15px' }} /></button>
                            </li>
                            <li className="dib-ns pv2 fr-ns fl-m ml5-m mr3-m mr3-ns dn">
                                <p onClick={() => onRouteChange('support')} href="0#" className="btn link db dib-l pa2 pv2 black pointer grow"><span>Support</span></p>
                            </li>
                            <li className="dib-ns pv2 fr-ns fl-m ml5-m mr2-ns dn">
                                <p onClick={() => onRouteChange('homepage')} className="btn link dib pa2 pv2 black pointer grow"><span>Sign Out</span></p>
                            </li>
                            <li className="dib-ns pv2 fr-ns fl-m ml5-m mr2-ns dn">
                                <p onClick={() => onRouteChange('profile')} className="btn link dib pa2 pv2 black pointer grow"><span>Profile</span></p>
                            </li>
                        </ul>

                        <nav id="main-nav" style={{ display: 'none' }} className="dn-ns ba">
                            <p href="0#" onClick={this.btnAlbums} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90"><ImMenu3 style={{ fontSize: '15px' }} /> Albums</p>
                            <p onClick={() => onRouteChange('support')} href="0#" className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Support</p>
                            <p onClick={() => onRouteChange('homepage')} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Sign Out</p>
                            <p onClick={() => onRouteChange('profile')} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Profile</p>
                        </nav>
                        <div id="dropD" style={{ display: 'none' }} className="dropdown-content tl center w-100 absolute shadow-5">
                            <a href="0#" className="dim">Favorites <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Rap <b className="fr no-underline"> <BsArrowRightShort /> </b> </a>
                            <a href="0#" className="dim">Indie <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Retro <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                        </div>

                        <nav id="main-nav-profile" style={{ display: 'none' }} className="dn-ns ba">
                            <p href="0#" onClick={this.btnAlbums} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90"><ImMenu3 style={{ fontSize: '15px' }} /> Albums</p>
                            <p onClick={() => onRouteChange('support')} href="0#" className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Support</p>
                            <p onClick={() => onRouteChange('signin')} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Profile</p>
                        </nav>
                        <div id="dropD" style={{ display: 'none' }} className="dropdown-content tl center w-100 absolute shadow-5">
                            <a href="0#" className="dim">Favorites <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Rap <b className="fr no-underline"> <BsArrowRightShort /> </b> </a>
                            <a href="0#" className="dim">Indie <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Retro <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                        </div>
                    </nav>
                </div>
            )
        } else {
            return (
                <div>
                    <nav className="fixed top-0 w-100 z-1">
                        <ul className="list top-0">
                            <li className="grow fl black f2-ns f3 dim dib pv3 mt0-ns mt2 ml0-ns ml3 ml5-m pointer">
                                <span onClick={() => onRouteChange('homepage')}>  NL Album </span>
                            </li>
                            <li className="dib-ns dn pv2 ml5-ns ml3 mr0-ns ml5-m">
                                <p onClick={this.btnAlbums} className="btn link dib pa2 pv2 black pointer grow mb0 z-2"><ImMenu3 style={{ fontSize: '15px' }} /><span> Albums </span></p>
                            </li>
                            <li className="dn-ns dib pv2 ml5-ns ml3">
                                <p onClick={this.btnMenu} className="link dib pa2 pv2 black ba br2 pointer grow dim mb0 ml0-ns ml3"><ImMenu3 style={{ fontSize: '15px' }} /><span> Menu </span></p>
                            </li>
                            <li className="dib pv2 w-40-ns w-100-m w-100 tl ml4-ns ml5-m mr0-ns">
                                <input className="gray white pa2 b--transparent br3 grow mr1 w-70 ml0-ns ml3" type="text" placeholder="Search.." name="search" />
                                <button className="searchBtn pa2 white b--transparent br3 dim grow pointer" type="submit"><BiSearchAlt2 style={{ fontSize: '15px' }} /></button>
                            </li>
                            <li className="dib-ns pv2 fr-ns fl-m ml5-m mr3-m mr3-ns dn">
                                <p onClick={() => onRouteChange('support')} className="btn link db dib-l pa2 pv2 black pointer grow"><span>Support</span></p>
                            </li>
                            <li className="dib-ns pv2 fr-ns fl-m ml5-m mr2-ns dn">
                                <p onClick={() => onRouteChange('signin')} className="btn link dib pa2 pv2 black pointer grow"><span>Sign in</span></p>
                            </li>
                        </ul>

                        <nav id="main-nav" style={{ display: 'none' }} className="dn-ns ba">
                            <p href="0#" onClick={this.btnAlbums} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90"><ImMenu3 style={{ fontSize: '15px' }} /> Albums</p>
                            <p onClick={() => onRouteChange('support')} href="0#" className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Support</p>
                            <p onClick={() => onRouteChange('signin')} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Sign in</p>
                        </nav>
                        <div id="dropD" style={{ display: 'none' }} className="dropdown-content tl center w-100 absolute shadow-5">
                            <a href="0#" className="dim">Favorites <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Rap <b className="fr no-underline"> <BsArrowRightShort /> </b> </a>
                            <a href="0#" className="dim">Indie <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Retro <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                        </div>

                        <nav id="main-nav-profile" style={{ display: 'none' }} className="dn-ns ba">
                            <p href="0#" onClick={this.btnAlbums} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90"><ImMenu3 style={{ fontSize: '15px' }} /> Albums</p>
                            <p onClick={() => onRouteChange('support')} href="0#" className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Support</p>
                            <p onClick={() => onRouteChange('signin')} className="link db dib-l pa2 pv2 color-inherit mr2-ns ml0-ns ml3 ba br2 pointer grow dim w-90">Profile</p>
                        </nav>
                        <div id="dropD" style={{ display: 'none' }} className="dropdown-content tl center w-100 absolute shadow-5">
                            <a href="0#" className="dim">Favorites <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Rap <b className="fr no-underline"> <BsArrowRightShort /> </b> </a>
                            <a href="0#" className="dim">Indie <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                            <a href="0#" className="dim">Retro <b className="fr no-underline"> <BsArrowRightShort /> </b></a>
                        </div>
                    </nav>
                </div>
            )
        }

    }
}

export default Navigator;