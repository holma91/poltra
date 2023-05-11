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

test_urls = [
    "https://www.dn.se/sverige/hogg-ihjal-tva-angripare-tingsratten-friar-22-aring-for-dramat-i-ulricehamn/",
    "https://www.dn.se/sverige/drapatalade-22-aringen-i-ulricehamn-slappt-ur-haktet/",
    "https://www.dn.se/sverige/stjarnkrogaren-om-restauranger-som-koper-stulet-kott-snedvrider-konkurrensen/",
]


class Article(BaseModel):
    title: str
    intro: str
    body: str


async def get_article(doc):
    article_data = json.loads(
        doc.xpath('//script[@type="application/ld+json"]')[0].text, strict=False
    )

    title = doc.xpath('//*[@class="article__title"]/text()')[0]
    intro = doc.xpath('//*[@class="article__content"]/div[1]/p/text()')
    body = doc.xpath('//*[@class="article__body"]/p/text()')
    intro_processed = ""
    for p in intro:
        intro_processed += p
    body_processed = ""
    for p in body:
        body_processed += p

    return Article(title=title, intro=intro_processed, body=body_processed)


def get_metadata():
    """gets metadata from selected sources"""
    sources = ['di.se', 'DN.se', 'svd', ]
    countries = "se"
    res = requests.get(f"{MEDIASTACK_BASE}/news?countries={countries}&access_key={MEDIASTACK_API_KEY}")
    articles =  res.json()
    return list(filter(lambda article: article['source'] in sources, articles['data']))


async def main():
    # continously get urls here
    metadata = get_metadata()
    articles = []
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(limit=20)) as session:
        scraper = Scraper(session=session)
        for article in metadata:
            # adjust scraper depending on source
            doc = await scraper.get_html(article['url'])
            article = await get_article(doc)
            articles.append(article)

    articles = [article.json() for article in articles]
    print(metadata)

    # we have all articles, time to summarize them

    # we have all summarized articles, insert to db


if __name__ == "__main__":
    asyncio.run(main())
