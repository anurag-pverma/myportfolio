import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 150px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  {
    img: "https://camo.githubusercontent.com/3b918e247b0c79fc78b7fd6da0e5d2f2521b917f160da34268243d9278f5e34b/68747470733a2f2f692e6962622e636f2f6e77525a43547a2f332e706e67",
    title: "SugarCosmetics",
    description: "E-Commerce shop",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MaterialUI",
      "Node",
      "Express",
      "MongoDB",
    ],
    repoLink: "https://github.com/goutham41/sugarcosmetics-app-clone",
    demoLink: "https://sugarcosmetics-clone.netlify.app",
    type: "Group project",
    blogLink: "#",
    features: [
      "Signup and Login.",
      "A user can add a product to cart or to wishlist.",
      "A user can sort and filter.",
      "A user can order by filling in the required details",
      "Orders history can be viewer in profile page",
      "User can search product"
    ],
  },
  // second project 
  {
    img: "https://github.com/anurag-pverma/personal/blob/main/ideakart-image.png?raw=true",
    title: "Ideakart.com",
    description: "Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "NextJs",
      "Node",
      "Express",
      "MongoDB",
    ],
    repoLink: "https://github.com/anurag-pverma/Ideakart.com",
    demoLink: "https://ideakart.netlify.app/",
    type: "Solo project",
    blogLink: "#",
    features: [
      "Beautiful Homepage with product list",
      "Signup and Login.",
      "User Can search books",
      "Users can can read the book and buy ",
      "Contact page",
    
    ],
    responsibilities: [
      "Home page ",
      "SignUp and Login page",
      "Contact page",
    ],
  },
  // third project 
  {
    img: "https://github.com/anurag-pverma/personal/blob/main/Screenshot%20(122).png?raw=true",
    title: "Hotstar-clone",
    description: "Clone of hotstar movie app where user can check movies related information search according to own querry",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    
     
    ],
    repoLink: "https://github.com/anurag-pverma/MovieApp",
    demoLink: "https://horror-start.netlify.app/",
    type: "Solo project",
    blogLink: "#",
    features: [
      "Beautiful Homepage with product list",
      
      "User Can search Movie according to movie name",
      "Users can can read movie information ",
     
    
    ],
    responsibilities: [
      "Home page ",
      "Seach bar",
      "Design",
    ],
  },
  {
    img: "https://github.com/iamdebobrota/Timecamp-Clone/raw/main/screenshots/timecamp1.png",
    title: "Clone-TimeCamp",
    description: "TimeCamp is a simple, yet feature-rich time tracking app to help you gain insights into yourprojects and tasks",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
    
     
    ],
    repoLink: "https://github.com/iamdebobrota/Timecamp-Clone",
    demoLink: "https://timecamp.vercel.app/",
    type: "Group Project",
    blogLink: "#",
    features: [
      "Beautiful Homepage with  Feature , Pricing Blog & Login SignUp Section",
      
      "User can login/ Signup and perform some task",
      "Users can  see the time and manage the time",
     
    
    ],
    responsibilities: [
      "User Task Page",
      "Tag",
      "User , Projects",
    ],
  },



  
 
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
