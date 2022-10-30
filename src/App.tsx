import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';

type ShowType = {
    userId: number
    id: number
    title: string
    completed: boolean
}


function App() {

    // useEffect(() => {
    //         fetch('https://jsonplaceholder.typicode.com/todos')
    //             .then(response => response.json())
    //             .then(json => setShow(json))
    //     }, []
    // )

    const [show, setShow] = useState<ShowType[]>([])

    const showUp = () => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setShow(json))


    }

    const clearUp = () => {
        setShow([])
    }

    return (
        <div className="App">

            <Button name={'show me'} callBack={showUp}/>
            <Button name={'clear me'} callBack={clearUp}/>

            <ul>

                {show.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{`${el.completed}`}</span>
                            <span>{`${el.completed}`}</span>
                            <span>{`${el.completed}`}</span>
                        </li>
                    )

                })
                }

            </ul>

        </div>
    );
}

export default App;
