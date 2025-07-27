# FraudGuard – Full-Stack Fake Job Detection System

FraudGuard is a web-based tool that helps job seekers identify potentially fraudulent job or internship postings. It combines the power of machine learning (Logistic Regression) with a seamless full-stack web architecture, enabling real-time scam detection through a simple and intuitive interface.

## Features

- Real-time prediction of job descriptions as "Likely Fraud" or "Looks Fair"
- Machine learning backend using Logistic Regression and TF-IDF for text classification
- Seamless integration of Flask (Python ML) with Node.js (backend server)
- Custom logic to flag scam indicators like “registration fee”, “pay to apply”, etc.
- Interactive frontend for user input and result display
- Full-stack architecture demonstrating integration of ML and web technologies

## How It Works

The user inputs a job or internship description on the frontend interface. The text is sent to the Node.js backend via a POST request. Node.js forwards the data to a Flask-based ML API, which preprocesses the input using NLP and TF-IDF vectorization. The trained Logistic Regression model then classifies the text as either fraudulent or legitimate. The prediction is sent back to Node.js and displayed to the user on the frontend.

## Technologies Used

Python, Flask, Scikit-learn, Logistic Regression, TF-IDF, Node.js, Express.js, JavaScript, HTML, CSS, Axios, JSON

## Folder Structure

FraudGuard/
├── flask-api/  
│   ├── app.py  
│   ├── model.pkl  
│   ├── vectorizer.pkl  
│   └── requirements.txt  
├── node-server/  
│   ├── index.js  
│   └── package.json  
├── frontend/  
│   ├── index.html  
│   ├── script.js  
│   └── styles.css  

## Setup Instructions

1. Clone the repository  
   `git clone https://github.com/yourusername/FraudGuard.git && cd FraudGuard`

2. Start the Flask ML backend  
   `cd flask-api && pip install -r requirements.txt && python app.py`

3. Start the Node.js backend server  
   `cd ../node-server && npm install && node index.js`

4. Open the `index.html` file in the `frontend` folder in your browser

## Future Enhancements

- Add user login and database to track scan history  
- Accept job description files (PDF/DOCX) for analysis  
- Improve model performance with larger datasets  
- Deploy full-stack app on cloud platforms (Render, Vercel, Heroku)
