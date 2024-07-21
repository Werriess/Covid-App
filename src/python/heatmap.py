import http.client

conn = http.client.HTTPSConnection("covid-193.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "66129a222fmshcb15fef642d1503p1e94f9jsn5608c8044300",
    'x-rapidapi-host': "covid-193.p.rapidapi.com"
}

conn.request("GET", "/statistics", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))