import content from './content'
import './items.css';
import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {  
        return ( 
           <div>
             <div className="cont-1">
                 {content.advertisment.map((advertisments, key) => {
                    return(
                        <div className="advert">
                            <img src={advertisments.image} alt="" width="300px" height="200px"/>
                        </div>
                    )
                 ;})}

             </div>

             <div className="sell">
                 {content.topSelling.map((topSellings, key) => {
                    return(
                        <div className="top">
                            <img src={topSellings.image} alt="" width="170px"/>
                        </div>
                    )
                 })}
             </div>

             <div className="sell">
              { content.watches.map((watch, key) =>{
                  return(
                    <div className="cont-2">

                        <img src={watch.image} alt="" width="170px" height="180px" />
                         <p className="text">{watch.text}</p>           
                        <span className="price">{watch.price}</span>
                        <br />
                        <button type="submit" className="btn-1">Buy</button>

                </div>

             )})}</div>  

           </div> 
         );
    }
}
 
export default Example;