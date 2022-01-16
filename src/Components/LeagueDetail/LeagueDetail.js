import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../LeagueData/LeagueData.json';
import MediaControlCard from '../MUIComponents/MediaControlCard';
import './LeagueDetail.css';

const LeagueDetail = () => {

    const { id } = useParams();
    const details = Detail.filter(detail => detail.id === id)  // "thesportsdb" website ta onader api gulo paid kore dise tai okhan theke fetch korte pari nai. Nije nije ekta fake api banaisi. Tai onek jaygay name er sathe data er match paben na. I,m really sorry for that. 
    const { logo } = details[0];

    return (
        <>
            <div className="banner">
                <div className="logo">
                    <img src={logo} />
                </div>
            </div><br />
            <div className="info-container">
                <MediaControlCard detail={details} />
                <div className="habijabi">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempore, ipsam error quas maiores minus! Vel nam possimus, voluptas quo assumenda atque. Dolore ducimus molestiae illo consectetur. Voluptates, voluptatum. Perspiciatis quia quos consequatur, illum quisquam explicabo libero. Aut beatae ipsam nam unde, dolorum accusamus? Rem et numquam officia culpa possimus?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur recusandae ab esse neque consectetur voluptatibus ad molestiae, harum accusamus assumenda eius laborum explicabo et! Ratione eaque nulla dolores quas, nostrum hic laudantium cupiditate eum repellat maiores labore repellendus vel porro reiciendis in esse deserunt iusto voluptates. Neque dolor odio suscipit.</p>
                </div>
            </div>
        </>
    );
};

export default LeagueDetail;
