import React, {useContext, useEffect,useState} from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";
import PriceContext, { useStore } from "../../store";


const PriceList = ({ data, cols }) => {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {cols.map((j, i) => (
                <th key={i}>{j}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => {
              return (
                <tr key={i}>
                  <td>{row.id}</td>
                  <td>{row.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

const Dashboard = (props) => {
   // const [data, setData] = useState({ cols: null, data: null });
    const {priceList,setPriceList} = useContext(PriceContext);
  
    useEffect(() => {
      axios
        .get(`https://reqres.in/api/users?page=2`)
        .then((res) => {
          const cols = Object.keys(res.data.data[0]).map((i) => i);
          setPriceList({ data: res.data.data, cols });
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
      <div className="dashboard-content">
        {priceList.data && <PriceList data={priceList.data} cols={priceList.cols} />}
      </div>
    );
  };


export default Dashboard;