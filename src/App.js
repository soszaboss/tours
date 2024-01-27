import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTour] = useState([])

  // async function fetchData() {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json(); // This line is added
  //     setLoading(false); // This line is modified
  //     setTour(data);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

  // useEffect(() => {fetchData()}, [])
  
  function tourData(data) {
          setLoading(false);
          setTour(data)
  }
  useEffect(() => {tourData(data)}, [])
  return (
            <main>
              {
                loading ? (<Loading />) : (<Tours tours={tours} />)
              }
              
            </main>
  )
}
export default App
