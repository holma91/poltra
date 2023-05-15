import json
import os
import asyncio
import aiohttp
import requests
import openai
from pydantic import BaseModel
from dotenv import load_dotenv
from Scraper import Scraper

load_dotenv()
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")
NEWSAPI_API_KEY = os.environ.get("NEWSAPI_API_KEY")
MEDIASTACK_API_KEY = os.environ.get("MEDIASTACK_API_KEY")

MEDIASTACK_BASE = "http://api.mediastack.com/v1"
NEWSAPI_BASE = "https://newsapi.org/v2"


def get_metadata():
    sources = [
        "di.se",
        "DN.se",
        "svd",
    ]
    countries = "se"
    res = requests.get(
        f"{MEDIASTACK_BASE}/news?countries={countries}&access_key={MEDIASTACK_API_KEY}&limit=100"
    )
    articles = res.json()
    return list(filter(lambda article: article["source"] != "bajs", articles["data"]))


def svt(doc):
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
    }


async def main():
    # async with aiohttp.ClientSession(
    #     connector=aiohttp.TCPConnector(limit=20)
    # ) as session:
    #     scraper = Scraper(session=session)
    #     doc = await scraper.get_html(
    #         "https://www.svt.se/nyheter/lokalt/skane/mustafas-livskamrat-dog-efter-operationen-far-inga-svar"
    #     )
    #     article = svt(doc)
    #     print(json.dumps(article, indent=4))
    openai.api_key = OPENAI_API_KEY

    prompt = "Timmarna gick och Mostafa f\u00f6rs\u00f6kte upprepade g\u00e5nger f\u00e5 svar p\u00e5 hur operationen g\u00e5tt. N\u00e4r han till slut fick prata med l\u00e4karen fick han h\u00f6ra att Maha hade sv\u00e5rt att vakna fr\u00e5n narkosen. Pl\u00f6tsligt h\u00f6rde han ambulansen komma.\u2013 Jag fr\u00e5gade personalen \u2013 vad handlar detta om? Till vem \u00e4r den h\u00e4r ambulansen? ber\u00e4ttar Mostafa.Mahas hj\u00e4rta hade stannat och hon dog senare p\u00e5 sjukhuset. Efter att Inspektionen f\u00f6r v\u00e5rd och omsorg (Ivo) tittat n\u00e4rmare p\u00e5 omst\u00e4ndigheterna hittade de flera allvarliga brister.Bland annat saknade personalen som utf\u00f6rde narkosen specialistkompetens och Maha fick f\u00f6r h\u00f6ga doser l\u00e4kemedel. Ivo konstaterade ocks\u00e5 att narkosjournalen var ofullst\u00e4ndig och sv\u00e5rtolkad, och att personalen p\u00e5 plats inte beh\u00e4rskade grunderna i avancerad hj\u00e4rt- och lungr\u00e4ddning.SVT Nyheter Sk\u00e5ne har s\u00f6kt kliniken genom deras advokat \u00c5ke Hjelm, som meddelar att de inte vill ge n\u00e5gra kommentarer. De har i sin Lex Maria-anm\u00e4lan bland annat uppgett att hj\u00e4rtstartaren hade f\u00f6r d\u00e5ligt batteri."

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=f"{prompt}\n\nTl;dr",
        temperature=0.7,
        max_tokens=250,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=1,
    )

    print(response)


asyncio.run(main())
