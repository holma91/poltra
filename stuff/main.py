import json
import time
import logging
import os
import asyncio
import aiohttp
import requests
import openai
from dotenv import load_dotenv
from Scraper import Scraper

load_dotenv()

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
NEWSAPI_API_KEY = os.environ.get("NEWSAPI_API_KEY")
MEDIASTACK_API_KEY = os.environ.get("MEDIASTACK_API_KEY")

MEDIASTACK_BASE = "http://api.mediastack.com/v1"
NEWSAPI_BASE = "https://newsapi.org/v2"


def get_article(doc, metadata):
    # this function assumes that the source is svt
    title = doc.xpath('//*[@class="nyh_article__heading"]/text()')[0]
    intro = doc.xpath('//*[@class="nyh_article__lead"]/p/text()')
    body = doc.xpath('//*[@class="nyh_article-body"]/p/text()')
    intro_processed = ""
    for p in intro:
        intro_processed += p
    body_processed = ""
    for p in body:
        body_processed += p

    return {
        "title": title,
        "intro": intro_processed,
        "body": body_processed,
        "url": metadata["url"],
        "imageUrl": metadata["imageUrl"],
        "category": metadata["category"],
        "source": "svt",
    }


def get_metadata():
    """gets metadata from selected sources"""

    sources = ["DN.se"]  # , 'di.se', 'svd', ]
    countries = "se"
    res = requests.get(
        f"{MEDIASTACK_BASE}/news?countries={countries}&access_key={MEDIASTACK_API_KEY}&limit=100"
    )
    articles = res.json()

    return list(filter(lambda article: article["source"] in sources, articles["data"]))


def get_svt_metadata():
    with open("./data/svt2.json", "r") as json_file:
        data = json.load(json_file)
    return data


def summarize(articles):
    openai.api_key = OPENAI_API_KEY
    for article in articles:
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"{article['title']}\n{article['intro']}\n{article['body']}\n\nTl;dr",
            temperature=0.7,
            max_tokens=250,
            top_p=1.0,
            frequency_penalty=0.0,
            presence_penalty=1,
        )
        print(response)
        article["summary"] = response["choices"][0]["text"]
        time.sleep(5)  # avoid rate limit

    return articles


async def main():
    logging.basicConfig(
        filename="./logs/scraper.log",
        level=logging.INFO,
        format="%(asctime)s - %(levelname)s - %(message)s",
    )

    all_metadata = get_svt_metadata()

    articles = []
    async with aiohttp.ClientSession(
        connector=aiohttp.TCPConnector(limit=20)
    ) as session:
        scraper = Scraper(session=session)
        for metadata in all_metadata:
            try:
                doc = await scraper.get_html(metadata["url"])
                article = get_article(doc, metadata)
                articles.append(article)
            except Exception as e:
                print(f"Error getting article at {metadata['url']}: {e}")
                logging.error(f"Error getting article at {metadata['url']}: {e}")

    articles = summarize(articles)

    with open("../server/db.jsonl", "a") as jsonl_file:
        for article in articles:
            jsonl_file.write(json.dumps(article) + "\n")


if __name__ == "__main__":
    asyncio.run(main())
