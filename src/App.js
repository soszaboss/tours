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
  
  const removeTour = (id) => {
    const newTour = tours.filter((el) => el.id !== id);
    console.log(newTour);
     setTour(newTour)
  }
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
            <main className={tours.length === 0 ? 'title' : ''}>
              {
                loading ? (<Loading />) : tours.length === 0 ? (<h2> No Tour(s) </h2>): (<Tours tours={tours } removeTour={removeTour}/>)
              }
              
            </main>
  )
}
export default App
