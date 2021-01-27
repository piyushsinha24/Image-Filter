import React, { Component } from "react";
class Filters extends Component {
  constructor(props) {
    super(props);
    this.addFilters = this.addFilters.bind(this);
    this.removeFilters = this.removeFilters.bind(this);
    this.downloadImg = this.downloadImg.bind(this);
  }

  addFilters() {
    let img = this.props.img;
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        if (e.target.classList.contains("brightness-add")) {
          window.Caman("#canvas", img, function () {
            this.brightness(5).render();
          });
        } else if (e.target.classList.contains("brightness-remove")) {
          window.Caman("#canvas", img, function () {
            this.brightness(-5).render();
          });
        } else if (e.target.classList.contains("contrast-add")) {
          window.Caman("#canvas", img, function () {
            this.contrast(5).render();
          });
        } else if (e.target.classList.contains("contrast-remove")) {
          window.Caman("#canvas", img, function () {
            this.contrast(-5).render();
          });
        } else if (e.target.classList.contains("saturation-add")) {
          window.Caman("#canvas", img, function () {
            this.saturation(5).render();
          });
        } else if (e.target.classList.contains("saturation-remove")) {
          window.Caman("#canvas", img, function () {
            this.saturation(-5).render();
          });
        } else if (e.target.classList.contains("vibrance-add")) {
          window.Caman("#canvas", img, function () {
            this.vibrance(5).render();
          });
        } else if (e.target.classList.contains("vibrance-remove")) {
          window.Caman("#canvas", img, function () {
            this.vibrance(-5).render();
          });
        } else if (e.target.classList.contains("vintage-add")) {
          window.Caman("#canvas", img, function () {
            this.vintage().render();
          });
        } else if (e.target.classList.contains("nostalgia-add")) {
          window.Caman("#canvas", img, function () {
            this.reloadCanvasData();
            this.nostalgia().render();
          });
        } else if (e.target.classList.contains("pinhole-add")) {
          window.Caman("#canvas", img, function () {
            this.pinhole().render();
          });
        } else if (e.target.classList.contains("sincity-add")) {
          window.Caman("#canvas", img, function () {
            this.sinCity().render();
          });
        } else if (e.target.classList.contains("cross-add")) {
          window.Caman("#canvas", img, function () {
            this.reloadCanvasData();
            this.crossProcess().render();
          });
        } else if (e.target.classList.contains("pinhole-add")) {
          window.Caman("#canvas", img, function () {
            this.pinhole().render();
          });
        }
      }
    });
  }

  removeFilters() {
    // Remove Filters
    const removeBtn = document.getElementById("remove");
    let img = this.props.img;
    const file = this.props.file;
    console.log("filters", file);
    if (removeBtn) {
      removeBtn.addEventListener("click", (e) => {
        window.Caman("#canvas", img, function () {
          // this.revert();
          const canvas = document.getElementById("canvas");
          let ctx = canvas.getContext('2d');
          const reader = new FileReader();
          reader.readAsDataURL(file);
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
        });
      });
    }
  }

  downloadImg() {
    // Download Event
    let fileName = this.props.fileName;
    const downloadBtn = document.getElementById("download");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        // Get ext
        const fileExtension = fileName.slice(-4);

        // Init new filename
        let newFilename;

        // Check image type
        if (fileExtension === ".jpg" || fileExtension === ".png") {
          // new filename
          newFilename =
            fileName.substring(0, fileName.length - 4) + "-edited.jpg";
        }

        // Call download
        const canvas = document.getElementById("canvas");
        download(canvas, newFilename);
      });

      // Download
      function download(canvas, filename) {
        // Init event
        let e;
        // Create link
        const link = document.createElement("a");

        // Set props
        link.download = filename;
        link.href = canvas.toDataURL("image/jpeg", 0.8);
        // New mouse event
        e = new MouseEvent("click");
        // Dispatch event
        link.dispatchEvent(e);
      }
    }
  }

  render() {
    this.addFilters();
    this.removeFilters();
    this.downloadImg();
    return (
      <div className="container mx-auto p-5">
        <div className="flex flex-col items-center justify-evenly">
          <div className="flex mb-4" role="group">
            <button
              className="filter-btn brightness-add text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              +
            </button>
            <span className="inline-block w-40 py-1 bg-gray-100 uppercase text-gray-800 capitalize">
              Brightness
            </span>
            <button
              className="filter-btn brightness-remove text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              -
            </button>
          </div>
          <div className="flex mb-4" role="group">
            <button
              className="filter-btn contrast-add text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              +
            </button>
            <span className="inline-block w-40 py-1 bg-gray-100 uppercase text-gray-800 capitalize">
              Contrast
            </span>
            <button
              className="filter-btn contrast-remove text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              -
            </button>
          </div>
          <div className="flex mb-4" role="group">
            <button
              className="filter-btn saturation-add text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              +
            </button>
            <span className="inline-block w-40 py-1 bg-gray-100 uppercase text-gray-800 capitalize">
              Saturation
            </span>
            <button
              className="filter-btn saturation-remove text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              -
            </button>
          </div>
          <div className="flex mb-4" role="group">
            <button
              className="filter-btn vibrance-add text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              +
            </button>
            <span className="inline-block w-40 py-1 bg-gray-100 uppercase text-gray-800 capitalize">
              Vibrance
            </span>
            <button
              className="filter-btn vibrance-remove text-white px-4 py-1 bg-gray-800  capitalize text outline-none focus:outline-none"
              type="button"
            >
              -
            </button>
          </div>
        </div>
        <div className="flex flex-col p-8 justify-evenly">
          <button
            className="filter-btn vintage-add text-white px-4 py-1 mb-4 bg-gray-800  capitalize text outline-none focus:outline-none"
            type="button"
          >
            Vintage
          </button>
          <button
            className="filter-btn nostalgia-add text-white px-4 py-1 mb-4 bg-gray-800  capitalize text outline-none focus:outline-none"
            type="button"
          >
            Nostalgia
          </button>
          <button
            className="filter-btn cross-add text-white px-4 py-1 mb-4 bg-gray-800  capitalize text outline-none focus:outline-none"
            type="button"
          >
            Cross Process
          </button>
          <button
            className="filter-btn pinhole-add text-white px-4 py-1 mb-4 bg-gray-800  capitalize text outline-none focus:outline-none"
            type="button"
          >
            Pin Hole
          </button>
        </div>
        <div className="flex mx-auto w-3/4 justify-evenly">
          <button
            className="filter-btn text-white px-4 py-1 bg-green-500  capitalize text outline-none focus:outline-none"
            type="button"
            id="download"
          >
            Download
          </button>
          <button
            className="filter-btn text-white px-4 py-1 bg-red-500  capitalize text outline-none focus:outline-none"
            type="button"
            id="remove"
          >
            Reset Filters
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
