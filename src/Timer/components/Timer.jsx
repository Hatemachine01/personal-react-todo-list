import React, {Component} from "react"; 
import moment from "moment";
import Header from "../../TimerHeader/components/TimerHeader";
import Display from "../../TimerDisplay/components/TimerDisplay";
import TimerButton from "../../TimerButton/components/TimerButton";
import TimerConfig from "../../TimerConfig/components/TimerConfig";


class Timer extends Component {
constructor() {
    super();

    this.state = {
        currentTime: moment.duration(25, "minutes"),
        BaseTime: moment.duration(25, "minutes"),
    };

this.setBaseTime = this.setBaseTime.bind(this); 

}




setBaseTime(NewBaseTime){
    this.setState({
        BaseTime: NewBaseTime
    });
}

render()
{
return(
<div className="container-fluid">
  <Header />
  <Display currentTime= {this.state.currentTime } />
  <TimerButton  />
  <TimerConfig  
    BaseTime={this.state.BaseTime}
    setBaseTime= {this.setBaseTime}
    />
</div>
    );
}



}
export default Timer;