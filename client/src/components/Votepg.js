import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import './votepg.css';


const Voting = () => {
    return(
        <div className="votingForm">
            <div class="header">
                <h1 class="title">G5 Voting</h1>
                <nav class="navbar">
                    <ul class="navlist">
                        <li class="navitem"></li>
                    </ul>
                </nav>
            </div>

            <div class="voteContainer">
                <article class="vote">
                    <div class="vote-content">
                        <p class="vote-text"></p>
                        <p class="vote-description"></p>
                    </div>
                    <div class="vote-decision">
                        <button type="yes">Yes</button>
                        <button type="no">No</button>
                    </div>
                </article>
            </div>
        </div>
    );
}