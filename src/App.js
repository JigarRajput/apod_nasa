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
      <div className='row m-0'>
        <div className='col-lg-5'>
          <img src={data_fetched.url} id="img" className='mx-sm-3' style={{ width: "100%", height: "95%", borderRadius: "15px" }} />
        </div>
        <div className='px-5 col-lg-7'>
          <div className='d-flex flex-row justify-content-between my-3'>
            <label><strong>Choose Date:</strong></label>
            <input type="date" onChange={handleDateChange}></input>
          </div>
          <label><h5>Description:</h5></label>
          <p>{data_fetched.explanation}</p>
          <h6>Date:<label className='my-2 px-4'>{data_fetched.date}</label></h6>
          <h6 className='my-2'><label> Made with ❤️ by Jigar Rajput </label></h6>
        </div>
      </div>
    </div>
  );
}

export default App;
