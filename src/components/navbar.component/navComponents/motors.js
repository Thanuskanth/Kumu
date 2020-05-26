import React, { Component } from 'react';
import a from '../../../image/a.jpg'

class motors extends Component {
    render() {
        return (
            <div class="carousel2 row">
            <div class="col-lg-5 row listitem"> 
                <div class="col-lg-6 ">
                    <ul >
                        <li class="heading"> Top Categories </li>

                        <li>Women's Clothing</li>
                        <li>Women's Shoes</li>
                        <li>
                           men's Clothing
                     </li>
                        <li>Men's Shoes</li>
                        <li>Watches,Parts and Accessories</li>
                        <li>Deals</li>
                    </ul>
                </div>
                <div class="col-lg-6 ">
                    <ul >
                        <li class="heading"> Other Categories </li>

                        <li>Fine Jewelry</li>
                        <li>Fashion Jewelry</li>
                        <li>
                           Men's Accessories
                     </li>
                        <li>Women's Handbags & Bags</li>
                        <li>Kid's clothing Shoes & accessories</li>
                        
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

export default motors;