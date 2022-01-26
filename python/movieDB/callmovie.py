from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbjungle 

allList = list(db.movies.find({}))
result = db.movies.find_one({'title':'매트릭스'})['point']
print('별점:', result)

for movie in list(db.movies.find({'point':result})):
    print(movie['title'])
    
