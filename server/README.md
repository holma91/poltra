## Installation

Create a virtual environment:
`python3 -m venv env`

Activate the virtual environment:
`. env/bin/activate`

Download the required packages:
`pip install -r requirements.txt`

## Running the server

run on default port: `uvicorn main:app`

run with hot reload on default port: `uvicorn main:app --reload`

run with hot reload on port 8000: `uvicorn main:app --reload --port=8000`

You can now go the the port on your local machine, for example go to localhost:8000 if you choose port 8000.

To view the documentation, go to localhost:8000/docs or localhost:8000/redoc.

## Application

Starting point is in main.py.
