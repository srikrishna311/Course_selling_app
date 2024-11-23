# Course Selling App
A full-featured course management platform built with the MERN stack (MongoDB, Express.js, React, Node.js). This application provides a seamless experience for managing courses, including the ability to create, edit, view, and delete courses. Additionally, it features secure user authentication with login and signup functionality.

## Features
- **User Authentication:**
  - Secure login and signup with validation.
- **Course Management:**
  - Add new courses with ease.
  - Edit existing course's details.
  - Delete unwanted courses.
  - Display all courses dynamically.
- **Dynamic Frontend:**
  - Fully responsive design built with React.
  - Intuitive UI/UX for smooth navigation.
- **Backend Services:**
  - RESTful API built using Express.js.
  - MongoDB database for storing user and course information.

## Tech Stack
- **Frontend**
  - React.js: UI development and state management.
  - CSS/Bootstrap (or your chosen styling library): Responsive design and styling.
- **Backend**
  - Node.js: Server-side runtime.
  - Express.js: API routing and middleware.
- **Database**
  - MongoDB: NoSQL database for data persistence.
- **Other Tools**
  - JWT: For secure user authentication.
  - Dotenv: Environment variable management.
  - Mongoose: For MongoDB interaction.

## Getting Started with Installation
Follow these steps to set up and run the Course Selling App project on your local machine:

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v16+ recommended)
- MongoDB (running locally or in the cloud)
- Git

**1. Clone the Repository**:

Clone this repository to your local machine:
```bash
git clone git@github.com:srikrishna311/Course_selling_app.git
```

**2. Install Dependencies**

After cloning the repository,navigate to the Course_selling_app folder and install the required dependencies by doing this:
```bash
cd Course_selling_app
npm install
```

**3. Set Up Environment Variables**

Create a .env file in the root directory of the project and include the following variables:
```bash
MongoUrl=          # add your MongoUrl
Port = 3000
Secret=            # add your secret key>
BASE_URL=http://localhost:3000
```
The .env file is used to store sensitive information like database credentials, server ports, and secret keys. This ensures that these values can be easily customized for different environments (development, testing, production) without hardcoding them into the source code.In this project the variables in the .env file are:
- **MongoUrl:** The connection string for your MongoDB database.
- **Port:** The port where the backend server will run (default: 3000).
- **Secret:** A secret key used for signing JWT tokens.
- **BASE_URL:** The base URL for the application. This should match the proxy setting in the vite.config.js file located in frontend/src.

**4. Start the Application**

Start the Backend:
```bash
npm start
```

Start the frontend:
```bash
npm run build
```
## You're All Set!
Now that you've completed all the steps successfully, your app is ready to go!

You can access the frontend of your application by opening your browser and navigating to:
http://localhost:5173 (default Vite development server).

The backend will run at:
http://localhost:3000 (as configured in your .env file).

Start exploring your app, and enjoy building on top of it! 
