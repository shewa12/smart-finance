import { Fragment } from "react";
import '../scss/trader.scss';

export default function TraderComponent() {
    return(
        <Fragment>
            <div className="trader-wrapper container">
                <div className="row">
                    <div className="card custom-card main-bg main-border">
                        <div className="card-body">
                            <p className="medium-title" style={{textAlign: 'center'}}>
                            AI Trading-Bot
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}