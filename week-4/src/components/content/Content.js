import React from 'react';
import ContentBoxs from './ContentBoxs';
import ContentTitle from './ContentTitle';

const Content = props => (

  <section className="content">
    <div className="container">
      <ContentTitle />
      <ContentBoxs />
      <div className="row">
        <div className="col-12 d-justify-content-center">
          <button className="callBtn" onClick={props.changeShowBoxs}>Call to Action</button>
        </div>
      </div>
      {props.showContentStatus ? <ContentBoxs /> : null }
    </div>
  </section>
);

export default Content;