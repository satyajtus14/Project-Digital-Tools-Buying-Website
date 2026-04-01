# 🚀 Digital Tools Buying Website

<div align="center">

<p align="center">
  <img src="public/logo.png" alt="Logo" width="200" />
</p>
<p align="center">
  A modern platform to explore and purchase digital tools 🚀
</p>



**A modern e-commerce platform for digital tools, built with React, Tailwind CSS, and DaisyUI.**

[Live Demo](https://milestone-06-digital-tools-buying-website.vercel.app/) 
[Repository](https://github.com/satyajtus14/Milestone-06-Digital-Tools-Buying-Website)
 
</div>

 # Live Link:  
  GitHub: https://satyajtus14.github.io/Milestone-06-Digital-Tools-Buying-Website/
  
  Netlify: https://digitaltoolbuyingapp-sj.netlify.app/  

## 📖 Overview

This project is a sophisticated "Digital Tools Buying Website" designed to provide a seamless e-commerce experience for users looking to purchase various digital products. Built with the latest frontend technologies, it offers an intuitive and responsive user interface, making product discovery and purchase straightforward and enjoyable. The application emphasizes a clean design, efficient client-side routing, and robust state management for a smooth shopping journey.

## ✨ Features

-   🎯 **Comprehensive Product Listing:** Browse a wide array of digital tools with detailed information.   
-   🛒 **Shopping Cart Management:** Easily add, remove, and update quantities of products in your cart.    
-   💾 **Persistent Cart Data:** Shopping cart items are saved locally, maintaining your selection across sessions. 
-   🔍 **Product Search & Filtering:** Quickly find desired tools using search and sorting capabilities.    
-   🚀 **Interactive Notifications:** Get instant feedback for actions like adding items to the cart or completing a purchase with toast messages.  
-   📱 **Fully Responsive Design:** Enjoy a consistent and optimized experience across all devices (desktops, tablets, and mobile phones).  
-   ⚡ **Fast Client-Side Navigation:** Seamless page transitions powered by React Router DOM for a single-page application feel.
-   🎨 **Modern UI with DaisyUI:** Leverages DaisyUI components for a polished and consistent look and feel.    



## 🛠️ Tech Stack

**Frontend:**

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)  [![React Router DOM](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)  [![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)  [![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org/)  [![Autoprefixer](https://img.shields.io/badge/Autoprefixer-E0542D?style=for-the-badge&logo=autoprefixer&logoColor=white)](https://github.com/postcss/autoprefixer)  [![React Toastify](https://img.shields.io/badge/React_Toastify-5F2EEA?style=for-the-badge&logo=react-toastify&logoColor=white)](https://fkhadra.github.io/react-toastify/)  [![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-EA580C?style=for-the-badge&logo=react-hot-toast&logoColor=white)](https://react-hot-toast.com/)  [![LocalForage](https://img.shields.io/badge/LocalForage-104975?style=for-the-badge&logo=localforage&logoColor=white)](https://localforage.github.io/localforage/)  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


**Build Tool:**

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

**Code Quality:**

[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)    

## 🚀 Quick Start

Follow these steps to get a development copy of the project up and running on your local machine.

### Prerequisites
-   **Node.js**: Version 18.x or higher (LTS recommended). You can download it from [nodejs.org](https://nodejs.org/).
-   **npm**: Comes bundled with Node.js.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/satyajtus14/Milestone-06-Digital-Tools-Buying-Website.git
    cd Milestone-06-Digital-Tools-Buying-Website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment setup**
    This project does not require a `.env` file for basic operation as data is sourced from local JSON.

4.  **Start development server**
    ```bash
    npm run dev
    ```

5.  **Open your browser**
    The application will typically be available at `http://localhost:5173/Milestone-06-Digital-Tools-Buying-Website/`.

## 📁 Project Structure

```
Milestone-06-Digital-Tools-Buying-Website/
├── public/                 # Static assets (e.g., vite.svg, images)
│   └── vite.svg
├── src/                    # Main application source code
│   ├── assets/             # Images or other media assets
│   ├── components/         # Reusable React components
│   ├── data/               # Local JSON data (e.g., products.json)
│   ├── pages/              # Main application views/routes
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React entry point, Vite setup
│   └── index.css           # Global CSS and Tailwind directives
├── .gitignore              # Specifies intentionally untracked files
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package-lock.json       # npm dependency lock file
├── package.json            # Project metadata and dependencies
├── tailwind.config.js      # Tailwind CSS configuration (inferred)
├── postcss.config.js       # PostCSS configuration (inferred)
└── vite.config.js          # Vite build configuration
```

## ⚙️ Configuration

### Configuration Files
-   `vite.config.js`: Configures Vite for development and production builds, including React plugin setup.
-   `tailwind.config.js`: Defines Tailwind CSS customizations, such as themes, colors, and plugins.
-   `postcss.config.js`: Configures PostCSS for processing CSS, typically used with Tailwind CSS and Autoprefixer.
-   `eslint.config.js`: ESLint configuration for code linting and style enforcement.

## 🔧 Development

### Available Scripts
In the project directory, you can run:

| Command           | Description                                                                  |
|-------------------|------------------------------------------------------------------------------|
| `npm run dev`     | Starts the development server.                                               |
| `npm run build`   | Builds the app for production to the `dist` folder.                          |
| `npm run lint`    | Lints the project files for potential errors and style inconsistencies.      |
| `npm run preview` | Serves the static `dist` folder in production mode for local preview.        |

### Development Workflow
Simply run `npm run dev` to start the development server. Any changes saved in the `src` directory will trigger a hot reload in your browser.

## 🧪 Testing

No explicit testing framework or scripts were detected in `package.json`. Developers are encouraged to implement tests as the project scales.

## 🚀 Deployment

### Production Build
To create a production-ready build:
```bash
npm run build
```
This command bundles React in production mode and optimizes the build for the best performance. The build artifacts will be placed in the `dist/` directory.

### Deployment Options
The generated `dist/` directory contains all the static assets required to run the application. This can be deployed to any static hosting service, such as:
-   **Vercel:** Easily deploy with Vercel's platform.
-   **Netlify:** Drag and drop your `dist` folder or connect your GitHub repository.
-   **GitHub Pages:** Host your `dist` folder on GitHub Pages.
-   **Any static file server.**

## 🤝 Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:
1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes.
4.  Commit your changes following conventional commit guidelines.
5.  Push your branch and open a pull request.

Please ensure your code adheres to the existing coding style and passes lint checks.

### Development Setup for Contributors
The development setup is the same as the Quick Start guide. Ensure you have Node.js and npm installed, then clone the repository and install dependencies using `npm install`.

## 📄 License

This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.   

## 🙏 Acknowledgments

-   **React**: For building the user interface.
-   **Tailwind CSS & DaisyUI**: For rapid and beautiful UI development.
-   **Vite**: For the blazing-fast development experience and optimized build.
-   **React Router DOM**: For declarative routing.
-   **React Toastify & React Hot Toast**: For elegant notifications.
-   **LocalForage**: For client-side data storage.
-   **ESLint**: For maintaining code quality.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/satyajtus14/Milestone-06-Digital-Tools-Buying-Website/issues)
-   📧 For general inquiries, please contact the repository owner.  

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [satyajtus14](https://github.com/satyajtus14)

</div>
