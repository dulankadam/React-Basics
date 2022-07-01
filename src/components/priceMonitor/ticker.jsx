import React, {useContext, useState} from "react";
import PriceContext, { useStore } from "../../store";

function Ticker(){

    const TickerOptions = [
        { label: 'TKR 1', value: '1' },
        { label: 'TKR 2', value: '2' },
        { label: 'TKR 3', value: '3' },
        { label: 'TKR 4', value: '4' },
        { label: 'TKR 5', value: '5' },
        { label: 'TKR 6', value: '6' },
        { label: 'TKR 7', value: '7' },
        { label: 'TKR 8', value: '8' },
        { label: 'TKR 9', value: '9' },
        { label: 'TKR 10', value: '10' },
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