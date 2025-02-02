# Quiz App

## Overview
The **Quiz App** is an interactive web-based quiz application built with React.js for the frontend and Node.js for the backend. The app fetches quiz questions from an API and provides users with a timed quiz experience.

## Features
- Fetches quiz data dynamically from an API.
- Interactive UI with animations for question transitions.
- Score tracking with correct, incorrect, and unanswered questions.
- Countdown timer for each question.
- Performance analysis at the end of the quiz.
- Ability to restart the quiz.
- CORS-enabled backend to allow frontend access to the API.

## Tech Stack
- **Frontend:** React.js (Vite)
- **Backend:** Node.js with HTTP module and `requests` package
- **Styling:** CSS
- **API Data Fetching:** Fetch API

## Installation & Setup
### Backend
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```
   The server runs on `http://localhost:2000/`.

### Frontend
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React development server:
   ```sh
   npm run dev
   ```
   The frontend runs on `http://localhost:5173/` (default Vite port).

## Usage
1. Open the frontend in your browser.
2. Click the **Start Quiz** button to begin.
3. Answer questions within the given time limit.
4. View your score and performance analysis at the end.
5. Restart the quiz if desired.

## API Endpoint
The app fetches quiz data from:
```sh
http://localhost:2000/
```

## File Structure
```
quiz-app/
│── backend/
│   ├── server.js  # Node.js server handling API requests
│── frontend/
│   ├── src/
│   │   ├── App.jsx  # Main React component
│   │   ├── index.css  # Styles
│   │   ├── assets/  # Images and static assets
│   ├── public/
│   ├── package.json  # Frontend dependencies
│── package.json  # Backend dependencies
│── README.md  # Project documentation
```

## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the MIT License.
## Screenshots
![Image](https://github.com/user-attachments/assets/d9a662b4-87a6-4314-87d9-0becd16cf564)
![Image](https://github.com/user-attachments/assets/d9a662b4-87a6-4314-87d9-0becd16cf564)
![Image](https://github.com/user-attachments/assets/d9a662b4-87a6-4314-87d9-0becd16cf564)










