import React, {  useState } from "react";

import Navbar from '../Navbar/Navbar';
function Ourscience(){
    const [About, setAbout] = useState(false);
    const [Intimations, setIntimations] = useState(false);
    const [Abstracts, setAbstracts] = useState(false);
    const [Devices, setDevices] = useState(false);
    const [Milesstones, setMilestones] = useState(false);
    return (
        <div>
         <Navbar/>
            <main>
            {
            About && (
                <div >
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? </p>
                </div>
            )
        }
        {
            Intimations && (
                <div>
                    <h3>Intimations</h3>
                    <p> nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur. </p>
                </div>
            )
        }
        {
            Abstracts && (
                <div>
                    <h3>Abstracts</h3>
                    <p>Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur. </p>
                </div>
            )
        }
        {
            Devices && (
                <div>
                    <h3>Devices</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
            )
        }
        {
            Milesstones && (
                <div>
                    <h3>Milesstones</h3>
                    <p>  non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur.</p>
                </div>
            )
        }
                <div >
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setAbout(!About);
                      setIntimations(false);
                      setAbstracts(false);
                      setDevices(false);
                      setMilestones(false);
                    }}>
                        About
                    </button>
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(!Intimations);
                      setAbout(false);
                      setAbstracts(false);
                      setDevices(false);
                      setMilestones(false);
                    }}>
                        Intimations
                    </button>
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(false);
                      setAbout(false);
                      setAbstracts(!Abstracts);
                      setDevices(false);
                      setMilestones(false);
                    }}>
                        Abstracts
                    </button>
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(false);
                      setAbout(false);
                      setAbstracts(false);
                      setDevices(!Devices);
                      setMilestones(false);
                    }}>
                        Devices
                    </button>
                    <button className="btn borderThick border-white  m-2  col"onClick={() => {
                      setIntimations(false);
                      setAbout(false);
                      setAbstracts(false);
                      setDevices(false);
                      setMilestones(!Milesstones);
                    }}>
                        Milestones
                    </button>
                </div>
            </main>
        </div>
    );
}
export default Ourscience;