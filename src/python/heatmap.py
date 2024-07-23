import requests # type: ignore
import pandas as pd # type: ignore

url = 'https://covid-193.p.rapidapi.com/statistics'
headers = {
    'x-rapidapi-key': '66129a222fmshcb15fef642d1503p1e94f9jsn5608c8044300',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
}

response = requests.get(url, headers=headers)
data = response.json()

myData = []

for items in data['response']:
     country_data = {
            'continent': items.get('continent'),
            'country': items.get('country'),
            'total_cases': items.get('cases', {}).get('total')
     }
     myData.append(country_data)
     
     df = pd.DataFrame(myData)     

print(df)

