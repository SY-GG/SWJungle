import requests
from bs4 import BeautifulSoup
# db등록
from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbjungle                     # 'dbsparta'라는 이름의 db를 만듭니다.

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(
    'https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303', headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')
# print(soup)  # HTML을 받아온 것을 확인할 수 있다.


#############################
# (입맛에 맞게 코딩)
#############################

# select를 이용해서, tr들을 불러오기
movies = soup.select('#old_content > table.list_ranking > tbody > tr')


# print(len(movies)) # 50

for movie in movies:
    rank = movie.select_one('td.ac > img')
    title = movie.select_one('td.title > div.tit5 > a')
    point = movie.select_one('td.point')
    if (title and rank and point) is not None:
        # print(rank['alt'], title.text, point.text)
        # print(f"{rank['alt']}위 : {title.text} ({point.text})")
        doc = {
            'rank': rank['alt'],
            'title': title.text,
            'point': point.text,
        }
        
        # print(doc)
        db.movies.insert_one(doc)
