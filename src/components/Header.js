

const Header = props => {
    return (

        <header className="header-area header-v1">
            <div className="header-navigation">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* Brand Logo and Language Selection Dropdown */}
                        <div className="col-xl-3 col-lg-4 col-md-5 col-8">
                            <div className="site-branding-and-language-selection">
                                <div className="brand-logo">
                                    <a href="index.html">
                                        {/* <img src="assets/img/logo-royal-blue.png" alt="logo" /> */}
                                        <h2>CeloBet</h2>
                                    </a>
                                </div>
                             
                            </div>
                        </div>
                        
                        {/* Menu Right */}
                        <div className="col-xl-3 col-lg-5 col-md-6 col-2">
                            <div className="header-right">
                                <ul>
                                    <li className="get-started-wrapper">
                                        <a href="services.html" className="filled-btn">
                                            Balance:{props.balance}cUSD 
                                        </a>
                                    </li>
                                    <li>
                                        <div className="menu-toggle">
                                            <div className="menu-overlay" />
                                            {/* Navbar Toggler */}
                                            <div className="nav-toggle">
                                                <div className="navbar-toggler float-end">
                                                    <span />
                                                    <span />
                                                    <span />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* /.row */}
                </div> {/* /.container-fluid */}
            </div> {/* /.header-navigation */}
        </header>


    );
}

export default Header;