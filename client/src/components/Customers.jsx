import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import './customers.css'
const Customers = () => {

    const [data,setData] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:5000/').then((response) => {
            
            setData(response.data);

                 

          });
    }


    useEffect(() => {
      getData();
    }, [])

    // const ListItems = data.map((number,key) =>
    // // <li>{number.firstname}</li>
    // console.log(number)
    //   );
    
    
  return (
    <ul className='list'><NumberList numbers={data} /></ul>

  )
}

export default Customers

            
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,key) =>
      <li key={key}>{number.firstname}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }