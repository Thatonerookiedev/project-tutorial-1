import './navbar.css'


const Navbar = () => {
    
    return ( 
        <div id="navbarContainer">
            <div id="navbar">
                <div className="logoNav">
                </div>
                {/* nav links */}
                <div className="navbarLinks">
                    <a href="/Home">Home</a>
                </div>
                {/* divide */}
                <div className="navbarLinks">
                    <a href="/Products">Products</a>
                </div>
                {/* divide */}
                <div className="navbarLinks">
                    <a href="/About">About</a>
                </div>

                {/* divide */}
                <div className="navbarLinks" id='profile-container'>
                    <a href=""></a>
                </div>

            </div>
        </div>

     );
}


 
export default Navbar;