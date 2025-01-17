import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.png'
const projects = [
    {
      id: 1,
      title: "ChaniduDev",
      description: "Personal Portfolio to showcase my skills and projects",
      technologies: ["React", "Tailwind CSS", "Email.js","Framer Motion","Vercel", "Github Actions"],
      image: project1, 
      link: "https://github.com/Chanidu26/ChaniduDev",
    },
    {
      id: 2,
      title: "CI CD Pipeline",
      description: "CI CD Pipeline to automate and Containerize nodejs application and Push to Dockerhub using Github actions.",
      technologies: ["Docker", "Github actions", "Dockerhub","Nodejs"],
      image: project2, 
      link: "https://github.com/Chanidu26/docker-ci-automation-github-actions",
    },
    {
      id: 3,
      title: "Loan Approval Prediction Model",
      description: "Trained the ML model using SVM and Logistic Regression. Get Accuracy perfromance of 94%(SVM) and 91%(Logistic Regression",
      technologies: ["Jupyter Notebook", "Python", "Machine Learning"],
      image: project3, 
      link: "https://github.com/Chanidu26/Loan_Approval_Prediction",
    },
    
  ]
  export default projects