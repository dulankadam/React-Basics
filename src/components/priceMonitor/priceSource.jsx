import React, {useContext, useEffect, useState} from "react";
import PriceContext, { useStore } from "../../store";

function PriceSource(){
    
    const PriceOptions = [
        { label: 'SRC 1', value: '1' },
        { label: 'SRC 2', value: '2' },
        { label: 'SRC 3', value: '3' },
        { label: 'SRC 4', value: '4' },
        { label: 'SRC 5', value: '5' },
        { label: 'SRC 6', value: '6' },
        { label: 'SRC 7', value: '7' },
        { label: 'SRC 8', value: '8' },
        { label: 'SRC 9', value: '9' },
        { label: 'SRC 10', value: '10' },
      ];

    const {selectedPrice,setSelectedPrice} = useContext(PriceContext);

    const handlePriceSourceChange = (event) => {
        setSelectedPrice(event.target.value);
    };

    return (
        <React.Fragment>
        <label className="p-2 px-5 mb-4">Price source:         
            <select className="form-select form-select-lg mb-2" aria-label=".form-select-lg example" value={selectedPrice} onChange={handlePriceSourceChange} >
            {PriceOptions.map((PriceOptions) => (
                <option value={PriceOptions.value}>{PriceOptions.label}</option>
            ))}
            </select>
        </label>
        {/* <div>Price Source Selected: {value}</div> */}
        
        </React.Fragment>
    );
}

export default PriceSource;