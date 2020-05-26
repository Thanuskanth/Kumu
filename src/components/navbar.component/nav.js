import React, { Component } from 'react';
import Electronics from '../navbar.component/navComponents/electronics';
import Slider from '../slider.component';
import Fashion from '../navbar.component/navComponents/fashion';
import Health from '../navbar.component/navComponents/health';
import Motors from '../navbar.component/navComponents/motors';
import Sports from '../navbar.component/navComponents/sports';
import Deals from '../navbar.component/navComponents/deals';
import Garden from '../navbar.component/navComponents/garden';

class nav extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHoverElectronics = this.handleMouseHoverElectronics.bind(this);
    this.handleMouseHoverFashion = this.handleMouseHoverFashion.bind(this);
    this.handleMouseHoverHealth = this.handleMouseHoverHealth.bind(this);
    this.handleMouseHoverMotors = this.handleMouseHoverMotors.bind(this);
    this.handleMouseHoversports = this.handleMouseHoversports.bind(this);
    this.handleMouseHoverDeals = this.handleMouseHoverDeals.bind(this);
    this.handleMouseHoverGarden = this.handleMouseHoverGarden.bind(this);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      Electronics: false,
      Fashion: false,
      Health: false,
      Motors: false,
      sports: false,
      Deals: false,
      Garden: false,
    };
  }

  handleMouseHoverHealth() {
    this.setState(this.toggleHoverStateHealth);
  } 
  handleMouseHoverMotors() {
    this.setState(this.toggleHoverStateMotors);
  }
   handleMouseHoversports() {
    this.setState(this.toggleHoverStatesports);
  }
   handleMouseHoverDeals() {
    this.setState(this.toggleHoverStateDeals);
  }
   handleMouseHoverGarden() {
    this.setState(this.toggleHoverStateGarden);
  }
   handleMouseHoverElectronics() {
    this.setState(this.toggleHoverState);
  }
  handleMouseHoverFashion() {
    this.setState(this.toggleHoverStateFashion);
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
     
      Fashion: false,
      Health: false,
      Motors: false,
      sports: false,
      Deals: false,
      Garden: false,
    };
  }
  toggleHoverState(state) {
    return {
      Electronics: !state.Electronics,
    };
  }
  
  toggleHoverStateHealth(state) {

    return {
      Health: !state.Health,
    };
  }
  
  toggleHoverStateMotors(state) {

    return {
      Motors: !state.Motors,
    };
  }
  
  toggleHoverStatesports(state) {
    
    return {
      sports: !state.sports,
    };
  }
  
  toggleHoverStateDeals(state) {
    return {
      Deals: !state.Deals,
    };
  }
  
  toggleHoverStateGarden(state) {
    return {
      Garden: !state.Garden,
    };
  }

  toggleHoverStateFashion(state) {
    return {
      Fashion: !state.Fashion,
    };
  }

  render() {
    return (
      <div class="head "  >
        <hr  />

        <ul class="navhead" >
          <li  >Home</li>
          <li onMouseEnter={this.handleMouseHoverElectronics}  
           >Electronics</li>
          <li onMouseEnter={this.handleMouseHoverFashion}
            >Fashion</li>
          <li onMouseEnter={this.handleMouseHoverHealth}
           >Health & Beauty</li>
          <li onMouseEnter={this.handleMouseHoverMotors}
         >Motors</li>
          <li onMouseEnter={this.handleMouseHoversports}
         >sports</li>
          <li onMouseEnter={this.handleMouseHoverDeals}
         >Deals</li>
          <li onMouseEnter={this.handleMouseHoverGarden}
         >Home & Garden</li>
        </ul>

        <hr />


        {this.state.Electronics ? <div onMouseLeave={this.handleMouseHoverElectronics}><Electronics /></div>:"" }
        {this.state.Fashion  ?  <div  onMouseLeave={this.handleMouseHoverFashion}><Fashion /></div>:""}
        {this.state.Health  ? <div   onMouseLeave={this.handleMouseHoverHealth}> <Health /></div>:""}
        {this.state.Motors  ? <div   onMouseLeave={this.handleMouseHoverMotors}> <Motors /></div>:""}
        {this.state.sports  ? <div   onMouseLeave={this.handleMouseHoversports}> <Sports /></div>:""}
        {this.state.Deals  ?  <div   onMouseLeave={this.handleMouseHoverDeals}><Deals /></div>:""}
        {this.state.Garden  ?  <div  onMouseLeave={this.handleMouseHoverGarden}><Garden /></div>:""}

        {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" id="Electronics-tab" data-toggle="tab" href="#Electronics" role="tab" aria-controls="Electronics" aria-selected="true">Electronics</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Fashion" role="tab" aria-controls="contact" aria-selected="false">Fashion</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="#Health" role="tab" aria-controls="home" aria-selected="false">Health & Beauty</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Motors" role="tab" aria-controls="profile" aria-selected="false">Motors</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#sports" role="tab" aria-controls="contact" aria-selected="false">sports</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Deals" role="tab" aria-controls="profile" aria-selected="false">Deals</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Garden" role="tab" aria-controls="contact" aria-selected="false">Home & Garden</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab"><Slider/></div>
  <div class="tab-pane fade show active" id="Electronics" role="tabpanel" aria-labelledby="Electronics-tab"><Electronics/></div>
  <div class="tab-pane fade" id="Fashion" role="tabpanel" aria-labelledby="contact-tab">.ghsjsan, v..</div>
</div> */}

      </div>

    );
  }
}

export default nav;