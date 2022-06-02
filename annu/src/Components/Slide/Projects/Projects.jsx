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
  /* background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor}; */

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
    img: "https://github.com/anurag-pverma/personal/blob/main/Screenshot%20(90).png?raw=true",
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
