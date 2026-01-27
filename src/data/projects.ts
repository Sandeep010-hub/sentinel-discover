export interface Project {
  id: number;
  title: string;
  team: string;
  year: number;
  branch: string;
  tags: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Traffic Management System",
    team: "Team Alpha",
    year: 2023,
    branch: "Computer Science",
    tags: ["#IoT", "#ML", "#SmartCity"],
    description: "An intelligent traffic control system using IoT sensors and machine learning to optimize urban traffic flow.",
  },
  {
    id: 2,
    title: "Sentiment Analysis for Reviews",
    team: "Team Beta",
    year: 2022,
    branch: "Computer Science",
    tags: ["#NLP", "#Python", "#Analytics"],
    description: "Deep learning model for analyzing customer sentiment from product reviews with 94% accuracy.",
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    team: "Team Gamma",
    year: 2024,
    branch: "Computer Science",
    tags: ["#Blockchain", "#Security", "#DApp"],
    description: "A decentralized voting platform ensuring transparency and immutability using Ethereum smart contracts.",
  },
  {
    id: 4,
    title: "Autonomous Drone Navigation",
    team: "Team Delta",
    year: 2023,
    branch: "Electronics",
    tags: ["#Robotics", "#ComputerVision", "#AI"],
    description: "Self-navigating drone system with obstacle avoidance using computer vision and path planning algorithms.",
  },
  {
    id: 5,
    title: "Healthcare Chatbot System",
    team: "Team Epsilon",
    year: 2024,
    branch: "Computer Science",
    tags: ["#NLP", "#Healthcare", "#ChatBot"],
    description: "AI-powered medical assistant providing symptom analysis and preliminary diagnosis recommendations.",
  },
  {
    id: 6,
    title: "Solar Energy Prediction Model",
    team: "Team Zeta",
    year: 2022,
    branch: "Electrical",
    tags: ["#ML", "#Renewable", "#TimeSeries"],
    description: "LSTM-based forecasting model for solar power generation with weather pattern integration.",
  },
  {
    id: 7,
    title: "Smart Warehouse Management",
    team: "Team Eta",
    year: 2023,
    branch: "Computer Science",
    tags: ["#Logistics", "#IoT", "#Automation"],
    description: "Automated inventory tracking and optimization system using RFID and robotic process automation.",
  },
  {
    id: 8,
    title: "Fraud Detection in Banking",
    team: "Team Theta",
    year: 2024,
    branch: "Computer Science",
    tags: ["#ML", "#FinTech", "#Security"],
    description: "Real-time transaction monitoring system using anomaly detection to prevent financial fraud.",
  },
  {
    id: 9,
    title: "AR-Based Learning Platform",
    team: "Team Iota",
    year: 2023,
    branch: "Computer Science",
    tags: ["#AR", "#Education", "#Mobile"],
    description: "Immersive augmented reality application for interactive STEM education and virtual labs.",
  },
  {
    id: 10,
    title: "Water Quality Monitoring IoT",
    team: "Team Kappa",
    year: 2022,
    branch: "Electronics",
    tags: ["#IoT", "#Environment", "#Sensors"],
    description: "Remote water quality assessment system with real-time contamination alerts and data visualization.",
  },
  {
    id: 11,
    title: "Resume Parsing with NLP",
    team: "Team Lambda",
    year: 2024,
    branch: "Computer Science",
    tags: ["#NLP", "#HR", "#Automation"],
    description: "Intelligent resume screening tool extracting skills, experience, and qualifications automatically.",
  },
  {
    id: 12,
    title: "Predictive Maintenance System",
    team: "Team Mu",
    year: 2023,
    branch: "Mechanical",
    tags: ["#ML", "#Industry4.0", "#IoT"],
    description: "Machine learning model predicting equipment failures before they occur to minimize downtime.",
  },
];

export const years = [2022, 2023, 2024];
export const branches = ["Computer Science", "Electronics", "Electrical", "Mechanical"];
export const techStacks = ["#IoT", "#ML", "#NLP", "#Blockchain", "#AR", "#Robotics", "#Python", "#Security"];
