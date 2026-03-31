# 🚀 Digital Tools Buying Application

# React + Vite Application for Digital Tools Buying & Subscription Management

Live Link:
1. GitHub: https://satyajtus14.github.io/Milestone-06-Digital-Tools-Buying-Website/
2. Netlify: https://milestone-06-digital-tools-buying-web.netlify.app/ 

# 1. Overview
The Digital Tools app is a web application built with React, Vite, and Tailwind CSS that allows users to browse, select, and digital tools with subscribe to various digital tools plans. The application provides a unified subscription model for accessing multiple digital tool services under a single plan.

# Key Features
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

# 3. Project Structure
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



# 4. Setup & Installation
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


# 5. Key Components

5.1. App.jsx (Main Component)

	•	Purpose: Orchestrates the application state (tabs, cart) and renders child components.
	•	Key Logic:
	◦	Manages active tab (model or cart) via useState.
	◦	Handles cart state (carts array) for adding/removing models.
	◦	Uses Suspense for async model data loading.
const [activeTab, setActiveTab] = useState("products");

const [carts, setCarts] = useState([]);

const modelPromise = getModel(); // Async fetch of models.json

5.2. DigiModels.jsx (Digital Tools Listing)

Purpose: Displays a grid of Digital Tools using ModelCard.

Key Features:
Uses use() hook to await modelPromise.

Renders models in a responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3).

const modelData = use(modelPromise);

return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {modelData.map((model) => (
      <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts}/>
    ))}
  </div>
);

5.3. ModelCard.jsx (Individual Model UI)
Purpose: Represents a single Digital Tools model with:
Icon Image, title, description, price, features, and tag-status badge.
"Add to Cart" button with toast feedback.

Key Logic:
Tracks subscription state (isBuyNow) to prevent duplicates.
Uses react-toastify for success/error messages.

    const handleBuyNow =()=>{
        setIsBuyNow(true);
      const isFoundItem = carts.find(item => item.id === model.id)
        if(isFoundItem){
            toast.error('Item already in cart')
            return;
        }
        setCarts([...carts,model])
        toast.success(`Wow Your ${model.title} item added!`);
    }
5.4. Cart.jsx (Shopping Cart)
Purpose: Displays cart contents and allows removal of items.
Key Features:
Calculates total price via reduce().
Renders empty state if cart is empty.
Provides "Remove" buttons for each item.
const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

const handleDelete = (item) => {
  const filterCartItem = carts.filter(cartItem => cartItem.id !== item.id)
       setCarts(filterCartItem)
       toast.success(`Your item deleted to cart!`);
};	

5.5. NavBar.jsx (Navigation)
Purpose: Provides global navigation with:
Logo, menu items (Products, Features, Pricing, Testimonials, FAQ), with Cart icon and a "Get Started" button.
Key Features:
Responsive design (hidden on mobile, full menu on desktop).
<div className="navbar">
  <div className="navbar-start">
    <div className="flex items-center gap-1 font-bold text-xl">
      DigiTools
    </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
	  <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn bg-red-500 rounded-full text-white">Get Started</a>
  </div>

# 6. Configuration

6.1. package.json
Scripts:

Script	Command	Description
dev	vite	Starts the development server.
build	vite build	Generates production-ready files.
lint	eslint .	Runs ESLint for code quality checks.
preview	vite preview	Serves the production build locally.
Dependencies:

@tailwindcss/vite, lucide-react, react-toastify: UI and utility libraries.
react, react-dom: Core React dependencies.
Dev Dependencies:

@vitejs/plugin-react: React plugin for Vite.
eslint, daisyui: Linting and styling tools.
