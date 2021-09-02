import { Fragment, useState } from 'react';

const Banner = props => {

    const [randomNumber, setRandomNumber] = useState(0);

    const guessHandler = (event)=>{
        event.preventDefault();
        props.makeGuess(randomNumber);
        setRandomNumber(0);
    }

    const distributeHandler = (event)=>{
        event.preventDefault();
        props.claimReward();
        setRandomNumber(0);
    }
    const length = props.listOfWinners.length;
    return (
        <Fragment>
            <section className="hero-area hero-v1" style={{ backgroundImage: 'url(assets/img/hero/app-overview-main-bg.png)' }}>
                <div className="container">
                    <div className="hero-internal">
                        <div className="section-particle-effect d-none d-md-block">
                            <img className="particle-1 animate-zoom-fade" src="assets/img/particle/particle-1.png" alt="particle One" />
                            <img className="particle-2 animate-float-bob-y" src="assets/img/particle/particle-2.png" alt="particle Two" />
                            <img className="particle-3 animate-zoominout" src="assets/img/particle/particle-3.png" alt="particle Three" />
                            <img className="particle-4 animate-zoominout" src="assets/img/particle/particle-4.png" alt="particle Four" />
                            <img className="particle-5 animate-zoominout" src="assets/img/particle/particle-5.png" alt="particle Five" />
                            <img className="particle-6 animate-zoom-fade" src="assets/img/particle/particle-6.png" alt="particle Six" />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-xl-11">
                                <div className="hero-content">
                                    <div className="section-title">
                                        <div className="section-heading-tag wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1500ms">
                                            <span className="single-heading-tag">Welcome to CeloBet</span>
                                            {/* <span className="single-heading-tag bordered-tag">Faster solutions</span> */}
                                        </div>
                                        <h1 className="wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1500ms">Stand a chance to <span>win</span> $1000 with as low as $1</h1>
                                        <div className="contact-respond">
                                            <form>
                                                <div className="input-group">
                                                    <input type="text" value = {randomNumber} className="form-control" id="randomNumber" placeholder="Random Number" required onChange = {(e)=>setRandomNumber(e.target.value)} />

                                                </div>
                                                <div class="input-group">
                                                    {!props.isAdmin?
                                                    <button type="" 
                                                    onClick = {guessHandler} 
                                                    class="filled-btn">Guess Random Number <i class="fas fa-arrow-right"></i></button> : 
                                                    <button type="" 
                                                    onClick = {distributeHandler} 
                                                    class="filled-btn" 
                                                    disabled={props.listOfWinners.length === 0 && "true"}>
                                                    {props.listOfWinners.length === 0 ? 
                                                    'No winners yet':
                                                    'Distribute Rewards'}<i class="fas fa-arrow-right"></i></button>}
                                                    
                                                </div>
                                               
                                            </form>

                                        </div>
                                    </div>
                                </div> {/* /.hero-content */}
                            </div> {/* /.col-lg-10 */}
                        </div> {/* /.row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="app-dashboard-preview animate-float-bob-y">
                                    <img src="https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop" alt="app dashboard overview" />
                                </div>
                            </div>
                        </div> {/* /.row */}
                    </div> {/* /.section-internal */}
                </div> {/* /.container*/}
            </section>
            <section className="our-services bg-dark-black pt-129 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="section-title section-title-white text-center mb-65">
                                <div className="section-heading-tag">
                                    <span className="single-heading-tag bg-royal-blue">How it works!</span>
                                </div>
                                <h2>The following steps highlight <br className="d-none d-md-block" /> how CeloBet works</h2>
                            </div>
                        </div>
                    </div>
                    <div className="our-services-content-wrapper">
                        <div className="row">
                            {/* Single Feature Box */}
                            <div className="col-md-6">
                                <div className="single-feature-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="feature-box-icon">
                                        <img src="assets/img/feature/service-icon-1.png" alt="service icon one" />
                                    </div>
                                    <div className="feature-box-content">
                                        <h4>Setup your celowallet extension</h4>
                                        {/* <p>Quis autem veleum iure reprehende quin voluptate velit esse quam molesti conseqtur velillum dolorem eum fugiate</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* Single Feature Box */}
                            <div className="col-md-6">
                                <div className="single-feature-box wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                                    <div className="feature-box-icon">
                                        <img src="assets/img/feature/service-icon-2.png" alt="service icon one" />
                                    </div>
                                    <div className="feature-box-content">
                                        <h4>Pay the little sum of 1cUSD to play</h4>
                                        {/* <p>Again is there anyone who loves pursues or desires to obtain pain of itself because it is pain but because occasionally</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* Single Feature Box */}
                            <div className="col-md-6">
                                <div className="single-feature-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="feature-box-icon">
                                        <img src="assets/img/feature/service-icon-3.png" alt="service icon one" />
                                    </div>
                                    <div className="feature-box-content">
                                        <h4>Guess a Number between 1-20</h4>
                                        {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium totam rem aperiam</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* Single Feature Box */}
                            <div className="col-md-6">
                                <div className="single-feature-box wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="feature-box-icon">
                                        <img src="assets/img/feature/service-icon-4.png" alt="service icon one" />
                                    </div>
                                    <div className="feature-box-content">
                                        <h4>Guess right and win $1000</h4>
                                        {/* <p>Quis autem veleum iure reprehende quin voluptate velit esse quam molesti conseqtur velillum dolorem eum fugiate</p> */}
                                    </div>
                                </div>
                            </div>
                           
                           
                        </div> {/* /.row */}
                    </div> {/* /.our-services-content-wrapper */}
                </div> {/* /.container */}
            </section>
        </Fragment>
    );
}

export default Banner;