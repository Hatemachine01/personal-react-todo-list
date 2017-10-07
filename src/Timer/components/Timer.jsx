import React, {Component} from "react"; 
import moment from "moment";
import Header from "../../TimerHeader/components/TimerHeader";
import Display from "../../TimerDisplay/components/TimerDisplay";
import TimerButton from "../../TimerButton/components/TimerButton";
import TimerConfig from "../../TimerConfig/components/TimerConfig";
import * as timerStates from '../../timerStates'; 


class Timer extends Component {
constructor() {
    super();

    this.state = {
        currentTime: moment.duration(25, "minutes"),
        BaseTime: moment.duration(25, "minutes"),
        timerState: timerStates.NOT_SET,
        timer: null, 
    };

this.setBaseTime = this.setBaseTime.bind(this); 
this.startTimer= this.startTimer.bind(this);
this.reduceTimer= this.reduceTimer.bind(this);
this.stopTimer= this.stopTimer.bind(this);
}




setBaseTime(NewBaseTime){
    this.setState({
        BaseTime: NewBaseTime,
        currentTime: NewBaseTime,

    });
}


startTimer(){

    this.setState({
        timerState: timerStates.RUNNING, 
        timer: setInterval(this.reduceTimer, 1000)
    });
}


stopTimer() {
    if(this.state.timer){
        clearInterval(this.state.timer);
    }
    
    this.setState({

        timerState: timerStates.NOT_SET,
        timer: null,
        currentTime: moment.duration(this.state.BaseTime),
    });
}

reduceTimer(){
    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
         currentTime:newTime,
    }); 

}


render()
{
    return(
        <div className="container-fluid">
            <Header />
            <Display currentTime= {this.state.currentTime } />
            <TimerButton  
            startTimer= {this.startTimer} 
            timerState={this.state.timerState} 
            stopTimer = {this.stopTimer}
            />
            { 
                (this.state.timerState !== timerStates.RUNNING)
                &&
                (<TimerConfig 
                BaseTime={this.state.BaseTime}
                setBaseTime= {this.setBaseTime}
                />)
            }
        </div>
        );
    }
}

export default Timer;