import json
import asyncio
import aiohttp
from pydantic import BaseModel

from Scraper import Scraper

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


async def get_urls():
    # get urls from db
    return []


async def main():
    # continously get urls here
    urls = get_urls()
    connector = aiohttp.TCPConnector(limit=20)
    url = "https://www.dn.se/sverige/hogg-ihjal-tva-angripare-tingsratten-friar-22-aring-for-dramat-i-ulricehamn/"
    articles = []
    async with aiohttp.ClientSession(connector=connector) as session:
        scraper = Scraper(session=session)
        for url in test_urls:
            doc = await scraper.get_html(url=url)
            article = await get_article(doc)
            articles.append(article)
        # parser = models.Gucci(country='us', scraper=scraper)
        # await parser.start()

    articles = [article.json() for article in articles]
    print(articles)

    # we have all articles, time to summarize them

    # we have all summarized articles, insert to db


if __name__ == "__main__":
    asyncio.run(main())
