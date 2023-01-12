import React, { EventHandler, MouseEvent, MouseEventHandler } from "react";
import { useState, useEffect } from "react";
import { userFormData, UserFormItem } from "./userform";
import { useWindowListener } from "./useWindowListener";   // custom useEffect hook
import Header from '../../components/Header';
import './home.scss';
const Home = () => {
    const [count, setCount] = useState(0);                      //useState
    const [myinfo, setUserForm] = useState<UserFormItem>({
        id: 3,
        label: 'Soda'
    });
    const [position, setPosition] = useState({x: -50, y: -50});  // pointer_position useState
    const handleIncrease = () => {
        setCount(count + 1);
    };
    const items = userFormData.map(item => (
        <div key={item.id} className="flex flex-col items-center m-5 w-44 border-2 liquid">
            <p className="p-5">{item.id}</p>
            <p className="p-5">{item.label}</p>
        </div>
    ))
    useWindowListener('pointermove', (e: any) => {   
        setPosition({x: e.clientX, y: e.clientY});
    })
    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'pink',
                borderRadius: '50%',
                opacity: 0.6,
                transform: `translate(${position.x}px, ${position.y}px)`,
                pointerEvents: 'none',
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }}>

            </div>
            <Header />
            <div className="flex flex-col justify-center items-center p-5">
                <div className="flex justify-center items-center mb-10">
                    <button type="button" className="btn mr-5" onClick={handleIncrease}>
                        Increase
                    </button>
                    <div className="text-4xl"> = { count }</div>
                </div>
                <div className="flex justify-center decoration-white text-2xl">
                    {items}
                </div>
            </div>
        </>
    );
}

export default Home;