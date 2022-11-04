import React from "react"

const Navbar = () => {
    const logoImg = "https://i.imgur.com/rcfnJj9.png"
    return (

        <nav>
            <div>               
                <img src={logoImg}
                alt="logo pokemon"
                className="navbar-img"
                 />               
            </div>
        </nav>


    )
};

export default Navbar