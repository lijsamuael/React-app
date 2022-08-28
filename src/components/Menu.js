import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            developers: [
                {
                    id: 1,
                    name: "Samuael Ketema",
                    image: './assets/images/sami.jpg',
                    role: "Project Manager",
                    description: "A software engineer, who has experience on fullstack development, mobild development and machine learning."
                },
                {
                    id: 2,
                    name: "Abrham Tafere",
                    image: './assets/images/sami.jpg',
                    role: "Frontend Developer",
                    description: "A software engineer, who has experience on fullstack development, mobild development and machine learning."
                },
                {
                    id: 3,
                    name: "Zemariam Mekuria",
                    image: './assets/images/sami.jpg',
                    role: "Backend Developer",
                    description: "A software engineer, who has experience on fullstack development, mobild development and machine learning."
                }

            ]
        };
    }
    render() {
            const menu = this.state.developers.map((developer) =>{
                return (
                    <div key={developer.id} className=" mt-5">
                        <Media tag="li">
                            <Media left middle>
                                <Media object src={developer.image} alt={developer.name} height="100px" />
                            </Media>
                            <Media body className="ml-5">
                                <Media heading>{developer.name}</Media>
                                <Media > {developer.role} </Media>
                                <p>{developer.description}</p>
                            </Media>
                        </Media>
                     </div>
                );
            });

            return (
            <div className='container'>
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
        }
        
    
}

export default Menu;