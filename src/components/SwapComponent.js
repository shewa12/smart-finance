import { Fragment, useState } from "react";
import '../scss/swap.scss';

function ListInfo() {
    return(
        <Fragment>
            <div className="d-flex justify-content-between">
                <span>Minimum received</span>
                <span>0.00 SMAK</span>
            </div>
            <div className="d-flex justify-content-between">
                <span>Price impact</span>
                <span>0.00%</span>
            </div>
            <div className="d-flex justify-content-between">
                <span>Liquidity provider fee</span>
                <span>0.00</span>
            </div>
        </Fragment>
    );
}

function TextInfo() {
    return(
        <Fragment>
            <p>
            By adding liquidity you'll earn 0.28% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
            </p>
        </Fragment>
    );
}
export default function SwapComponent() {
    const [active, setActive] = useState('swap');

    const handleActive = () => {
        if (active === 'swap') {
            setActive('liquidity');
        }
        if (active === 'liquidity') {
            setActive('swap');
        }
    }
    return(
        <Fragment>
            <div className="container swap-wrapper">
                <div className="row left-side">
                    <div className="col-lg-4">
                        <div className="card main-bg custom-card">
                            <div className="card-body">
                                <div className="mini-nav d-flex justify-content-between align-items-center">
                                    <span className={active === 'swap' ? 'swap active' : 'swap'} onClick={handleActive}>Swap</span>
                                    <span className={active === 'liquidity' ? 'liquidity active' : 'liquidity'} onClick={handleActive}>Liquidity</span>
                                </div>
                                <div className="card main-bg custom-card mt-3">
                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#token-popup">
                                                XYZ <i className="bi bi-caret-down"></i>
                                            </button>
                                            <input placeholder="0.0" className="main-bg" style={{border: 'none', textAlign: 'right',fontSize: '24px', 'color': '#fff', outline: 'none'}}/>
                                        </div>
                                        <p className="text-white mt-3">
                                            Balance: 0.00 XTZ (Max)
                                        </p>
                                    </div>
                                </div>
                                <div className="card main-bg custom-card mt-3">
                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#token-popup">
                                                SMAK <i className="bi bi-caret-down"></i>
                                            </button>
                                            <input placeholder="0.0" className="main-bg"  style={{border: 'none', textAlign: 'right',fontSize: '24px', 'color': '#fff', outline: 'none'}}/>
                                        </div>
                                        <p className="text-white mt-3">
                                            Balance: 0.00 XTZ (Max)
                                        </p>
                                    </div>
                                </div>
                                <div className="tolerance d-flex justify-content-between pt-3 px-2">
                                    <p>Slipplage tolerance</p>
                                    <p>0.5%</p>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary custom-btn lite-gray">
                                        Connect wallet
                                    </button>
                                </div>
                                <div className="card main-bg custom-card mt-3">
                                    <div className="card-body d-flex flex-column">
                                        <div className="bottom-info py-1">
                                            {
                                                active === 'swap' ? <ListInfo /> : <TextInfo />
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 swap-chart">
                        <div>
                            <p className="medium-title">
                            <i className="bi bi-currency-bitcoin"></i> XTZ / SMAK
                            </p>
                            <p className="medium-title">
                            185.388306 SMAK <span className="badge bg-success">
                            +0.3528%
                            </span>
                            <span className="text-success" style={{fontSize: '13px', paddingLeft: '5px'}}>Past 24 Hours</span>
                            </p>
                            <p className="text-gray">
                            Jan 24, 2022, 8:00AM
                            </p>
                        </div>
                        <div className="cart">
                            <h3 className="small-title text-gray">
                                Chart coming soon...
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* token modal  */}
            <div className="modal fade custom-modal" id="token-popup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title medium-title" id="exampleModalLabel">
                        Select a token
                    </h5>
                    <i type="button" className="bi bi-x-lg text-white" data-bs-dismiss="modal" aria-label="Close"></i>
                    </div>
                    <div className="modal-body">
                        <div className="custom-input d-grid mt-2">
                            <input className="p-3 lite-gray" placeholder="search name & paste contact address"/>
                        </div>
                        <div className="tokens-frequently-paired mt-4">
                            <p className="fs-6 text-white">
                            Tokens frequently paired
                            </p>
                            <div className="d-flex  mt-4" style={{columnGap: '5px', rowGap: '10px', flexWrap : 'wrap'}}>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                                <button className="btn btn-sm btn-secondary main-bg">
                                    <img src="https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png" alt="coins"/> XYZ
                                </button>
                            </div>
                            <div className="image-with-li mt-4 d-flex flex-column">
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <img src="https://ipfs.io/ipfs/bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq" alt="icon"/> 
                                    <div className="">
                                        <li className="text-white">
                                            CRUNCH
                                        </li>
                                        <li className="text-gray">
                                            CRUNCH
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid mt-4">
                                <button className="btn btn-lg btn-primary bg-purple fs-6">
                                    + Add new token
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* token modal end */}
        </Fragment>
    );
}