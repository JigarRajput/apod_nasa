import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [data_fetched, setData] = useState({})
  const [api, setApi] = useState("https://api.nasa.gov/planetary/apod?api_key=TStzBWn5tsEBlcBmoz21TZsnV4Dgyb45dkCNJFKN")

  useEffect(() => {

    axios.get(api)
      .then(data => {
        console.log(data)
        console.log(data.data.hdurl)
        setData(data.data)

      })
      .catch(console.error())

  }, [api]);

  const handleDateChange = (e) => {
    const date = e.target.value
    console.log(date)
    setApi("https://api.nasa.gov/planetary/apod?api_key=TStzBWn5tsEBlcBmoz21TZsnV4Dgyb45dkCNJFKN&date=" + date)
    console.log(api)
  }

  // API Key:     TStzBWn5tsEBlcBmoz21TZsnV4Dgyb45dkCNJFKN
  return (
    <div className='container-main'>
      <h2 className='text-center py-4'>Astronomy Picture of the Day !</h2>
      <div className='container'>
        <div className='left-half'>
          <img src={data_fetched.url} className='rounded' style={{ width: "500px", height: "500px" }} />
        </div>
        <div className='right-half ms-5'>
          <div className='date-label-container d-flex flex-row justify-content-between my-3'>
            <label><strong>Choose Date:</strong></label>
            <input type="date" onChange={handleDateChange}></input>
          </div>
          <label><h5>Description:</h5></label>
          <p>{data_fetched.explanation}</p>
          <h6>Date:<label className='mx-4 my-2 px-4'>{data_fetched.date}</label></h6>
          <h6 className='my-2'><label> Made with ❤️ by Jigar Rajput </label></h6>
        </div>
      </div>
    </div>
  );
}

export default App;
