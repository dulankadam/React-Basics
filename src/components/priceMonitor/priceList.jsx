import React, {useContext, useEffect,useState} from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import PriceContext, { useStore } from "../../store";
import Moment from "moment";


const PriceList = ({ data, cols }) => {
  if(!data || !data.length){
    return <div></div>
  }
  return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr size="sm">
              {cols.map((j, i) => (
                <th key={i}>{j}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              return (
                <tr key={i}>
                  <td size="sm">{Moment(row.time).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
                  <td size="sm">{row.price}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

const Dashboard = (props) => {
   
    const {priceList,setPriceList} = useContext(PriceContext);
    const [priceList2,setPriceList2] = useState({data: [], cols:[]});
  

    useEffect(() => {
      setPriceList2(priceList);
    },[priceList]);

    useEffect(() => {

    const data = {
      PriceListId: 1,
      TickerId:1
      };

    const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data: JSON.stringify(data),
          url:"https://localhost:44358/api/PriceList/GetPriceList",
          };


      axios.request(options)
        .then((res) => {
          const cols = Object.keys(res.data[0]).map((i) => i);
          setPriceList({ data: res.data, cols });
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (         
      <div className="dashboard-content">      
        {priceList2.data && <PriceList data={priceList2.data} cols={priceList2.cols} />}
      </div>
    );
  };


export default Dashboard;