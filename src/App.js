import React, { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return <h2>loading....</h2>;
  }
  const {company,dates,duties,title} = jobs[value]
  return (
    <div className='container'>
      <div className='text'>
        our Experince
      </div> 
      <div className='underline'></div>
      <div className='tabs'>
      {jobs.map((job,index) => {
          return <button className={value === index ? 'active' : null} key={job.id} onClick={()=>setValue(index)}>{job.company}</button>
      })}
      </div>
      <div className='info'>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <h4>{dates}</h4>
        {
          duties.map((duty,index) =>{
            return <p key={index}>{duty}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
