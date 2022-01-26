from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbjungle

result = db.movies.find_one({'title':'매트릭스'})

db.movies.update_one({'title':'매트릭스'}, {'$set':{'point':0}})
print(result)

db.movies.update_one({'title':'매트릭스'}, {'$set':{'point':9.39}})
print(result)