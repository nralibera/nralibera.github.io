import React, { Component } from 'react';
import profile from '../../ressources/images/me.jpg'
import LogoNameBlock from '../LogoNameBlock/LogoNameBlock'
import CV from '../../ressources/CV_august_2022_ralibera.pdf'
import Experience from '../Experience/Experience'
import { Link } from 'react-router-dom';
import './About.css';


const bgColorOne = "#002244"
const bgColorTwo = "#1D2951"

const exp1 = {
    "title": "Student research project - INL/LIRIS Labs",
    "subject": "Artificial Intelligence for the diagnosis of integrated electronic circuits",
    "date": "Sept 2021 - April 2022",
    "place": "Lyon, France",
    "descriptionList": ["Creation of a database from circuit simulation.",
        "Implementation and assessment of ML models to detect faults",
        "Use of clustering and a CNN hierarchical scheme"],
    "logo": "liris"
}


const exp2 = {
    "title": "Research Internship - Accenture Labs",
    "subject": "Development of a de-identification guide framework for Data Privacy",
    "date": "May - Oct 2022",
    "place": "Sophia Antipolis, France",
    "descriptionList": ["Update on regulations on data privacy around the world.",
        "State-of-the-art of de-identification techniques including pseudonymization, privacy models, synthetic data and differential privacy.",
        "Building, training and patenting a end-to-end de-identification guide framework.",
        "Development of a web-based demo."],
    "logo": "accenture"
}


const exp3 = {
    "title": "Research Internship - Dassault Systèmes",
    "subject": "R&D on Geological Fault Detection using Deep Learning",
    "date": "Nov 2022 - May 2022",
    "place": "Aix-en-Provence, France",
    "descriptionList": ["State-of-the-art on the subject and related fields: U-net, image segmentation, highly unbalanced classes segmentation",
        "Development of a synthetic data generator and data processing",
        "Choice and test of the best technique taking into account the different constraints (implementation of loss function and adapted metrics)"],
    "logo": "dassault"
}


const exp4 = {
    "title": " Apprenticeship - Natixis CIB",
    "subject": "Data developper : Improve data quality for Turing datalake",
    "date": "Sept 2023 - August 2024",
    "place": "Charenton-le-Pont, France",
    "descriptionList": ["Test API received from system provider.",
        "Participate in improvement of data quality."],
    "logo": "natixis"
}


const project3 = {
    "title": "Can you predict the tide ?",
    "subject": "Challenge Data by ENS",
    "date": "Jan - April 2022",
    "place": "Lyon, France",
    "description": "The goal of this project is to forecast the surge given a sea-level pressure of the last five days. \
            Several solutions were explored during this project. The first one is the combination of a PCA and a linear regression. \
            The second is a convLSTM using Tensorflow.The models were trained on a server equipped with Titan X graphics cards coupled with CUDA technology.",
    "logo": "challenge"
}
const project2 = {
    "title": <span><a target="_blank" href="http://introtodeeplearning.com/" > MIT 6.S191 Introduction to Deep Learning</a>  (Non-accredited course)</span>,
    "subject": <span> Several projects</span >,
    "date": "Sept 2021 - Dec 2021",
    "place": <span> Lyon, France </span>,
    "descriptionList": [<span> Music Generation using RNN </span>,
        <span>  Debiasing Facial Detection Systems :  through learning latent variables underlying face datasets,
            the facial detection model re-sample adaptatively the training data to mitigate bias.
            Paper is available <a target="_blank" href="https://dl.acm.org/doi/10.1145/3306618.3314243">here</a>.</span>,
    ],
    "logo": "introdeeplearning"
}


const project1 = {
    "title": "Voice conversion using Cycle GAN",
    "subject": "Side Project",
    "date": "Sept 2021 - Dec 2021",
    "place": "Lyon, France",
    "description": <span>
        This project includes the creation of a database of non-parallel voices of two Malagasy-speaking people and the training of the model for domain swapping
        using cycleGAN. The original paper is available <a target="_blank" href="https://ieeexplore.ieee.org/document/8682897">here</a> .
    </span>,
    "logo": "gan"
}

