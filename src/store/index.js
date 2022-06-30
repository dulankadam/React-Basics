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
            axios
                .get(`https://reqres.in/api/users?page=${selectedPrice}&ticker=${selectedTicker}`)
                .then((res) => {
                    const cols = Object.keys(res.data.data[0]).map((i) => i);
                setPriceList({ data: res.data.data, cols });
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