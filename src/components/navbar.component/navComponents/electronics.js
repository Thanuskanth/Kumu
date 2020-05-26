import React, { Component } from 'react';
 import a from '../../../image/a.jpg'

class electronics extends Component {
    render() {
        return (
            <div class="carousel2 row">
                <div class="col-lg-5 row listitem"> 
                    <div class="col-lg-6 ">
                        <ul >
                            <li class="heading"> Top Categories </li>

                            <li>Cell Phone & Accessories</li>
                            <li>Smart Watches</li>
                            <li>
                                Video Games & Aaccessories
                         </li>
                            <li>Computers & Tablets</li>
                            <li>Digital Cameras & Photo</li>
                            <li>Camera Drones</li>
                            <li>Deals</li>
                        </ul>
                    </div>
                    <div class="col-lg-6 ">
                        <ul >
                            <li class="heading"> Other Categories </li>

                            <li>iphones</li>
                            <li>Sumsung</li>
                            <li>
                               Portable Audio & Headphones
                         </li>
                            <li>TV,Video & Home Audio</li>
                            <li>Vehicle Electronics & Gps</li>
                            <li>Smart Homes</li>
                            
                        </ul>
                    </div>
                  
                </div>
                <div class="col-lg-7 sli ">
                <img src={a} class=" img-responsive" alt="..." width="100%" height="100%"/>

                </div>
            </div>
        );
    }
}

export default electronics;