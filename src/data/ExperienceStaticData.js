import EonLogo from "../images/eon-logo.png";
import KismetLogo from "../images/kismet-logo.png";
import FlitexLogo from "../images/flitex-logo.png";


const experiences = [  
  
  {    
    position: "Machine Learning Engineer",    
    company: "Kismet.ai",
    location: "Toronto, ON",   
    startDate: "May 2021",    
    endDate: "Sept 2022",
    website: "https://kismet.ai/", 
    logo: KismetLogo,   
    bullets: [      
        "Developed an automated ML platform for a real-time bidding system",      
        "Designed and developed model serving microservice in Golang for RTB system with <50ms latency and 50,000 request/s of frequency",      
        "Implemented ETL data pipeline utilizing Kafka and ClickHouse with SQL queries for model training",      
        "Built A/B testing platform for quick deployment and evaluation of models in AWS",      
        "Collaborated with Ryerson University professor to research on a GANs-based price forecasting model"    
    ]
  },
  {
    position: "Full Stack Developer",
    company: "FliteX",
    location: "Toronto, ON",
    startDate: "Jan 2021",
    endDate: "May 2021",
    website: "https://flitex.net/",
    logo: FlitexLogo,
    bullets: [
      "Developed an end-to-end flight route planner for customers",
      "Built a flight route optimizer using A* algorithm with Python that increased efficiency by 5%",
      "Built an ETL pipeline with AWS Lambda to transform weather data that improved the model accuracy",
      "Automated the update of flight data from FAA database to the production database using API",
      "Built an analytical dashboard using React and CSS highlighting the cost savings for the clients"
    ]
  },
  {
    position: "Machine Learning Engineer",
    company: "EonMedia",
    location: "Vancouver, BC",
    startDate: "April 2020",
    endDate: "Jan 2021",
    website: "https://eonmedia.ai/",
    logo: EonLogo,
    bullets: [
      "Developed an image detection model and scaled it to meet customers’ requirements",
      "Developed logo extraction with Python and launched Auto Metadata Extraction feature",
      "Used Kubernetes and Docker to containerize and parallelize detection processes in AWS and GCP",
      "Extracted logos from videos or live streams using ensemble of YOLO and modified Resnet model",
      "Automated web scraping process for identifying unknown logo and insert metadata with PostgreSQL"
    ]
  },
  {
    position: "Software Developer",
    company: "JianWeiLai",
    location: "Waterloo, ON",
    startDate: "Nov 2019",
    endDate: "May 2020",
    bullets: [
      "Developed an end-to-end web app that is intuitive for psychologists and potential patients",
      "Developed an interactive chat box with real-time response using React, CSS, and AWS service that simulate a psychiatric session for the potential patients",
      "Created a standard data injection pipeline so that psychology team can update surveys daily"
    ]
  }
];


export default experiences;