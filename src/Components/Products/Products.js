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
                        <div className="cf">
                            {todos.map(todo => (
                                <div className="dib tc center hidden w-30-ns w-80 grow pa3">
                                    <a href={`${todo.linksong}`} className="link">
                                        <img src={`${todo.image}`} alt="Album Cover" className="w-100 dim" />
                                    </a>
                                    <div>
                                        <div> {todo.namesong} <button className="b--transparent"><BiHeart onClick={() => favoriteBtn(todo.id)} style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /></button> {todo.numfavorites} </div>
                                        <div className="gray">{todo.artist}</div>
                                    </div>
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
                {" "}
                <div className="w-100">
                    <article className="mt6 bg-light-gray">
                        <h2 className="f1 fw4 pa3 mv0">Albums</h2>
                        <div className="cf pa2">
                            {todos.map(todo => (
                                <div className="dib tc center hidden shadow-5 w-30-ns w-80 grow pa3 ma3">
                                    <a href={`${todo.linksong}`}>
                                        <img src={`${todo.image}`} alt="Album Cover" className="w-100" />
                                    </a>
                                    <div>
                                        <div>{todo.namesong} <button className="b--transparent"><BiHeart onClick={() => onRouteChange('signin')} style={{ fontSize: '15px', cursor: 'pointer' }} className="grow-large" /> </button> <span> {todo.numfavorites} </span></div>
                                        <div className="gray">{todo.artist}</div>
                                    </div>
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