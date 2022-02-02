import React, {Fragment } from 'react';

import DashboardComponent from './DashboardComponent';
import NavComponent from './NavComponent';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import SwapComponent from './SwapComponent';
import StakingComponent from './StakingComponent';
import ScannerComponent from './ScannerComponent';
import TraderComponent from './TraderComponent';
import TrackerComponent from './TrackerComponent';
export default function MainComponent() {
    return(
        <Fragment>
            <Router basename='/smartlink'>
                <NavComponent />
                
                <Routes>

                    <Route path="/" element={<DashboardComponent/>}/>

                    <Route path="/swap" element={<SwapComponent/>}/>

                    <Route path="/staking" element={<StakingComponent/>}/>

                    <Route path="/ai-scanner" element={<ScannerComponent/>}/>

                    <Route path="/ai-trader" element={<TraderComponent/>}/>

                    <Route path="/ai-tracker" element={<TrackerComponent/>}/>

                </Routes>
              
            </Router>
        </Fragment>
    )
}