import React, { useState } from "react";


const GorevEkle = ({ array, setArray }) => {
  const [task, setGorev] = useState("");
  const [time, setGun] = useState("");

  const [showButton,setShowButton]= useState(true)

  const gorevDegisikligi = (e) => {
    setGorev(e.target.value);
  };

  const gunDegisikligi = (e) => {
    setGun(e.target.value);
  };

  const addGorev = (e) => {
    e.preventDefault();



  
    const yeniGorev = {
      id: array.length + 1,
      text: task,
      day: time,
      bitti: false,
    };

   
    setArray([...array, yeniGorev]);

    
    setGorev("");
    setGun("");
  };

  const showBtn =()=>{
    setShowButton(!showButton)
  }


  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button onClick={showBtn} className="btn">ADD TASK BAR</button>
      </header>
      {showButton && <form onSubmit={addGorev}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input
            id="text"
            type="text"
            name="text"
            placeholder="Add Task"
            value={task}
            onChange={gorevDegisikligi}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            type="date"
            name="day"
            placeholder="Add Task"
            value={time}
            onChange={gunDegisikligi}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>}
    </div>
  );
};

export default GorevEkle;