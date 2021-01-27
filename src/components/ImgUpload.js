import React, { Component } from "react";

class ImgUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {img: {}, file: {}, fileName: ''};
  }

  componentDidMount() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const uploadFile = document.getElementById("upload-file");
    let img = new Image();
    let fileName = "";

    // Upload File
    uploadFile.addEventListener("change", () => {
      // Get File
      const file = document.getElementById("upload-file").files[0];
      // Init FileReader API
      const reader = new FileReader();

      // Check for file
      if (file) {
        // Set file name
        fileName = file.name;
        // Read data as URL
        reader.readAsDataURL(file);
      }

      // Add image to canvas
      reader.addEventListener(
        "load",
        () => {
          // Create image
          img = new Image();
          // Set image src
          img.src = reader.result;
          // On image load add to canvas
          img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.removeAttribute("data-caman-id");
          };
        },
        false
      );
      //updating state
    this.setState({img: img, file: file, fileName: fileName});
    this.props.updateImage(this.state.img, this.state.file, this.state.fileName);
    console.log(this.state.file);
    });
    
  }

  render() {
    return (
      <div className="container mx-auto p-5">
        <input
          type="file"
          className="text-white w-3/4 px-4 py-2 bg-gray-800  capitalize text outline-none focus:outline-none"
          id="upload-file"
        ></input>
        <canvas
          className="mx-auto p-5 bg-gray-100 w-full md:w-3/4 my-4"
          id="canvas"
        ></canvas>
      </div>
    );
  }
}

export default ImgUpload;
