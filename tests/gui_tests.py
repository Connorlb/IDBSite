import unittest
from selenium import webdriver

class TestHome(unittest.TestCase) :
    def setUp(self) :
        self.browser = webdriver.Firefox()

    def testTitle(self) :
        self.browser.get('http://www.pocketchef.me/')
        element = self.browser.find_element_by_tag_name('title')
        text = element.get_attribute("innerText")
        self.assertEqual(text, 'PocketChef')

    def tearDown(self) :
        self.browser.quit()

if __name__ == '__main__' :
    unittest.main(verbosity=2)
