import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meningOfLife: 47 + this.props.incriment,
    };
  }
  handleClick = () => {
    this.setState(
      (prevSate, prevProps) => {
        return { meningOfLife: prevSate.meningOfLife + prevProps.incriment };
      },
      () => {
        console.log(this.state.meningOfLife);
      }
    );
  };
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
