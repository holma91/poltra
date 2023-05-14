### /stuff

the scraping. just activate the python environment, install packages and then run main.py.

```txt
. env/bin/activate
pip install -r requirements.txt
python main.py
```

The output will be put in db.jsonl at /server.

### /server

A tiny server that exposes one endpoint /articles. It just uses db.jsonl as it's database. Start by running:
`uvicorn main:app`

Then start ngrok (you need to have it downloaded on your computer) at port 8000:
`./ngrok http 8000`

Take the url from ngrok and take it to /frontend/mobile_app

### /frontend/mobile_app

Put the ngrok url into App.js, then the app is ready to run. `npm install` first if you haven't, then just `npm run`.
