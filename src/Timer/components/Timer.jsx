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
        baseTime: moment.duration(25, "minutes"),
    };
}


render()
{
return(
<div className="container-fluid">
  <Header />
  <Display currentTime= {this.state.currentTime } />
  <TimerButton  />
  <TimerConfig baseTime={this.state.baseTime} />
</div>
    );
}



}
export default Timer;