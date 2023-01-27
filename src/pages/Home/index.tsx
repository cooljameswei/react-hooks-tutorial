import React, { EventHandler, MouseEvent, MouseEventHandler } from "react";
import { useState, useEffect, useRef, createContext, useContext } from "react";
import { userFormData, UserFormItem } from "./userform";
import { useWindowListener } from "./useWindowListener";   // custom useEffect hook
import { CounterTracker } from "./countertracker";
import Header from '../../components/Header';
import './home.scss';

type ThemeContextType = "#565655" | "black";
const ThemeContext = createContext<ThemeContextType>("#565655");

const Home = () => {
    const [color, setColor] = useState<ThemeContextType>("#565655");
    const theme = useContext(ThemeContext);
    const [count, setCount] = useState(0);                      //useState
    const [myinfo, setUserForm] = useState<UserFormItem>({
        id: 3,
        label: 'Soda'
    });
    const [value, setValue] = useState(0);
    const ref = useRef<CounterTracker>({
        increment: 0,
        decrement: 0
    });
    const [position, setPosition] = useState({x: -50, y: -50});  // pointer_position useState
    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleIncrement = () => {
        ref.current.increment ++;
        setValue(value + 1);
    }
    const handleDecrement = () => {
        ref.current.decrement ++;
        setValue(value - 1);
    }
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
           <Header />
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
                <div className="flex flex-col justify-center decoration-white text-2xl">
                    <div className="flex justify-center m-8">
                        { color === "black" ? (
                            <>
                            <button className="btn mr-5 w-16 bg-black" onClick={handleIncrement}>+</button>
                            <button className="btn mr-5 w-16  bg-black" onClick={handleDecrement}>-</button>
                            </>  
                        ) :
                            <>
                            <button className="btn mr-5 w-16" onClick={handleIncrement}>+</button>
                            <button className="btn mr-5 w-16" onClick={handleDecrement}>-</button>
                            </>
                        }    
                    </div>
                    <div className="justify-center flex mb-8 col-wheat">Count  : {value}</div>
                    <div className="justify-center flex mb-8 col-wheat">Buttons {ref.current.increment + ref.current.decrement} times clicked</div>
                    <div className="justify-center flex mb-8 col-wheat">Increment clicked: {ref.current.increment}</div>
                    <div className="justify-center flex mb-8 col-wheat">Decrement clicked: {ref.current.decrement}</div>
                </div>
                <div>
                  <ThemeContext.Provider value={color}>
                        <label>
                            <input
                            type="checkbox"
                            checked={color === 'black'}
                            onChange={(e) => {
                                setColor(e.target.checked ? 'black' : '#565655')
                                console.log(color)
                            }}
                            />
                            Use dark mode
                        </label>
                    </ThemeContext.Provider>
                </div>
            </div>
        </>
    );
}

export default Home;