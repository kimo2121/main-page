import React from "react";
import logo1 from '../assests/logo1.svg'
import logo2 from '../assests/logo2.svg'


const Logo: React.FC = () => {
    return (
        <div >
            <div style={{ display: "flex", alignItems: "center" }}>
                <img src={logo1} alt="logo" className="w-16 md:w-20"  />
                <img src={logo2} alt="logo" className="w-16 md:w-20" />
            </div>
        </div>
    );
}

export default Logo;
