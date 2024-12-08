import docker from '../assets/docker.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.png'
const projects = [
    {
      id: 1,
      title: "CKRooms",
      description: "This is a smart room reservation application to user can book rooms with secure payments and admin can creates rooms",
      technologies: ["React", "Node.js", "MongoDB"],
      image: docker, // Replace with your image URL
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "CI CD Pipeline",
      description: "CI CD Pipeline to automate and Containerize nodejs application and Push to Dockerhub using Github actions.",
      technologies: ["Docker", "Github actions", "Dockerhub","Nodejs"],
      image: project2, // Replace with your image URL
      link: "https://example.com/project2",
    },
    {
        id: 3,
        title: "Smart Watch Price Prediction Model",
        description: "trained the ml model using Decision Tree and Random forest algorithms.",
        technologies: ["Jupyter Notebook", "Python", "Machine Learning"],
        image: project3, // Replace with your image URL
        link: "https://example.com/project2",
      },
     
  ]
  export default projects