import ttrImage from '../images/ttr.png';

const Projects = () => {
    let component
    function handleClick(event) {
        var button = event.target;
        let projectContainer = window.document.getElementById("project-container");

        if (button.id === "classProjects") {
            projectContainer.innerHTML = "Class Projects:"
        } else if (button.id === "personalProjects") {
            projectContainer.innerHTML = "Personal projects:"
        }
    }
    return ( 
        <div className="projects">
            <div class="container">
                <div class="project-grid-wrapper">
                    <div class="card">
                        <a href="https://study-at.vercel.app/"><img src={ttrImage}></img></a>
                        <div class="gradient-overlay"></div>
                        <div class="project-info">
                            <h4>Fall 2023</h4>
                            <h3>Study with Me</h3>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://github.com/NicoletteAL/All-Fangs-On-Deck"><img src={ttrImage}></img></a>
                        <div class="gradient-overlay"></div>
                        <div class="project-info">
                            <h4>Fall 2023</h4>
                            <h3>All Fangs on Deck</h3>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.roblox.com/games/13462285447/Teapot-Tycoon-Remastered-Alpha-v1-77" target="_blank" rel="noopener noreferrer"><img src={ttrImage}></img></a>
                        <div class="gradient-overlay"></div>
                        <div class="project-info">
                            <h4>Fall 2023</h4>
                            <h3>Botanical Buddies</h3>
                        </div>
                    </div>
                    <div class="card">
                        <a href="https://www.roblox.com/games/13462285447/Teapot-Tycoon-Remastered-Alpha-v1-77" target="_blank" rel="noopener noreferrer"><img src={ttrImage}></img></a>
                        <div class="gradient-overlay"></div>
                        <div class="project-info">
                            <h4>SUMMER 2023</h4>
                            <h3>Teapot Tycoon Remastered</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;