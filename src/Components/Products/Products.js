import React from "react";
import { BiHeart } from 'react-icons/bi';

class Products extends React.Component {
    render() {
        const { favoriteBtn } = this.props;
        return (
            <div>
                <article className="mt6 bg-light-gray">
                    <h2 className="f1 fw4 pa3 mv0">Albums</h2>
                    <div className="cf pa2 mt4">
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/blonde/id1146195596?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg" alt="Frank Ocean Blonde Album Cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100 pointer">Blonde <BiHeart onClick={favoriteBtn} style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /> </dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Frank Ocean</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/jeffery/id1146718343?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png" alt="Young Thug - Jeffery Album Cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100 ttu">Jeffery <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Young Thug</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/untitled-unmastered./id1089846273?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png" alt="Kendrick Lamar untitled unmastered. Album Cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">untitled umastered. <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Kendrick Lamar</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/99.9/id1092026376?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is4.mzstatic.com/image/thumb/Music49/v4/e9/4c/2d/e94c2d5f-bdb0-c565-4cc2-f9dfcf7f0b87/source/400x40000bb.png" alt="Kaytranada 99%" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">99% <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Kaytranada</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/aa/id1067924003?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is3.mzstatic.com/image/thumb/Music49/v4/b6/b0/a1/b6b0a1dd-998d-9786-ca2f-87470be15250/source/400x40000bb.png" alt="Baauer Aa - Album Cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">Aa <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Baauer</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/99-cents/id1054734475?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is3.mzstatic.com/image/thumb/Music62/v4/fa/ae/a6/faaea65f-0819-bb5d-afaa-4f5e84015204/source/400x40000bb.png" alt="Santigold 99 cents - Album cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">99 cents <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Santigold</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/a-moon-shaped-pool/id1111577743?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is2.mzstatic.com/image/thumb/Music18/v4/34/03/34/34033451-12e2-2d0b-c100-11a390922a01/source/400x40000bb.png" alt="A Moon Shaped Pool - Album cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">A Moon Shaped Pool <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Radiohead</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/the-life-of-pablo/id1123231885?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is3.mzstatic.com/image/thumb/Music20/v4/c0/98/d0/c098d05b-7bcc-0ea3-0213-0f69992fda65/source/400x40000bb.png" alt="The Life of Pablo - Album Cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">The Life of Pablo <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Kanye West</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/coloring-book/id1113239004?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is2.mzstatic.com/image/thumb/Music18/v4/5a/42/0f/5a420f73-6490-abc9-bdcc-3001d5c4e9fc/source/400x40000bb.png" alt="Coloring Book - Album cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">Coloring Book <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Chance the Rapper</dd>
                            </dl>
                        </div>
                        <div className="fl w-50 w-25-m w-20-l pa2">
                            <a href="https://geo.itunes.apple.com/us/album/everybody-looking/id1135576036?at=1l3vqFJ&mt=1&app=music" className="db link tc">
                                <img src="http://is4.mzstatic.com/image/thumb/Music30/v4/9b/2e/e1/9b2ee13e-35fd-0cc1-d203-e65b4beafc7f/source/400x40000bb.png" alt="Everybody Looking - Album Cover" className="w-100 dim db outline black-10" />
                            </a>
                            <dl className="mt2 f6 lh-copy">
                                <dt className="clip">Title</dt>
                                <dd className="ml0 black truncate w-100">Everybody Looking <BiHeart style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></dd>
                                <dt className="clip">Artist</dt>
                                <dd className="ml0 gray truncate w-100">Gucci Mane</dd>
                            </dl>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default Products;