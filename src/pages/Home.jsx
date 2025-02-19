import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Card from '../components/Card'

const Home = () => {
  const [allChanel, setAllChanel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("/data.json");
            const data = await response.json();
            setAllChanel(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
  }, []);



  return (
    <div className="content flex flex-col overscroll-none h-screen">
    <h1 className='headtext'>home</h1>
    
    {/* <div className="">{allChanel.title}</div> */}
    {/* {allChanel.map((item) => (
        <div className="" key={item.id}>{item.title}</div>
    ))} */}

    {/* CARD */}
    <div className="height overflow-y-scroll">
      <div className="grid grid-cols-4 gap-4 mx-auto ">
      {allChanel.map((item) => (
        <Card key={item.id} item={item} />
      ))}
      </div>
    </div>
    
    
    </div>
  )
}

export default Home
