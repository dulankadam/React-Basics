import React from "react";
import PriceSource from "./priceSource";
import Ticker from "./ticker";
import PriceList from "./priceList";


function priceMonitor(){
    return (<div className="row list-group-item">
            <div className="row gx-5">
                <PriceSource/>
            </div>
            <div className="row gx-5">
                <Ticker/>
            </div>
            <div className="row gx-5">
                <PriceList/>
            </div>
            </div>
        );
}

export default priceMonitor;