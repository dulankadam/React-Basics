import React, {useContext, useState} from "react";
import PriceContext, { useStore } from "../../store";

function PriceSource(){
    
    const PriceOptions = [
        { label: 'SRC1', value: '1' },
        { label: 'SRC2', value: '2' },
        { label: 'SRC3', value: '3' },
        { label: 'SRC4', value: '4' },
      ];

    //const [value, setPriceSourceList] = useState('');
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