import requests
from html.parser import HTMLParser

class CodeScraper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.code = []
        self.code_index = 0
        self.care = False

    def handle_starttag(self, tag, attrs):
        if (tag == 'code'):
            self.care = True

    def handle_data(self, data):
        if (self.care):
            self.code[self.code_index] += data + "\n"

    def handle_endtag(self, tag):
        if (tag == 'code'):
            self.care = False
            self.code_index += 1

    def get_code(self):
        return self.code

def get_page():
    pass

scraper = CodeScraper()

response = requests.get('https://www.codewars.com/kata/5583d268479559400d000064/solutions/c/me')

print(response.text)

scraper.feed(response.text)

print(scraper.get_code())

