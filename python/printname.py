people = [{'name': 'bob', 'age': 20},
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'smith', 'age': 17},
          {'name': 'ben', 'age': 27}]

def printAge(who) :
  for person in people :
    # print(person['name'])
    if (person['name'] == who):
      print(person['name'], '은', person['age'], '살입니다.')   
      
printAge('bob')