def get_article(doc, metadata: dict):
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

    return {
        "title": title,
        "intro": intro_processed,
        "body": body_processed,
        "metadata": metadata,
    }
