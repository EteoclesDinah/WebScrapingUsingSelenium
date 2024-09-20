from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import subprocess

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Route to return a hello message from the backend
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({'message': 'Hello and Welcome!!'})

# Route to save URLs to a CSV file and run form.py script
@app.route('/api/save_urls', methods=['POST'])
def save_urls():
    data = request.get_json()

    if 'urls' in data:
        urls = data['urls']
        # Save URLs to CSV file
        with open('url_list.csv', mode='w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(["URL"])
            for url in urls:
                writer.writerow([url])


    # Run form.py to scrape content after URLs are saved
    try:
        result = subprocess.run(['python', 'form.py'], capture_output=True, text=True)
        if result.returncode == 0:
            return jsonify({'message': 'Scraping finished!', 'output': 'saved to output.csv'}), 200
        else:
            return jsonify({'error': 'Failed to run form.py', 'details': result.stderr}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)