import unittest
import time
from selenium import webdriver

class Test1(unittest.TestCase) :
    def setUp(self) :
        self.browser = webdriver.Firefox()

    def testTitle(self) :
        self.browser.get('http://www.pocketchef.me/')
        element = self.browser.find_element_by_tag_name('title')
        text = element.get_attribute("innerText")
        self.assertEqual(text, 'PocketChef')

    def tearDown(self) :
        self.browser.quit()

class Test2(unittest.TestCase) :
    def setUp(self) :
        self.browser = webdriver.Firefox()

    def testLink(self) :
        self.browser.get('http://www.pocketchef.me/restaurants')
        element = self.browser.find_element_by_class_name('navbar-brand')
        element.click()
        time.sleep(2)
        currentURL = self.browser.current_url
        self.assertEqual(currentURL, u'http://www.pocketchef.me/')

    def tearDown(self) :
        self.browser.quit()

if __name__ == '__main__' :
    unittest.main(verbosity=2)
