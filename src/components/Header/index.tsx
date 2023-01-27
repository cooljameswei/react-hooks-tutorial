import React from "react";
import './Header.scss'
const Header = () => {
    return (
        <>
            <div className="object-top sticky inset-x-0 top-0 left-0 h-10 header-shadow text-zinc-100 text-3xl flex justify-center mb-10 p-10 items-center">
                <h1>React Hooks Tutorial</h1>
            </div>
        </>
    );
}

export default Header;