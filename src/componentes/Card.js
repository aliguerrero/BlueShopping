import React from 'react';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/b.png';
import './css/card.css';

class Card extends React.Component {
  render() {
    return (
    <div className="contenedor-card">
      <h1 className="text-center">Encuentra las mejores ofertas</h1>
      <div className="card-columns">
        <div className="card bg-dark text-light">
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title that wraps to a new line</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="card p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card bg-warning">
          <img src={img2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card text-white text-center p-3 cardCentral">
          <blockquote className="blockquote mb-0 Blu">
            <img src={img4} className="" alt="..." width="90px" height="90px" />
              lue Shopping
            <footer className="blockquote-footer text-white">
            </footer>
          </blockquote>
        </div>
        <div className="card text-center bg-info">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src={img3} className="card-img-top" alt="..." />
        </div>
        <div className="card p-3 text-right">
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div className="card bg-danger text-light">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
      
    );
  }
}
export default Card;