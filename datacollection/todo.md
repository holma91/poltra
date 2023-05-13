## Resurser

bra python resurs: https://www.learnpython.dev/02-introduction-to-python/

- hämta motioner från riksdagen via deras api

  - https://data.riksdagen.se/dokumentation/
  - https://realpython.com/python-requests/
  - https://realpython.com/api-integration-in-python/

- hämta nyheter från omni, svt, osv med web scraping
  - https://realpython.com/beautiful-soup-web-scraper-python/

APIs:

- https://mediastack.com/
- https://newsapi.org/

## Tankar

Vi behöver nog inte skrapa något till en början, utan kan använda oss av mediastack och newsapi.

datacollection -> server <-> frontend

## TODO

structure for the data

this is what we get from newsapi

```json
{
      "source": { "id": null, "name": "Sverigesradio.se" },
      "author": "Sveriges Radio",
      "title": "Symbol som skyddar kulturarv i krig s\u00e4tts inte upp \u2013 l\u00e4nsstyrelser saknar pengar - Kulturnytt i P1 - Sveriges Radio",
      "description": "Det svenska kulturarvet \u00e4r fortsatt d\u00e5ligt skyddat vid ett krig.Endast tv\u00e5 av 21 l\u00e4nsstyrelser har ans\u00f6kt om att m\u00e4rka ut kulturmilj\u00f6er med den internationella ...",
      "url": "https://sverigesradio.se/artikel/symbol-som-skyddar-kulturarv-i-krig-satts-inte-upp-lansstyrelser-saknar-pengar",
      "urlToImage": "https://static-cdn.sr.se/images/478/3f0dec1f-9406-4c62-bcd5-00daa1c5dac7.jpg",
      "publishedAt": "2023-02-07T04:30:21Z",
      "content": null
    },
```

this is what we get from mediastack

```json
{
      "author": null,
      "title": "Seger n\u00e4ra comeback: &quot;VM en m\u00e5ls\u00e4ttning&quot;",
      "description": "Caroline Seger \u00e4r tillbaka i tr\u00e4ning och dr\u00f6mmer om en VM-sommar p\u00e5 andra sidan jordklotet.Det g\u00e4ller \u00e4ven om hon inte f\u00e5r en plats i n\u00e4sta veckas landslagstrupp.\u2013 \u2013 Det \u00e4r klart att VM \u00e4r en m\u00e5ls\u00e4ttning i sig. Men f\u00f6rst och fr\u00e4mst handlar det om att komma tillbaka och kunna spela fotboll och vara sm\u00e4rtfri, s\u00e4ger den 37-\u00e5riga mittf\u00e4ltsveteranen.",
      "url": "https://www.svd.se/a/BWbPX7/seger-nara-comeback-vm-en-malsattning",
      "source": "svd",
      "image": null,
      "category": "general",
      "language": "sv",
      "country": "se",
      "published_at": "2023-02-03T05:53:46+00:00"
    },
```

```ts
type Article = {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  imageUrl: string;
};
```
