import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import memories from "../../Assets/Projects/memories.png";
import gym from "../../Assets/Projects/gym-shark.png";
import minecraft from "../../Assets/Projects/minecraft.png";
// import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memories}
              isBlog={false}
              title="Memories App"
              description="This is my Final Project at Fullstack Bootcamp MERN Project Mobile Friendly. a project that anyone could share his memory/story and create a post about it. this way anyone can see each others posts ,can view like and comment on it."
              link="https://github.com/LOCO185/Memories-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym Shark App"
              description="I have always been passionate about fitness and coding. I wanted to create an App that can help people who want to get into fitness by browsing workouts and check the right form, you can pick and choose your workouts with two categories (men's/women's)."
              link="https://github.com/LOCO185/Gym-Shark-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minecraft}
              isBlog={false}
              title="2D Minecraft"
              description="a 2d look A like minecraft , built as a weekend project in Fullstack course.
              - start crafting with the specific tool , and build your own place.
              things I learned in this project :
              - creating HTML through JavaScript vanilla commands.
              - manipulate the DOM.
              - use pseudo code.
              - creating 2X2 matrix using two for loops.
              - media responsive for mobiles (Tilted Screen and regular)."
              link="https://github.com/LOCO185/Minecraft-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
