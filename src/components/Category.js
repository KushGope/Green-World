import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Category=(props)=> {
    const name=props.match.params.id;
    var img=require('./h.mp4');
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
              <h1 className="intro-title mb-4 animate__zoomIn animate__animated">{name}</h1>
              <p className="intro-title-top">LETS GO GREEN TOGETHER!</p>
              </div>
              </div>
            </div>
          </div>
        </header>
      </div>
        
        
    );
};
export default Category;
