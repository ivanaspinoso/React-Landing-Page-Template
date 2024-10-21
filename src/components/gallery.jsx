import { Link } from "react-router-dom";
import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center" style={{ backgroundColor: '#f6f6f6' }}>
      <div className="container">
        <div className="section-title">
          <h2>Nuestros servicios</h2>
          <p>
            Proveemos una gama completa de soluciones de seguros para proteger lo que más importa.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <Link to={`/services/${d.id}`} style={{ textDecoration: 'none' }} key={`${d.title}-${i}`}>
                  <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4 image-container">
                    <Image title={d.title} image={d.image} />
                    <div className="mobile-only-title-overlay">
                      {d.title}
                    </div>
                  </div>
                </Link>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>

      <style>
        {`
         
          @media only screen and (max-width: 768px) {
            .mobile-only-title-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: rgba(0, 0, 0, 0.7); 
              color: #fff;
              font-size: 14px;
              font-weight: 600;
              padding: 10px;
              text-align: center;
              display: block;
            }

            .image-container {
              position: relative;
              margin-bottom: 20px; /* Aumenta el espaciado entre las imágenes */
            }
          }

          @media only screen and (min-width: 769px) {
            .mobile-only-title-overlay {
              display: none; 
            }
          }
        `}
      </style>
    </div>
  );
};
