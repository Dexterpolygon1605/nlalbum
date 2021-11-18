import React, { useState, useEffect, Fragment } from 'react';
import { BiHeart } from 'react-icons/bi';


const Products = ({ onRouteChange, favoriteBtn, inAcc }) => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/songs')
            const jsonData = await response.json()
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, []);


    if (inAcc) {
        return (
            <Fragment>
                <div className="w-100">
                    <article className="mt6 bg-light-gray">
                        <h2 className="f1 fw4 pa3 mv0">Albums</h2>
                        <div className="cf pa2">
                            {todos.map(todo => (
                                <div className="fl w-50 w-25-m w-20-ns pa3">
                                    <a href={`${todo.linksong}`} className="db link tc">
                                        <img src={`${todo.image}`} alt="Album Cover" className="w-100 dim db outline black-10" />
                                    </a>
                                    <dl className="mt2 f6 lh-copy">
                                        <dt className="clip">Title</dt>
                                        <dd className="ml0 black truncate w-100">{todo.namesong} <BiHeart onClick={favoriteBtn} style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /> {todo.numfavorites} </dd>


                                        <dt className="clip">Artist</dt>
                                        <dd className="ml0 gray truncate w-100">{todo.artist}</dd>
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <div className="w-100">
                    <article className="mt6 bg-light-gray">
                        <h2 className="f1 fw4 pa3 mv0">Albums</h2>
                        <div className="cf pa2">
                            {todos.map(todo => (
                                <div className="fl w-50 w-25-m w-20-ns pa3">
                                    <a href={`${todo.linksong}`} className="db link tc">
                                        <img src={`${todo.image}`} alt="Album Cover" className="w-100 dim db outline black-10" />
                                    </a>
                                    <dl className="mt2 f6 lh-copy">
                                        <dt className="clip">Title</dt>
                                        <dd className="ml0 black truncate w-100">{todo.namesong} <BiHeart onClick={() => onRouteChange('signin')} style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /> {todo.numfavorites} </dd>


                                        <dt className="clip">Artist</dt>
                                        <dd className="ml0 gray truncate w-100">{todo.artist}</dd>
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </Fragment>
        )
    }
}

export default Products;