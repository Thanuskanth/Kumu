import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

class index extends Component {
    render() {
        return (
            <div >



                <nav class="navbar navbar-light bg-light">
                  
                    <div class=" logo col-lg-3 col-md-2  col-sm-3 col-xs-12">
                    <a class="navbar-brand  ">KUMU</a>
                    </div>
                   
                    <div class="input-group searchbar col-lg-6 col-md-6 col-sm-6 col-xs-8">
                        <input type="text" class="form-control" placeholder="Search your item here....." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append " >
                            <span class="input-group-text search" >search</span>
                        </div>
                    </div>
                   
                    <div class="cart col-lg-1 col-md-2  col-sm-3 col-xs-4">
                               
                         
                        <FaShoppingCart size="2em" color=" #232f3e"/>
                    </div>
                    <div class="signup col-lg-2  col-md-2 ">

                        <a href="#">Login</a> <p class="login">or </p> <a href="#"> Register</a>
                    </div>
                  
                </nav>
            </div>
        );
    }
}

export default index;