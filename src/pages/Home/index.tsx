import React from "react";
import { useState } from "react";
import { userFormData, UserFormItem } from "./userform";
import Header from '../../components/Header';
import './home.scss';
const Home = () => {
    const [count, setCount] = useState(0);                      //useState
    const [myinfo, setUserForm] = useState<UserFormItem>({
        id: 3,
        label: 'Soda'
    });
    const handleIncrease = () => {
        setCount(count + 1);
    };
    const items = userFormData.map(item => (
        <div key={item.id} className="flex flex-col items-center m-5 w-44 border-2 liquid">
            <p className="p-5">{item.id}</p>
            <p className="p-5">{item.label}</p>
        </div>
    ))
    return (
        <>
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