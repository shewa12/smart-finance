import { Fragment } from "react";
import '../scss/tracker.scss';

export default function TrackerComponent() {
    return(
        <Fragment>
            <div className="tracker-wrapper container">
                <div className="row">
                    <div className="card custom-card main-bg main-border">
                        <div className="card-body">
                            <p className="medium-title" style={{textAlign: 'center'}}>
                            Whales AI Tracker
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}