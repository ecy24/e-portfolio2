import { v4 as uuidv4 } from "uuid";

const projectsData = [
  {
    id: uuidv4(),
    name: "System Engineering Project",
    image: require("../assets/projects-img/classAttenderBot.jpg"),
    description: `Development of an innovative solution within the food industry. This project focuses on looking at the a given product and looking at the different stakeholder needs, function of the product and newly conceived concept to build and enhanced prototype of the current existing product.`,
    technology: [
      { id: uuidv4(), name: "Concept Definition" },
      { id: uuidv4(), name: "System Definition" },
      { id: uuidv4(), name: "System Realization" },
      { id: uuidv4(), name: "Project Management" },
    ],
    link: "https://github.com/javier-arango/class-attender-bot",
  },
];

export default projectsData;
