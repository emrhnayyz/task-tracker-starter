import React, { useState } from "react";


const GorevEkle = ({ array, setArray }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const [showButton,setShowButton]= useState(true)

  const gorevDegisikligi = (e) => {
    setTask(e.target.value);
  };

  const gunDegisikligi = (e) => {
    setTime(e.target.value);
  };

  const addGorev = (e) => {
    e.preventDefault();



  
    const yeniGorev = {
      id: array.length + 1,
      text: task,
      day: time,
      bitti: false,
    };

    if(!task || !time){
      alert("Please enter a task and date")
      return
    }else{
      setArray([...array, yeniGorev]);

    
      setTask("");
      setTime("");
    }

   
    setArray([...array, yeniGorev]);

    
    setTask("");
    setTime("");
  };

  const showBtn =()=>{
    setShowButton(!showButton)
  }


  return (
    <div>
      <header className="header">
        <h1>TASK TRACKER</h1>
        <button onClick={showBtn} className="btn">{showButton ? "CLOSE TASK BAR" : "SHOW TASK BAR"}</button>
        
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
            type="datetime-local"
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