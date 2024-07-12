import React from "react";
import "./tramite.css";

function Tramite({ precio, titulo, descripcion, pasos }) {
  return (
    <section >
      <div class="plan">
        <div class="inner">
          <span class="pricing">
            <span>S/. {precio}</span>
          </span>
          <p class="title">{titulo}</p>
          <p class="info">{descripcion}</p>

          {pasos.map((paso, index) => (
            <div key={index}>
              <ul class="features">
                <li>
                  <span class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        fill="currentColor"
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      ></path>
                    </svg>
                  </span>
                  <span>{paso}</span>
                </li>
              </ul>
            </div>
          ))}

          <div class="action">
            <a class="button" href="#">
              Tramitar ya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tramite;
