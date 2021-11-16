import React from "react";
import { BiHeart } from 'react-icons/bi';


const Products = ({ name, artist, numfavorites, favoriteBtn, inAcc }) => {
    if (inAcc) {
        return (
            <div>
                <article className="mt6 bg-light-gray">
                    <h2 className="f1 fw4 pa3 mv0">Albums</h2>
                    <div className="cf pa2 mt4">
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="#0" className="db link tc">
                                <img src="" alt="Frank Ocean Blonde Album Cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100 pointer">{name}<BiHeart onClick={favoriteBtn} style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /> {numfavorites} </dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">{artist}</dd>
                            </dl>
                        </div>
                    </div>
                </article>
            </div>
        )
    }else{
        return(
            <div className="mt6">
                Sign in to see the albums
            </div>
        )
    }
}

export default Products;