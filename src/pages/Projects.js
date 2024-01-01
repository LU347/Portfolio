import ttrImage from '../images/ttr.png';
import studyImage from '../images/studywithme.png';
import allfangsImage from '../images/allfangsondeck.png';
import botanicalImage from '../images/botanicalbuddies.png';

const Projects = () => {
    return ( 
        <div className="projects">
            <div class="container">
                <div class="project-grid-wrapper" id="project-list">
                    <div class="card">
                        <a href="https://study-at.vercel.app/"><img src={studyImage} alt="study with me"></img></a>
                        <div class="project-info">
                            <h4>Fall 2023</h4>
                            <h3>Study with Me</h3>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://github.com/NicoletteAL/All-Fangs-On-Deck"><img src={allfangsImage} alt="all fangs on deck"></img></a>
                        <div class="project-info">
                            <h4>Fall 2023</h4>
                            <h3>All Fangs on Deck</h3>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://github.com/LU347/Botanical-Buddies"><img src={botanicalImage} alt="botanical-buddies"></img></a>
                        <div class="project-info">
                            <h4>Fall 2023</h4>
                            <h3>Botanical Buddies</h3>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.roblox.com/games/13462285447/Teapot-Tycoon-Remastered-Alpha-v1-77"><img src={ttrImage} alt="teapot tycoon"></img></a>
                        <div class="project-info">
                            <h4>Summer 2023</h4>
                            <h3>Teapot Tycoon Remastered</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;