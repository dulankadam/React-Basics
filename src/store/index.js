import React, { useEffect, useState } from 'react';
import axios from "axios";


export const PriceContext = React.createContext({
     selectedPrice:null,
     selectedTicker:null,
     priceList:{data: [], cols:[]},
     setSelectedPrice: () => {},
     setSelectedTicker: () => {},
     setPriceList: () => {}
    });
export const useStore = () => {
    const [selectedPrice, setSelectedPrice] = useState(1);
    const [selectedTicker, setSelectedTicker] = useState(1);
    const [priceList, setPriceList] = useState({data: [], cols:[]});
    
    

    useEffect(
        () => {
            const data = {
                PriceListId: selectedPrice,
                TickerId:selectedTicker
            };
        
            const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: JSON.stringify(data),
            url:"https://localhost:44358/api/PriceList/GetPriceList",
            };

            axios.request(options)
                .then((res) => {
                   if(res.data.length > 0) {
                        const cols = Object.keys(res.data[0]).map((i) => i);                        
                        setPriceList({ data: res.data, cols });
                    }else{
                        setPriceList({ data: null});
                    }
                    
                })
        .catch((err) => {
          console.log(err);
        });
        },[selectedPrice,selectedTicker]
    );

    return {setSelectedPrice,
            setSelectedTicker,
            setPriceList,
            priceList,
            selectedTicker,
            selectedPrice}
} 

export default PriceContext;