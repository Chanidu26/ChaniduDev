import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.jpg'
const projects = [
    {
      id: 1,
      title: "ChaniduDev",
      description: "Personal Portfolio website to showcase my skills and projects.",
      technologies: ["React", "Tailwind CSS", "Email.js","Framer Motion","Vercel", "Github Actions"],
      image: project1, 
      link: "https://github.com/Chanidu26/ChaniduDev",
    },
    {
      id: 2,
      title: "DevOps Pipeline",
      description: "CI CD Pipeline to automate and Containerize nodejs application and Push to Dockerhub using Github actions.",
      technologies: ["Docker", "Github Actions", "Dockerhub","Nodejs"],
      image: project2, 
      link: "https://github.com/Chanidu26/docker-ci-automation-github-actions",
    },
    {
      id: 3,
      title: "Loan Approval Prediction Model",
      description: "ML Model to predict loan approval outcomes using SVM and Logistic Regression. Accuracy 94%(SVM), 91%(Logistic Regression), Deployed to AWS through MLOps.",
      technologies: ["Jupyter Notebook", "Python", "Machine Learning","MLOps"],
      image: project3, 
      link: "https://github.com/Chanidu26/Loan_Approval_Prediction",
    },
    {
      id: 4,
      title: "Volunteer Management Database System",
      description: "Database System to manage volunteers and events efficiently. Created using Database Management Operations",
      technologies: ["MySQL", "DBMS"],
      image: project4, 
      link: "https://github.com/Chanidu26/Volunteer-Management-Database-System-Group-Project-MySQL-",
    },
    
  ]
  export default projects