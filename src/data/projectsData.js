import { v4 as uuidv4 } from "uuid";

const projectsData = [
  {
    id: uuidv4(),
    name: "System Engineering Project",
    image: require("../assets/projects-img/classAttenderBot.jpg"),
    description: `Development of an innovative solution within the food industry. This project focuses on looking at the a given product and looking at the different stakeholder needs, function of the product and newly conceived concept to build and enhanced prototype of the current existing product. For this project, I contributed by looking at different domains to see if this is any new ideas which our team can make use to come up with a good solution for our problem/oppotunity. We also discussed how feasible our solution are based on our limited budget and resource as a team based on the different research data that we have.`,
    technology: [
      { id: uuidv4(), name: "System Engineering" },
      { id: uuidv4(), name: "Project Management" },
      { id: uuidv4(), name: "Software Engineering" },
      { id: uuidv4(), name: "Electrical & Electronic Engineering" },
      { id: uuidv4(), name: "Mechanical Engineering" },
    ],
    link: "https://github.com/ecy24/e-portfolio",
  },
];

export default projectsData;
