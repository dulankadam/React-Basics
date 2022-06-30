import React, {useContext, useState} from "react";
import PriceContext, { useStore } from "../../store";

function Ticker(){

    const TickerOptions = [
        { label: 'TKR 1', value: '1' },
        { label: 'TKR 2', value: '2' },
        { label: 'TKR 3', value: '3' },
        { label: 'TKR 4', value: '4' },
      ];

    const {selectedTicker,setSelectedTicker} = useContext(PriceContext);

    const handlePriceSourceChange = (event) => {
        setSelectedTicker(event.target.value);
    };

    return (
        <React.Fragment>
        <label className="p-2 px-5 mb-4">Ticker:         
            <select className="form-select form-select-lg mb-2" aria-label=".form-select-lg example" value={selectedTicker} onChange={handlePriceSourceChange} >
            {TickerOptions.map((TickerOptions) => (
                <option value={TickerOptions.value}>{TickerOptions.label}</option>
            ))}
            </select>
        </label>
        {/* <p>Ticker Selected: {value}</p> */}
        
        </React.Fragment>
    );
}

export default Ticker;