import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",  # if the frontend runs locally on port 3000
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/articles/")
async def get_news():
    articles = []
    with open("./db.jsonl", "r") as file:
        for line_number, line in enumerate(file):
            try:
                article = json.loads(line)
                articles.append(article)
            except Exception as e:
                print(f"exception at line {line_number}: {e}")

    return articles
