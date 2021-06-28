import React from "react";
import logo1 from '../assests/logo1.svg'
import logo2 from '../assests/logo2.svg'


const Logo: React.FC = () => {
    return (
        <div >
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo1} alt="logo" />
                <img src={logo2} alt="logo" />
            </div>
        </div>
    );
}

export default Logo;
