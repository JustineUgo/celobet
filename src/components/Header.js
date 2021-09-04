

const Header = props => {
    return (

        <header className="header-area header-v1">
            <div className="header-navigation">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Brand Logo and Language Selection Dropdown */}
                        <div className="col-xl-10 col-lg-4 col-md-5 col-4">
                            <div className="site-branding-and-language-selection">
                                <div className="brand-logo">
                                    <a href="index.html">
                                        {/* <img src="assets/img/logo-royal-blue.png" alt="logo" /> */}
                                        <h3>CeloBet</h3>
                                    </a>
                                </div>
                             
                            </div>
                        </div>
                        
                        {/* Menu Right */}
                        <div className="col-xl-2 col-lg-5 col-md-6 col-2">
                            <div className="header-right">
                                <a href="services.html" className="filled-btn">
                                    Balance:{props.balance}cUSD 
                                </a>
                            </div>
                        </div>
                    </div> {/* /.row */}
                </div> {/* /.container-fluid */}
            </div> {/* /.header-navigation */}
        </header>


    );
}

export default Header;
