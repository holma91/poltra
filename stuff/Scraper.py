import logging
import asyncio
from lxml import html

class Scraper:
    max_page = 1000
    cookies = None
    headers = {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
    }

    def __init__(self, session):
        self.session = session

    async def get_json(self, url, headers=None, cookies=None, model_id=""):
        if not headers:
            headers = self.headers
        if not cookies:
            cookies = self.cookies

        for _ in range(10):
            try:
                async with self.session.get(url, headers=headers, cookies=cookies, proxy=self.proxy_url, proxy_auth=self.proxy_auth, timeout=5) as response:
                    if response.status == 200:
                        return await response.json()
                    else:
                        # try again with premium proxy?
                        logging.warning(f"{model_id} - Error with status: {response.status} when getting json from url: {url}")
            except asyncio.TimeoutError:
                logging.info(f"{model_id} - TimeoutError in get_json with the url: {url}")
            except Exception as _:
                logging.exception(f"{model_id} - Exception get_json with the url: {url}")
        
        logging.critical(f"{model_id} - Failed to get json from url: {url}")
        raise Exception(f"{model_id} - Failed to get json from url: {url}")

    async def get_html(self, url, headers=None, cookies=None):
        if not headers:
            headers = self.headers
        if not cookies:
            cookies = self.cookies

        for _ in range(3):
            try:
                async with self.session.get(url, headers=headers, cookies=cookies, timeout=5) as response:
                    if response.status == 200:
                        try:
                            text = await response.text()
                            # probably try again when this fails?
                            doc = html.document_fromstring(text)
                        except:
                            logging.warning(f" - await response.text() failed")
                            content = await response.content() # not sure if this ever works.
                            doc = html.document_fromstring(content)
                        return doc
                    else:
                        # try again with premium proxy?
                        logging.warning(f" - Error with status: {response.status} when getting html from {url}")
            except asyncio.TimeoutError:
                logging.info(f" - TimeoutError in get_html with the url: {url}")
            except Exception as e:
                logging.exception(f" - Exception in get_html: {e} with url: {url}")
        
        logging.critical(f" - Failed to get html from url: {url}")
        raise Exception(f" - Failed to get html from url: {url}")
    
    