import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function All() {
    var img=require('./h.mp4');
    var demp=require('./demo.png');
    console.log(img);
    return (
      <div>
        <header>
          <div className="overlay"></div>
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src={img.default} type="video/mp4"/>
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
              <div className="intro-body">
              <h1 className="intro-title mb-4 animate__zoomIn animate__animated"><span className="color-b">GREEN</span> WORLD</h1>
              <p className="intro-title-top">LETS GO GREEN TOGETHER!</p>
              </div>
              </div>
            </div>
          </div>
        </header>
        <section className="property-grid grid" style={{marginTop:"2rem"}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card-box-a card-shadow">
                  <div className="img-box-a">
                    <img src={demp.default}  className="img-a img-fluid"/>
                  </div>
                  <div className="card-overlay">
                    <div className="card-overlay-a-content">
                      <div className="card-header-a">
                        <h2 className="card-title-a">
                          <Link href="#">Demo Product
                            </Link>
                        </h2>
                      </div>
                      <div className="card-body-a">
                        <div className="price-box d-flex">
                          <span className="price-a">Price | Rs 12.000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      </div>

      
        
    );
}
export default All;
