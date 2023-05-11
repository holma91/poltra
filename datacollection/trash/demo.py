import requests
from getpass import getpass


response = requests.get('https://api.github.com/user', auth=('holma91', getpass()))
print(response)


# response = requests.get(
#     'https://api.github.com/search/repositories',
#     params={'q': 'requests+language:python'}, # appending ?q=requests+language:python
#     headers={'Accept': 'application/vnd.github.v3.text-match+json'},
#     timeout=3.05
# )

# View the new `text-matches` array which provides information
# about your search term within the results
# json_response = response.json()
# repository = json_response['items'][0]
# print(f'Text matches: {repository["text_matches"]}')


# post req: requests.post('https://httpbin.org/post', data={'key':'value'})