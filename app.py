from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

model = joblib.load("fraudguard_model.pkl")
vectorizer = joblib.load("tfidf_vectorizer.pkl")

@app.route('/')
def home():
    return "FraudGuard API is running!"

@app.route('/check', methods=['POST'])
def check_fraud():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    vectorized_input = vectorizer.transform([text])
    prediction = model.predict(vectorized_input)[0]

    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)
