from typing import Union, Dict
import json
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000", # if the frontend runs locally on port 3000
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Article(BaseModel):
    source: Dict[str, str]
    author: str
    title: str
    description: Union[str, None] = None
    url: str
    urlToImage: str
    publishedAt: str
    content: Union[str, None] = None


# articles is our temporary database
with open('database.json', 'r') as database_file:
  articles = json.load(database_file)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/articles/")
async def post_article(article: Article):
  articles.append(article)
  return article

@app.get("/articles/")
async def get_news(src: Union[str, None] = None):
  if src:
    return list(filter(lambda article: article['source']['name'] == src, articles))
  return articles

@app.get("/articles/{article_id}")
async def get_news(article_id: int):
  return articles[article_id]