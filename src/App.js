import Nav from "./components/Nav";
import ImgUpload from "./components/ImgUpload";
import Filters from "./components/Filters";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {img: {}, file: {}, fileName: ''};
    this.updateImage = this.updateImage.bind(this);
  }

  updateImage(img, file, fileName) {
    this.setState({img: img, file: file, fileName: fileName});
    console.log("app", this.state.file);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className = "flex flex-col md:flex-row justify-center">
        <ImgUpload updateImage = {this.updateImage}/>
        <Filters img={this.state.img} file={this.state.file} fileName={this.state.fileName}/>
        </div>
      </div>
    );
  }
}

export default App;
