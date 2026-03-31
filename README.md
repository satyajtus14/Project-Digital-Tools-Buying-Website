# 🚀 Digital Tools Buying Application

# React + Vite Application for Digital Tools Buying & Subscription Management

Live Link:
1. GitHub: https://satyajtus14.github.io/Milestone-06-Digital-Tools-Buying-Website/
2. Netlify: https://milestone-06-digital-tools-buying-web.netlify.app/ 

# 1. Overview
The Digital Tools app is a web application built with React, Vite, and Tailwind CSS that allows users to browse, select, and digital tools with subscribe to various digital tools plans. The application provides a unified subscription model for accessing multiple digital tool services under a single plan.

Key Features
	•	Digital tool Catalog: Displays a list of digital tools with descriptions, pricing, and status indicators.
	•	Shopping Cart: Users can add digital tools to a cart and view their selections.
	•	Responsive UI: Built with Tailwind CSS and DaisyUI for a modern, responsive design.
	•	Real-time Feedback: Uses react-toastify for success/error notifications.
	•	Dynamic Data Fetching: Tools are loaded asynchronously from models.json.

  # 2. Architecture Overview
## 🛠 Tech Stack

| Category        | Technology                          | Purpose                                      |
|----------------|------------------------------------|----------------------------------------------|
| Frontend       | React (v19.2.4)                    | Core UI and component-based architecture     |
| Build Tool     | Vite (v8.0.2)                      | Fast development server and bundler          |
| Styling        | Tailwind CSS (v4.2.2) + DaisyUI    | Utility-first CSS for rapid UI development   |
| State Mgmt     | React Hooks (useState, useEffect)  | Local state management for UI interactions   |
| Notifications  | react-toastify (v11.0.5)           | User feedback via toast notifications        |
| Icons          | Lucide React (v1.3.0)              | Customizable SVG icons for UI elements       |

# Project Structure
digital-tool-buying-application/
├── public/                                    
│   ├── index.html                             
│   ├── logo.png                                
│   └── models.json                            
├── src/                                      
│   ├── components/                         
│   │   ├── Banner.jsx                         
│   │   ├── Cart.jsx                           
│   │   ├── Footer.jsx                          
│   │   ├── ModelCard.jsx                       
│   │   ├── DigiModels.jsx                     
│   │   ├── OtherStaticElements.jsx             
│   │   └── NavBar.jsx                          
│   ├── App.jsx                                 
│   ├── index.css                               
│   └── main.jsx                                
├── .gitignore                                  
├── package.json                               
├── vite.config.js                         
└── README.md                                   



4. Setup & Installation
Prerequisites

	•	Node.js (v18+ recommended)
	•	npm or yarn (v7+)


Installation Steps

	1	Clone the repository: git clone <repository-url>.
	2	cd digitoolsapps
	3	Install dependencies: npm install
	4	# or
	5	yarn install  
	6	Run the development server: npm run dev  
	◦	The app will be available at http://localhost:5173/.
	7	Build for production: npm run build  
	◦	Outputs optimized files to the dist/ directory.


6. Key Components

5.1. App.jsx (Main Component)

	•	Purpose: Orchestrates the application state (tabs, cart) and renders child components.
	•	Key Logic:
	◦	Manages active tab (model or cart) via useState.
	◦	Handles cart state (carts array) for adding/removing models.
	◦	Uses Suspense for async model data loading.
const [activeTab, setActiveTab] = useState("products");
const [carts, setCarts] = useState([]);

const modelPromise = getModel(); // Async fetch of models.json




