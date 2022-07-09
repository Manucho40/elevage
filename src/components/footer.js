import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faTwitterSquare, faInstagramSquare, faWhatsappSquare} from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div class="container-fluid">
        
          <footer class="text-white text-center text-lg-start" style={{backgroundColor: "#23242a"}}>
            <div class="container p-4">
              <div class="row mt-4">
                <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                  <h5 class="text-uppercase mb-4">NOTRE STRUCTURE</h5>
        
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti.
                  </p>
        
                  <p>
                    Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                    molestias.
                  </p>
        
                  <div class="mt-4">
                    <a href='#' type="button" class="btn btn-floating btn-light btn-lg m-1"><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></a>
                    <a href='#' type="button" class="btn btn-floating btn-light btn-lg m-1"><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></a>
                    <a href='#' type="button" class="btn btn-floating btn-light btn-lg m-1"><FontAwesomeIcon icon={faInstagramSquare} size="2x"/></a>
                    <a href='#' type="button" class="btn btn-floating btn-light btn-lg m-1"><FontAwesomeIcon icon={faWhatsappSquare} size="2x"/></a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase mb-4">Contactez - Nous</h5>
                  <ul class="fa-ul" style={{marginLeft: "1.65em"}}>
                    <li class="mb-3">
                      <span class="fa-li"><FontAwesomeIcon  icon={faHouse}/></span><span class="ms-2">Cocody 06 BP 1051</span>
                    </li>
                    <li class="mb-3">
                      <span class="fa-li"><FontAwesomeIcon  icon={faEnvelope}/></span><span class="ms-2">info@example.com</span>
                    </li>
                    <li class="mb-3">
                      <span class="fa-li"><FontAwesomeIcon  icon={faPhone}/></span><span class="ms-2">(+225) 27 20 30 56 13</span>
                    </li>
                    <li class="mb-3">
                      <span class="fa-li"><FontAwesomeIcon  icon={faPrint}/></span><span class="ms-2">(+225) 27 20 30 56 13</span>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase mb-4">Heures d'ouvertures</h5>
        
                  <table class="table text-center text-white">
                    <tbody class="font-weight-normal">
                      <tr>
                        <td>Mon - Thu:</td>
                        <td>8am - 9pm</td>
                      </tr>
                      <tr>
                        <td>Fri - Sat:</td>
                        <td>8am - 1am</td>
                      </tr>
                      <tr>
                        <td>Sunday:</td>
                        <td>9am - 10pm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
              © 2020 Copyright:
              <a class="text-white" href="https://mdbootstrap.com/">lorem</a>
            </div>
          </footer>
          
        </div>
    )
}

export default Footer;
