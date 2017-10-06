import React from "react"; 
import Header from "../../TimerHeader/components/TimerHeader";
import Display from "../../TimerDisplay/components/TimerDisplay";
import TimerButton from "../../TimerButton/components/TimerButton";
import TimerConfig from "../../TimerConfig/components/TimerConfig";

const Timer = ()=> (

<div className="Cotainer-fluid">
              <Header />
              <Display />
              <TimerButton  />
              <TimerConfig  />
               
</div>
)

export default Timer;