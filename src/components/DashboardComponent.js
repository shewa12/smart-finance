import { Fragment } from "react";
import '../scss/dashboard.scss';

export default function DashboardComponent() {
    return(
        <Fragment>
            <div className="container dashboard-wrapper">
                <div className="row three-cards">
                    {/* first card  */}
                    <div className="col-lg-4 first-card">
                        <div className="card main-bg">
                            <div className="card-body d-flex">
                                <div className="smak-left d-flex flex-column">
                                    <p className="text-white">SMAK</p>
                                    <p className="text-gray">
                                    Live price
                                    </p>
                                    <p className="text-white">
                                        $ 0.0165 <span className="badge rounded-pill bg-success">1.76%</span>
                                    </p>
                                </div>
                                <div className="smak-right d-flex flex-column">
                                    <p className="text-white"><i className="bi bi-wallet2"></i></p>
                                    <p className="text-gray">SMAK Balance</p>
                                    <p className="text-white">0</p>
                                </div>
                            </div>
                            <div className="d-grid gap-2 p-3">
                                <button className="btn btn-primary custom-btn lite-gray text-white" type="button">Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                    {/* first card  end*/}
                    
                    {/* second card */}
                    <div className="col-lg-4 second-card">
                        <div className="card main-bg custom-card">
                            <div className="card-body">
                                <div className="row gx-2">
                                    <div className="col">
                                        <p className="text-white">
                                        Market cap
                                        </p>
                                        <p className="text-gray">
                                        7,744,602 USD
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p className="text-white">
                                        Market cap
                                        </p>
                                        <p className="text-gray">
                                        7,744,602 USD
                                        </p>
                                    </div>
                                </div>
                                <div className="row gx-2 mt-2">
                                    <div className="col">
                                        <p className="text-white">
                                        Market cap
                                        </p>
                                        <p className="text-gray">
                                        7,744,602 USD
                                        </p>
                                    </div>
                                    <div className="col d-flex align-items-center">
                                        <button className="btn btn-primary custom-btn  bg-purple text-white">
                                            Buy Smak
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second card */}

                    {/* three card */}
                    <div className="col-lg-4 third-card">
                    <div className="card main-bg">
                            <div className="card-body">
                                <div className="d-flex justify-content-between" style={{columnGap: '10px'}}>
                                    <div className="text-white">
                                    SMARTLINK TVL $ 8,623,035.36
                                    </div>
                                    <div>
                                        <button className="btn btn-secondary btn-sm">
                                        Go to analytics
                                        </button>
                                        
                                    </div>
                                </div>
                                <div>
                                    <span className="badge text-white lite-gray" style={{marginRight: '10px'}}>
                                        1w
                                    </span>
                                    <span className="badge text-white bg-purple">
                                        1w
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* three card */}
                </div>

                {/* two card */}
                <div className="row two-cards">
                    {/* card one */}
                    <div className="col-lg-6 first-card">
                        <div className="card main-bg">
                            <div className="card-body">
                                <div className="card-logo">
                                    <h3 className="text-white">Vortex</h3>
                                </div>
                                <h3 className="medium-title">
                                Decentralized Exchange
                                </h3>
                                <p className="small-title">
                                Start trading on the Smartlink AMM
                                </p>
                                <button className="btn btn-sm btn-secondary">
                                    Go to Vortex
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* card one end */}

                    {/* two card */}
                    <div className="col-lg-6 two-card">
                        <div className="card main-bg">
                            <div className="d-flex flex-column" style={{padding: '40px 30px'}}>
                                <div>
                                    <h3 className="text-white">Vortex</h3>
                                </div>
                                <div className="text-with-boxes d-flex" style={{columnGap: '10px'}}>
                                    <div style={{marginRight: '20px'}}>
                                        <p className="medium-title">
                                        Earn SMAK
                                        </p>
                                        <p className="small-title">
                                        Put your SMAK to work and get rewards!
                                        </p>
                                    </div>
                                    <div className="small-card d-flex flex-column p2 align-items-center">
                                        <p className="text-white">Farms</p>
                                        <p className="text-gray">Staking</p>
                                    </div>
                                    <div className="small-card d-flex flex-column p2 align-items-center">
                                        <p className="text-white">Farms</p>
                                        <p className="text-gray">Staking</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-sm btn-secondary">Go to App</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* two card */}
                </div>  
                {/* two card end*/}

                {/* bottom three cards */}
                <div className="row bottom-three-cards pb-3">
                    {/* first card  */}
                    <div className="col-lg-4 first-card">
                        <div className="card main-bg">
                            <div className="card-body pt-3">
                                <div className="smak-left d-flex flex-column">
                                    <img src="https://app.smartlink.so/img/bubble-icon.7836f2cf.svg" style={{width: '50px'}} alt="img"/>
                                </div>
                                <div className="smak-right d-flex flex-column">
                                    <h3 className="medium-title">
                                    Win Smak
                                    </h3>
                                </div>
                                <div>
                                    <p className="small-title">
                                    Try your luck in the Smartlink lottery
                                    </p>
                                </div>
                                <button className="btn btn-secondary btn-sm" type="button">Go to Lottery</button>
                            </div>

                        </div>
                    </div>
                    {/* first card  end*/}
                    
                    {/* second card */}
                    <div className="col-lg-4 second-card">
                        <div className="card main-bg">
                            <div className="card-body">
                                <div className="row gx-2">
                                    <div className="col d-flex flex-column align-items-center py-3" style={{rowGap: '15px'}}>
                                        <p className="text-white">
                                        <i className="bi bi-percent medium-title"></i>
                                        </p>
                                        <p className="medium-title">
                                        Delegate XTZ
                                        </p>
                                        <button className="btn btn-primary custom-btn  bg-purple text-white">
                                        Delegate XTZ
                                        </button>
                                    </div>
                                    <div className="col d-flex flex-column align-items-center py-3" style={{rowGap: '15px'}}>
                                        <p className="text-white">
                                        <i className="bi bi-currency-bitcoin medium-title"></i>
                                        </p>
                                        <p className="medium-title">
                                        Buy XYZ
                                        </p>
                                        <button className="btn btn-primary custom-btn  bg-purple text-white">
                                            Buy XYZ
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second card */}

                    {/* three card */}
                    <div className="col-lg-4 third-card">
                        <div className="card main-bg">
                            <div className="card-body pt-3">
                                <div className="smak-right d-flex flex-column">
                                    <h3 className="medium-title">
                                    Smartlink FAQs
                                    </h3>
                                </div>
                                <div style={{width: '70%'}}>
                                    <p className="small-title">
                                        Explore our documentation to find
                                        your answers to the most frequently
                                        asked questions.
                                    </p>
                                </div>
                                <button className="btn btn-secondary btn-sm" type="button">Go to Lottery</button>
                            </div>

                        </div>
                    </div>
                    {/* three card */}
                </div>
                {/* bottom three cards end */}
            </div>
        </Fragment>
    );
}