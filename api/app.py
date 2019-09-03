import hug
from hug.middleware import CORSMiddleware

# middleware to accept localhost 
api = hug.API(__name__)
api.http.add_middleware(
  CORSMiddleware(api, allow_origins=["http://localhost:6075"]))

# post url call /test  
@hug.post('/test')
def test(body):
    scoreText = 0
    scoreNumeric = 0
    scoreBinary = 0
    points = 20
    if body['usPresident'] == 'DONALD TRUMP':
        scoreText += points
    if body['longestRiver'] == 'NILE' or body['longestRiver'] == 'NILE RIVER':
        scoreText += points
    if body['largestCountry'] == 'RUSSIA':
        scoreText += points
    if body['southafrica'] == 'ZAR':
        scoreText += points
    if int(body['multiply']) == 12:
        scoreNumeric += points
    if int(body['multiply2']) == 10:
        scoreNumeric += points
    if int(body['largestNumber']) == 19:
        scoreNumeric += points
    if int(body['primenumber']) == 97:
        scoreNumeric += points
    if body['mammal'].upper() == 'NO':
        scoreBinary += points
    if body['human'].upper() == 'NO':
        scoreBinary += points
    if body['herbivores'].upper() == 'NO':
        scoreBinary += points
    if body['spider'].upper() == 'YES':
        scoreBinary += points

    return {'scoreText': scoreText, 'scoreNumeric': scoreNumeric, 'scoreBinary': scoreBinary}
