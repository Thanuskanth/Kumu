import React, { Component } from 'react';
import a from '../../../image/a.jpg'

class deals extends Component {
    render() {
        return (
            <div class="carousel2 row">
            <div class="col-lg-5 row listitem"> 
                <div class="col-lg-6 ">
                    <ul >
                        <li class="heading"> Top Categories </li>

                        <li>Daily Deals</li>
                        <li>Tech Deals</li>
                        <li>
                          Fashion Deals
                     </li>
                        <li>Health and Beauty Deals</li>
                        <li>Home and Garden deals</li>
                        <li>Sporting Goods deals</li>
                    </ul>
                </div>
                <div class="col-lg-6 ">
                    <ul >
                        <li class="heading"> Other Categories </li>

                        <li>Cellphone deals</li>
                        <li>Camera Deals</li>
                        <li>
                          Watches deals
                     </li>
                        <li>Jewelry Deals</li>
                        <li>Free Shippings</li>
                        
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

export default deals;