import React from 'react'
import {Button} from 'react-bootstrap';
import background from "../../assets/img/background_header.jpg"
export default function Accueil() {
    return (
        <>
             <div className="headerDown" style={{ backgroundImage: `url(${background})` }}>                
                        <h1>Des Produits Naturels Sains</h1>
                        <Button variant="outline-warning">Voir tous nos produits</Button>
             </div>
             {/* <div className="welcome">
                <div className="welcomeText">
                    <h1>BIENVENUE DANS NOTRE</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis et iusto, ducimus aliquid labore maxime vitae rerum earum in eveniet, autem magni dolorem. Libero, illo. Soluta cupiditate aperiam corrupti inventore.</p>
                </div>
                <div className="welcomeImg">
                     <img src={require("../../assets/img/cow.png")} alt="" />
                </div>
             </div> */}
        
        </>
    )
}
