import React, { Component } from 'react';
import Picture from '/Users/dmac/Desktop/PerScholas/hw/my_aesop/my_aesop/src/components/images/1.png'

class Secondpage extends Component {
    state = {  }
    render() { 
        return ( <div>
            <div className="main-container">
            <div>
                <h1> Five mythical Gift Kits </h1>
                <h3> Crafted for gods, mortals, and muses alike, our new Gift Kit </h3>
                <h3> collection makes for inspired gift giving this festive season.</h3>
                <button>Explores seasonal Gift Kits -></button>
            </div>
            <div>
                <img src={Picture}></img>
            </div>
            </div>
        </div> );
    }
}
 
export default Secondpage;