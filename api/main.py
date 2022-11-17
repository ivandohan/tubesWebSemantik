from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import controllers.listing as listing
import controllers.search as search
import controllers.details as details
import controllers.authorDetails as authorDetails

app = Flask(__name__)
cors = CORS(app)
app.config['DEBUG'] = True
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/books/listing', methods=['GET'])
@cross_origin()
def data_records():
  return jsonify(listing.run_listing())

@app.route('/api/books/search', methods=['GET'])
@cross_origin()
def search_records():
  req_data = request.args.get("keyword")
  if req_data:
    # return jsonify(req_data)
    return jsonify(search.run_search(keywordParam=req_data))

@app.route('/api/books/details', methods=['GET'])
@cross_origin()
def detail_records():
  req_data = request.args.get("id")
  if req_data:
    return jsonify(details.run_details(keywordParam=req_data))

@app.route('/api/books/author', methods=['GET'])
@cross_origin()
def author_records():
  req_data = request.args.get("authorname")
  if req_data:
    return jsonify(authorDetails.run_author(keywordParam=req_data))

# @app.route()
app.run()