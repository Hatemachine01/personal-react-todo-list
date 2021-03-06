import React, { Component } from 'react';
import uuid from "uuid"; 
import ProjectItem from "./projectItem"


class AddProject extends Component {


constructor() {
    super();
    this.state = {
        newProject:{}
    }
}



    static defaultProps = {
        categories: [ 'Web Development', "General"]
    }
  
    handleSubmit(e){
        if(this.refs.title.value === ""){

            alert("Title is Required")
       
        } else {
            this.setState({newProject:{
                id : uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                console.log(this.state);
                this.props.AddProject(this.state.newProject); 
            });

        }
        e.preventDefault();
    }


  
 render() {

    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category.value}>{category}</option>
    });

    return (
      <div>
       <h3> Add Task </h3>
       <form onSubmit={this.handleSubmit.bind(this)}>
           <div>
               <label> Title </label><br />
               <input type = "text" ref="title" />
           </div>
        <div> 
            <label> Category </label> <br /> 
            <select ref="category">
            {categoryOptions}
            </select>
        </div>  
            <br/>
            <input  className="btn btn-sucess" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
