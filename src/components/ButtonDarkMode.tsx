import React, { useState } from "react";

const ButtonDarkMode = () => {
    const [dark, setDark] = useState(true);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return(
        <button onClick={()=> darkModeHandler()}>
        {
            
            dark && <p className='text-neutral-200'>Light</p> // render sunny when dark is true
        }
        {
            !dark && <p>Dark</p> // render moon when dark is false
        }
    </button>
    )
}

export default ButtonDarkMode