import React, { Component } from 'react';
import Projects from "./components/projects";
import AddProject from "./components/AddProject";
import uuid from "uuid";
import './App.css';

class App extends Component {
 

  constructor() {
  super();
  this.state = {
    projects: [  ]
    }
  }
 
 



componentWillMount(){
  this.setState({projects:[
  {  
    id: uuid.v4(),  
    title: "Buisiness Website",
    category: "Web Design"
  },

  { id: uuid.v4(),
    title: "Social App",
  category: "Mobile Development"
  },

  {id: uuid.v4(),
    title: "Ecommerce Shopping Cart",
  category: "Web Development"
  }
  ]});
}


handleAddProject(project){
let projects = this.state.projects;
  projects.push(project);
  this.setState({projects: projects}); 
}
  
handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index,1);
  this.setState({projects: projects}); 


}

  render() {
    return (
      <div className="App">
     
   
        <AddProject  AddProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
      <br/>
      <div class="panel panel-default content center-block">
          <div class="panel-body">
              <div className="Cotainer-fluid">
                <div className="row">
                  <h2 className="text-center"> Pomodoro Power! </h2>
                </div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
