import os
import json
import requests
import sys
from dotenv import load_dotenv
load_dotenv()

MEDIASTACK_KEY = os.environ.get("MEDIASTACK_KEY")
NEWSAPI_KEY = os.environ.get("NEWSAPI_KEY")

MEDIASTACK_BASE = 'http://api.mediastack.com/v1'
NEWSAPI_BASE = 'https://newsapi.org/v2'

# Create and activate your local python environment: https://www.learnpython.dev/01-introduction/02-requirements/
# When you have your python environment activated: pip install -r requirements.txt

# To get news from mediastack
### Go to https://mediastack.com/, sign up for a free account, take your api key and put it in .env
### To run program: python test.py mediastack
### To run and dump the result into a json file: python test.py mediastack > filename.json

# To get news from newsapi
### Go to https://newsapi.org/, sign up for a free account, take your api key and put it in .env
### To run program: python test.py newsapi
### To run and dump the result into a json file: python test.py newsapi > filename.json

def get_news(source):
  if source == "mediastack":
    sources = 'svd'
    countries = 'se'
    mediastack_res = requests.get(f"{MEDIASTACK_BASE}/news?access_key={MEDIASTACK_KEY}&countries={countries}&sources={sources}")
    mediastack_res_json = mediastack_res.json()
    return mediastack_res_json

  elif source == "newsapi":
    country = 'se'
    newsapi_res = requests.get(f"{NEWSAPI_BASE}/top-headlines?apiKey={NEWSAPI_KEY}&country={country}")
    newsapi_res_json = newsapi_res.json()
    return newsapi_res_json


if __name__ == "__main__": 
  if (len(sys.argv) == 1):
    print('provide a command line argument like this: python test.py newsapi')
  elif (sys.argv[1] != 'mediastack' and sys.argv[1] != 'newsapi'):
    print('only support for mediastack and newsapi currently')
  else:
    news = get_news(sys.argv[1])
    print(json.dumps(news))