import { Fragment, useState } from "react";
import '../scss/stacking.scss';
import Logo from '../../src/logo.svg';

export default function StakingComponent() {
    const [active, setActive] = useState('left');

    const handleActive = () => {
        if (active === 'left') {
            setActive('right');
        }
        if (active === 'right') {
            setActive('left');
        }
    }
    return(
        <Fragment>
            <div className="container stacking-wrapper">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="card custom-card main-bg">
                            <div className="card-body">
                                <div className="mini-nav d-flex justify-content-between align-items-center">
                                    <span className={active === 'left' ? 'left active' : 'left'} onClick={handleActive}>20% APR</span>
                                    <span className={active === 'right' ? 'right active' : 'right'} onClick={handleActive}>36% APR</span>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <img src={Logo} alt="logo" style={{width: '160px'}}/>
                                    <button className="btn btn-sm btn-secondary">
                                    90 DAY LOCKUP
                                    </button>
                                </div>
                                <div className="d-flex justify-content-between mt-4" style={{fontSize: '12px'}}>
                                    <span className="text-gray">
                                    Balance: 0 SMAK
                                    </span>
                                    <a className="text-gray">Use Max</a>
                                </div>
                                <div className="d-grid mt-2">
                                    <input className="p-2 main-bg main-border text-white" placeholder="0" style={{borderRadius: '20px', outline: 'none'}}/>
                                    <p className="mt-1" style={{color: '#e6beff', fontSize: '13px', textAlign: 'right'}}>Min. 1 SMAK ~ 0.0187 USD</p>
                                </div>
                                <div className="d-grid mt-2">
                                    <button className="btn btn-primary custom-btn lite-gray text-white" type="button">Connect Wallet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="card custom-card main-bg">
                            <div className="card-body" style={{padding: '31px 20px'}}>
                                <p className="medium-title">
                                My staking details
                                </p>
                                <div className="card custom-card main-bg">
                                    <div className="card-body" style={{padding: '10px 30px'}}>
                                        <div className="d-flex justify-content-around align-items-center" style={{textAlign: 'center'}}>
                                            <div>
                                                <p className="fs-6 text-gray">
                                                My SMAK Balance
                                                </p>
                                                <p className="fs-5 text-white">
                                                0 SMAK
                                                </p>
                                            </div>
                                            <div className="separator"></div>
                                            <div>
                                                <p className="fs-6 text-gray">
                                                My SMAK Balance
                                                </p>
                                                <p className="fs-5 text-white">
                                                0 SMAK
                                                </p>
                                            </div>
                                            <div className="separator"></div>
                                            <div>
                                                <p className="fs-6 text-gray">
                                                My SMAK Balance
                                                </p>
                                                <p className="fs-5 text-white">
                                                0 SMAK
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4" style={{padding: '0 30px'}}>
                                <div className="col-lg-4 card custom-card main-bg">
                                    <div className="card-body d-flex flex-column" style={{rowGap: '15px', alignItems: 'center', padding: '10px'}}>
                                        <img src="https://app.smartlink.so/img/Spark.1233186e.png" alt="spark" width="60px" />
                                        <button className="btn btn-primary custom-btn  bg-purple text-white px-3">
                                        Staking details
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-4  card custom-card main-bg">
                                    <div className="card-body d-flex flex-column" style={{rowGap: '10px', alignItems: 'center', padding: '15px'}}>
                                        <img src="https://app.smartlink.so/img/Star.d1b4acc8.png" alt="spark" width="60px" />
                                        <button className="btn btn-primary custom-btn  bg-purple text-white px-3">
                                        Staking details
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-4  card custom-card main-bg">
                                    <div className="card-body d-flex flex-column" style={{rowGap: '15px', alignItems: 'center', padding: '10px '}}>
                                        <img src="https://app.smartlink.so/img/Clock.d0297dba.png" alt="spark" width="60px" />
                                        <button className="btn btn-primary custom-btn  bg-purple text-white px-3">
                                        Staking details
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="d-flex my-4 align-items-center" style={{columnGap: '25px'}}>
                    <span className="text-white fs-6">Dashboard</span>
                    <span className="fs-5" style={{color: '#cfa8ff'}}>SMAK Staking Data</span>
                </div>
                <div className="d-flex smak-three-cards">
                    <div className="card custom-card main-bg">
                        <div className="card-body" style={{padding: '20px 30px 10px 30px', marginRight: '25px'}}>
                            <p className="text-gray fs-6">
                            $SMAK Price
                            </p>
                            <p className="text-white fs-5">
                            $0.019 USD <span className="badge bg-success px-2">7.89%</span>
                            </p>
                        </div>
                    </div>
                    <div className="card custom-card main-bg">
                        <div className="card-body" style={{padding: '20px 30px 10px 30px', marginRight: '25px'}}>
                            <p className="text-gray fs-6">
                            $SMAK Price
                            </p>
                            <p className="text-white fs-5">
                            $0.019 USD <span className="badge bg-success px-2">7.89%</span>
                            </p>
                        </div>
                    </div>
                    <div className="card custom-card main-bg">
                        <div className="card-body" style={{padding: '20px 30px 10px 30px', marginRight: '25px'}}>
                            <p className="text-gray fs-6">
                            $SMAK Price
                            </p>
                            <p className="text-white fs-5">
                            $0.019 USD <span className="badge bg-success px-2">7.89%</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-lg-7">
                        <div className="card custom-card main-bg">
                            <div className="card-body" style={{minHeight: '415px'}}>
                                <p className="fs-5 text-white">
                                SMAK Staking Analysis
                                </p>
                                <p className="fs-6 text-white">
                                Coming soon...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="list-data col-lg-5">
                        <div className="card custom-card main-bg">
                            <div className="card-body">
                                <p className="fs-5 text-white">
                                SMAK Staking Contract Details
                                </p>
                                <div className="mt-4">
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text-white">
                                        Contract address
                                        </p>
                                        <p className="fs-6 text-white">
                                        KT1TwzD6zV3WeJ3
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text-white">
                                        Number of stakers
                                        </p>
                                        <p className="fs-6 text-white">
                                        2,782
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text-white">
                                        Circulating
                                        </p>
                                        <p className="fs-6 text-white">
                                        468,771,984 SMAK
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text-white">
                                        Market cap
                                        </p>
                                        <p className="fs-6 text-white">
                                        8,909,117.483 USD
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text-white">
                                        Max supply cap
                                        </p>
                                        <p className="fs-6 text-white">
                                        17,030,266.23 USD
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text-white">
                                        SMAK burned
                                        </p>
                                        <p className="fs-6 text-white">
                                        11,092,723.82 SMAK
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="fs-6 text-white">
                                        Total supply
                                        </p>
                                        <p className="fs-6 text-white">
                                        896,083,333 SMAK
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}