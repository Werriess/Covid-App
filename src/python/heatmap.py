import requests
import pandas as pd

url = 'https://covid-193.p.rapidapi.com/statistics'
headers = {
    'x-rapidapi-key': '66129a222fmshcb15fef642d1503p1e94f9jsn5608c8044300',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
}

response = requests.get(url, headers=headers)
data = response.json()

print(data)

