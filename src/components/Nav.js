import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="container mx-auto bg-gray-800 text-white p-5">
        <nav className="flex justify-between">
            <a className="uppercase tracking-widest" href="/">Image Filter</a>
            <a className="px-2 py-1 border border-4 border-gray-100" href="#">Github</a>
        </nav>
      </div>
    );
  }
}

export default Nav;
