import React from "react";
import { useState } from "react";
import { userFormData, UserFormItem } from "./userform";
const Home = () => {
    const [count, setCount] = useState(0);
    const [myinfo, setUserForm] = useState<UserFormItem>({
        id: 3,
        label: 'Soda'
    });
    const handleIncrease = () => {
        setCount(count + 1);
    };
    const items = userFormData.map(item => (
        <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.label}</p>
        </div>
    ))
    return (
        <>
            <h1 className="text-3xl font-bold underline">This is HomePage</h1>
            <div>
                <button type="button" onClick={handleIncrease}>
                    Increase
                </button>
                <div>{ count }</div>
                {items}
                <div>
                    <p>{myinfo.id} : {myinfo.label}</p>
                    <p></p>
                </div>
            </div>
        </>
    );
}

export default Home;