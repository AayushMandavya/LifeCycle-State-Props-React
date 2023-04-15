import { Component } from "react";

class App extends Component{
  constructor(){
    super();

    console.log("Constructor");
  }

  componentDidMount(){
    //backend
    console.log("Component did mount");
}

componentDidUpdate(){
  console.log(" update");
}

//update chai sabai render matra huncha, render part ma state huncha so state update cha render ma
  render() {
    return (
      <div>
        <h1>
          {this.props.Title}
        </h1>
      </div>
    );
  }
}
export default App;