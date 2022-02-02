import { Fragment } from "react";
import '../scss/scanner.scss';

export default function ScannerComponent() {
    return(
        <Fragment>
            <div className="scanner-wrapper container">
                <div className="row">
                    <div className="card custom-card main-bg main-border">
                        <div className="card-body">
                            <p className="medium-title" style={{textAlign: 'center'}}>
                                AntiscamAI
                            </p>
                            <form className="col-lg-8">
                                <div className="col-lg-12">
                                    <label className="col-lg-3 text-white ">
                                        Website
                                    </label>
                                    <input className="col-lg-3 p-2 main-bg main-border text-white" placeholder="" style={{borderRadius: '20px', outline: 'none'}}/>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <label className="col-lg-3 text-white  ">
                                        Contact Address
                                    </label>
                                    <input className="col-lg-3 p-2 main-bg main-border text-white" placeholder="" style={{borderRadius: '20px', outline: 'none'}}/>
                                </div>
                                <div className="col-lg-12 mt-3" style={{columnGap: '20px'}}>
                                    <label className="col-lg-3 text-white">
                                        
                                    </label>
                                    <button className="col-lg-3 btn btn-sm btn-primary custom-btn  bg-purple text-white px-3">
                                        Scan
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}