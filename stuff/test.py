import json
import os
import asyncio
import aiohttp
import requests
from pydantic import BaseModel
from dotenv import load_dotenv
from Scraper import Scraper

load_dotenv()
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
NEWSAPI_API_KEY = os.environ.get('NEWSAPI_API_KEY')
MEDIASTACK_API_KEY = os.environ.get('MEDIASTACK_API_KEY')

MEDIASTACK_BASE = 'http://api.mediastack.com/v1'
NEWSAPI_BASE = 'https://newsapi.org/v2'

def get_metadata():
    sources = ['di.se', 'DN.se', 'svd', ]
    countries = "se"
    res = requests.get(f"{MEDIASTACK_BASE}/news?countries={countries}&access_key={MEDIASTACK_API_KEY}")
    articles =  res.json()
    return list(filter(lambda article: article['source'] in sources, articles['data']))


res = get_metadata()
print(json.dumps(res))
