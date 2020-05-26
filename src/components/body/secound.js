import React, { Component } from 'react';
import a from '../../image/a.jpg'
import amazon from '../../image/amazon.jpg'
import asse from '../../image/asse.jpg'
import beauty from '../../image/beauty.jpg'
class index extends Component {
    render() {
        return (
            <div class="  my-4">
<ul class="titleforslide">
<li class="body-heading"> Rending Products</li>   
<li class="seemore"><a href="#">See More >>></a></li>
</ul>

<hr/>

                    <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                       

                        <ol class="carousel-indicators">
                            <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                            <li data-target="#multi-item-example" data-slide-to="1"></li>
                            <li data-target="#multi-item-example" data-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner" role="listbox">

                            <div class="carousel-item active">

                                <div class="row">
                                    <div class="col-md-3 ">
                                        <div class="">
                                            <img class="card-img-top" src={a}
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                 card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src={a}
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="carousel-item">

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src={amazon}
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="carousel-item">

                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 clearfix d-none d-md-block">
                                        <div class="card mb-2">
                                            <img class="card-img-top" src={asse}
                                                alt="Card image cap" />
                                            <div class="card-body">
                                                <h4 class="card-title">Card title</h4>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                                                <a class="btn btn-primary">Button</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
    
    
        </div>
        );
    }
}

export default index;