import React from 'react';
import DinoGame from '../DinoGame.js';

const Home = () => {
    return (  
        <div className="home">
            <DinoGame />
            <div class="content">
                <div class="container">
                    <p class="description">
                        Lucile is someone that constantly strive for personal growth and self-reflection. She is passionate about game development and loves learning new things.
                    </p>
                </div>
                <div class="container">
                    <a href="/projects" class="link">Projects ➤</a>
                </div>
            </div>
        </div>
    );
}
 
export default Home;