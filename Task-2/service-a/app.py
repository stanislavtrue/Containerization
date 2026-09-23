import os

from flask import Flask, jsonify

app = Flask(__name__)

PORT = int(os.environ.get("SERVICE_PORT"))

@app.route('/info')
def info():
    return jsonify({
        "service": "Service A",
        "message": "Message from Service A"
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=PORT)
