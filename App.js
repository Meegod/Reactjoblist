import React,{useState,useEffect} from 'react';
import './App.css';
import JobBoardComponent from './Component/JobBoardComponent';
import data from './assets/data.json';

//console.log(data);

function App() {
  const[jobs,setJobs]=useState([]);


  useEffect(()=>{
    setJobs(data);

  },[jobs]);
  console.log(jobs);

  return (
    <div className="App">
      <header className="bg-green-500
      mb-12 rounded">
        <img src="./images/bg-header-desktop.svg"
        alt="bg-desktop"/>
      </header>

      {jobs.map(job=>(
        <JobBoardComponent job={job} key={job.id}/>

        ))}
    </div>
  );
}

export default App;


//Todos
// 1. Study the design & json
// 2. Create the job Board Component
// 3. Get the data from the json api
// 4. Pass down the data to the JBC
// 5. Style it
//
// 6. Filter Component
// 7. Filter the data


