from typing import Union

from fastapi import FastAPI

app = FastAPI()



news = [
  {
      "source": "dn.se",
      "author": "Lars N\u00e4slund",
      "title": "Dokument avsl\u00f6jar haveriet med V\u00e4stl\u00e4nken \u2013 hot om \u00e5tal - Dagens Nyheter",
      "description": "Trafikverkets beslut att h\u00e4va kontraktet med AGN f\u00f6r bygget av Etapp Haga i t\u00e5gtunneln V\u00e4stl\u00e4nken",
      "url": "https://www.dn.se/ekonomi/sa-havererade-vastlanken-dokument-visar-sylvass-kritik-mot-utsparkad-byggare/",
      "urlToImage": "https://cached-images.bonnier.news/gcs/bilder/dn-mly/a2b859d7-b1d7-4deb-8e07-b1672f17e20f.jpeg?interpolation=lanczos-none&fit=around%7C1024:576&crop=1024:h;center,top&output-quality=80",
      "publishedAt": "2023-02-03T12:05:10Z",
      "content": "Pendelt\u00e5gstunneln V\u00e4stl\u00e4nken \u00e4r n\u00e5got av G\u00f6teborgs motsvarighet till Slussenprojektet i Stockholm: Stort, kostsamt, komplicerat, f\u00f6rsenat och djupt omstritt.\r\nMen enligt stat och kommuner helt n\u00f6dv\u00e4n\u2026 [+8748 chars]"
  },
  {
      "source": "tn.se",
      "author": '',
      "title": "Rykte: Google visar upp AI-tj\u00e4nst - Tidningen N\u00e4ringslivet",
      "description": "Google g\u00f6r sig redo f\u00f6r att inom kort ta upp kampen med Open AI och Chat GPT om den nya formen av s\u00f6k- och chattj\u00e4nster p\u00e5 n\u00e4tet, menar techsajten The Verge.",
      "url": "https://www.tn.se/article/25698/rykte-google-visar-upp-ai-tjanst/",
      "urlToImage": "https://bilder.tn.se?uuid=cf068c0b-c354-59e7-973d-3a82f06a25db&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.83001&x=0&y=0&width=1200&height=675",
      "publishedAt": "2023-02-03T13:30:00Z",
      "content": "DEN DIGITALA UTVECKLINGEN\r\nTech (TT)\r\nGoogle g\u00f6r sig redo f\u00f6r att inom kort ta upp kampen med Open AI och Chat GPT om den nya formen av s\u00f6k- och chattj\u00e4nster p\u00e5 n\u00e4tet, menar techsajten The Verge.\r\nSa\u2026 [+763 chars]"
    },
    {
      "source": "aftonbladet.se",
      "author": "Mattias Karlsson",
      "title": "SHL: Mats Rosseli Olsen i Fr\u00f6lunda st\u00e4ngs av i fem matcher - Aftonbladet",
      "description": "Mats Rosseli Olsen f\u00e5r ett rej\u00e4lt straff av disciplinn\u00e4mnden. Den 31-\u00e5rige Fr\u00f6lunda-forwarden fick matchstraff efter huv",
      "url": "https://www.aftonbladet.se/sportbladet/hockey/a/EQj8jo/shl-mats-rosseli-olsen-i-frolunda-stangs-av-i-fem-matcher",
      "urlToImage": "https://images.aftonbladet-cdn.se/v2/images/c173fff5-eb7d-45f8-9bf5-c2599e5c2c53?fit=crop&format=auto&h=720&q=50&w=1280&s=519c996a06ba1a1417443a811e81a0ba204f699e",
      "publishedAt": "2023-02-03T14:32:31Z",
      "content": "Uppdaterad: Mindre \u00e4n 3 tim sedan\r\nMats Rosseli Olsen f\u00e5r ett rej\u00e4lt straff av disciplinn\u00e4mnden.\r\nDen 31-\u00e5rige Fr\u00f6lunda-forwarden fick matchstraff efter huvudtacklingen.\r\nNu st\u00e4ngs han ocks\u00e5 av i fem\u2026 [+2524 chars]"
    },
]

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/news/")
async def get_news(src: Union[str, None] = None):
  if src:
    return list(filter(lambda article: article['source'] == src, news))
  return news



@app.get("/news/{news_id}")
async def get_news(news_id: int):
  return news[news_id]