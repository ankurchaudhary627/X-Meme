# X-Meme
Application to view memes posted by the community of users, where users can:
 - upload memes with valid url and caption.
 - view list of memes posted by others.
 - can edit memes displayed.
 - Note: Memes are displayed in  last posted one first.
 
## Tech stack used in the project
MERN stack application. 
 - MongoDB
 - ExpressJS
 - ReactJS
 - NodeJS
 
## External libraries used in UI are:
  - Axios
  - Ant-design

## External libraries used in backend are:
  - Swagger-ui
  - Cors
  - Dotenv

## Codebase structure:
  - There are two main folders, namely `backend` & `frontend` where the code for backend and frontend resides respectively.

  
## Prerequisites for running the project:
  - You should have `node` installed on your machine.
  - For database, you can either use mongoDB atlas which is cloud db or use your local db server using mongoDB compass.

## Steps to run the project in the local:
### If you are windows user:
 1. Clone the repository.
 2. After cloning the repo, switch to `backend` folder using:
    - `cd backend`
 3. Now run `npm install` to install the backend dependencies.
 4. After installing dependencies, run `npm run server` to start the server which should load [here](http://localhost:8081).
 5. Go back to the root of the repo, and switch to `frontend` folder using:
    - `cd frontend`
 6. Now run `npm install` to install the frontend dependencies.
 7. After installing dependencies, run `npm start` to start the UI which should load [here](http://localhost:3000).
### If you are linux user:
 1. Go to the root of the repo and run below commands in given order from your terminal:
    - `chmod +x install.sh`
    - `sudo ./install.sh`
 2. After above step your server will be up and running [here](http://localhost:8081).
 3. Now from root of the repo switch to `frontend` folder using:
    - `cd frontend`
 4. Now run `npm install` to install the frontend dependencies.
 5. After installing dependencies, run `npm start` to start the UI which should load [here](http://localhost:3000).
 
### Note:
 1. In order to run this project using local db you should have MongoDBCompass installed.
 2. In order to connect to local mongoDB database you need to replace the mongoDB URI inside `backend\config\keys.js` to `'mongodb://127.0.0.1:27017/Xmeme'` (including single quotes) where `Xmeme` is the db name. You can use your choice of db name.

## For the api explorers out there:
 1. You can use the swagger-ui to experiment with the api's used in this project.
 2. Accessing swagger-ui:
    - If running in local [Swagger-local](http://localhost:8081/swagger-ui).
    - If you want to see deployed one [Swagger-public](https://x-meme-ankur.herokuapp.com/swagger-ui).
    

## Feedbacks:
  - I am always an [email](ankurchaudhary627@gmail.com)/ [linkedin](https://www.linkedin.com/in/ankurchaudhary627/) ping away for the feedbacks to improve this further or add new functionalities or discussing new ideas (not regarding this project in particular).
 
### Want to play with the app?  [Check out this](https://meme-ex.netlify.app/)
