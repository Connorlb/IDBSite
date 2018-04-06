import unittest
import time
from selenium import webdriver

# Test home page html title element
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

# Test navbar logo hyperlink
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

# Test carousel
class Test3(unittest.TestCase) :
    def setUp(self) :
        self.browser = webdriver.Firefox()

    def testCarousel(self) :
        self.browser.get('http://www.pocketchef.me/')
        item_elements = self.browser.find_elements_by_class_name("item")
        active_item_elements = self.browser.find_elements_by_class_name("item active")
        self.assertEqual(len(item_elements), 2)
        self.assertEqual(len(active_item_elements), 1)

    def tearDown(self) :
        self.browser.quit()

# Test about page team member biography elements
class Test4(unittest.TestCase) :
    def setUp(self) :
        self.browser = webdriver.Firefox()

    def testAbout(self) :
        self.browser.get('http://www.pocketchef.me/about')
        col_elements = self.browser.find_elements_by_class_name("col-sm-4 col-xs-12")
        offset_col_elements = self.browser.find_elements_by_class_name("col-sm-4 col-sm-offset-2 col-xs-12")
        self.assertEqual(len(col_elements), 4)
        self.assertEqual(len(offset_col_elements), 1)

    def tearDown(self) :
        self.browser.quit()

# Test API endpoint
class Test4(unittest.TestCase) :
    def setUp(self) :
        self.browser = webdriver.Firefox()

    def testApi(self) :
        self.browser.get('http://www.pocketchef.me/api/restaurants2')
        elements = self.browser.find_elements_by_tag_name('pre')
        self.assertEqual(len(elements), 1)

    def tearDown(self) :
        self.browser.quit()

if __name__ == '__main__' :
    unittest.main(verbosity=2)
