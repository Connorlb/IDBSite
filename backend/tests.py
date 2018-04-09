import unittest
import formatter

class Test1(unittest.TestCase) :
    def testIngredientsFormatter(self) :
        res = [["ing", "redients"], ["ing","redients"]]
        inp = "ing::redients@@ing::redients"
        out = formatter.ingredient_formatter(inp)
        self.assertEqual(out, res)

class Test2(unittest.TestCase) :
    def testStripPunctuation(self) :
        res = "testsuccess"
        inp = "test,success"
        out = formatter.strip_punctuation(inp)
        self.assertEqual(out, res)


if __name__ == '__main__' :
    unittest.main(verbosity=2)
