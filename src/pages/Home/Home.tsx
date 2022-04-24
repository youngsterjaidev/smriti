import React from 'react';
import { Navbar, Footer } from '../../components';
import './Home.css';

const dummyData = ['read', 'read', 'read', 'read', 'read', 'read', 'read'];

export const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="heading">
        <h1>Smrti Cottage</h1>
      </div>
      <div className="offers">
        <div>
          <div className="card">
            <h2>Popular Offers</h2>
            <ul className="horizontal-media-scoller">
              {dummyData.map((item) => {
                return (
                  <li>
                    <a href="#">
                      <figure>
                        <picture>
                          <img
                            alt="..."
                            loading="lazy"
                            src="https://picsum.photos/500/500?1"
                          />
                        </picture>
                        <figcaption>
                          Since the media scroller grid layout only specifies
                          direction and spacing, the sizing can change inside a
                          media query which feature checks for aspect-ratio
                          support. Progressive enhancement into some more
                          dynamic media scrollers.
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
