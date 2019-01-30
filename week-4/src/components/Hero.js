import React from 'react';

const Hero = props => (
  <section className="hero">
    <h1 className="hero-title" onClick={props.changeTitle}> {props.title} </h1>
  </section>
);

export default Hero;