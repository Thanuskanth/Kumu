import React, { Component } from 'react';
import a from '../../image/a.jpg'
import amazon from '../../image/amazon.jpg'
import asse from '../../image/asse.jpg'
import beauty from '../../image/beauty.jpg'
class index extends Component {
    render() {
        return (
            <div>
               <div id="carouselExampleIndicators" class="carousel tk slide" data-ride="carousel" data-interval="4000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={a} class="d-block w-100 img-responsive" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={amazon} class="d-block w-100 img-responsive" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src= {asse} class="d-block w-100 img-responsive" alt="..."/>
    </div>
     <div class="carousel-item">
      <img src= {beauty} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div><hr/>

                        </div>
        );
    }
}

export default index;