const project4 = {
    "title": <span><a target="_blank" href="https://nralibera.tech/Olympics_data_viz" > Olympics Journey</a> </span>,
    "subject": "Side Project",
    "date": "January 2024",
    "place": "Lyon, France",
    "description": <span>
        Build an interactive map which displays athletes journey through their paticipation in Olympic games (Summer and Winter) using D3 js. 
        Source Code <a target="_blank" href="https://github.com/nralibera/Olympics_data_viz">here</a> .
    </span>,
    "logo": "olympics"
}


class About extends Component {

    render() {

        return (
            <div className="contentAbout" >
                <div className="first-block" >
                    <div className="portrait-container">
                        <img className="portrait" src={profile} alt="Photo of Nanto" />
                    </div>
                    
                    <div className="hello-container">
                        <h1 > Hi there !</h1>
                        <p className="presentation-paragraph">
                            Thanks for stopping by. My name is Nanto. I am originally from Madagascar.
                            I left my big island (bigger than metropolitan France in surface) at the age of 18 in 2017.
                            Since then, I have lived in Paris, Lyon and Sophia Antipolis.
                        </p>
                        <p className="presentation-paragraph">
                            I am currently an engineering student at the Ecole Centrale de Lyon. I'm in a gap year since April 2022.
                            Before entering ECL, I did a double degree in math and physics at the University of Paris-Est-Creteil.
                            I am interested in privacy preserving machine learning and data privacy.
                            If you have any interesting coolaborations, feel free to shout me out.
                        </p>
                        <p className="presentation-paragraph">
                            For almost 7 years, I am a photographer and graphic designer in my spare time.
                            What I like is to immortalize my travels and make people feeling emotions through photos.
                            Plus, I create graphic identity and event posters when friends and family kindly ask me.
                            I invite you to see my work <Link to={"/Work"}>here</Link>.
                        </p>
                    </div>

                    

                </div>

                <div className="standard-block">
                    <div className="block-title"> <h1 > Experience </h1></div>
                    <Experience element={exp4} place="left" bg={bgColorOne }/>
                    <Experience element={exp3} place="right" bg={bgColorTwo} />
                    <Experience element={exp2} place="left" bg={bgColorOne }/>
                    <Experience element={exp1} place="right" bg={bgColorTwo} />
                </div>

                <div className="standard-block">
                    <div className="block-title"><h1 > Projects </h1></div>
                    <Experience element={project4} place="right" bg={bgColorTwo} />
                    <Experience element={project3} place="left" bg={bgColorOne} />
                    <Experience element={project2} place="right" bg={bgColorTwo} />
                    <Experience element={project1} place="left" bg={bgColorTwo} />
                </div>


                <div className="standard-block">
                    <div className="block-title" ><h1>Skills</h1> </div>
                    <LogoNameBlock nameList={["Python", "Matlab", "Javascript", "HTML", "CSS"]} title="Programming  Languages" />
                    <LogoNameBlock nameList={["ReactJS", "Flask", "Git", "Docker", "Jupyter","Linux"]} title="Frameworks  &  Tools" />
                    <LogoNameBlock nameList={["TensorFlow", "Scikit-learn", "Matplotlib", "Pandas", "Numpy"]} title="Libraries" />
                    <LogoNameBlock nameList={["Photoshop", "Illustrator", "Lightroom", "Canva", "Indesign"]} title="Graphics" />
                    <LogoNameBlock nameList={["English","French","Malagasy","Spanish"]} title="Languages" />
                </div>

                <div className="standard-block" style={{alignItems: "center"} }>
                    <a className="download-button" href={CV} download>
                        <div> Download my Resume </div>
                    </a>
                </div>
                
            </div>
        );

    };
}

export default About;