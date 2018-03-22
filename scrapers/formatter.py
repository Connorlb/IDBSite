# Strips all punctuation from a string
def strip_punctuation(s) :
    return ''.join(c for c in s if c not in punctuation)
cuisine_list = set()

# Formats recipeIDs into a list of tuples
def formatter(s) :
    result = []
    with open(s) as f :
        for line in f:
            s = line.split(': ')
            s[1] = s[1].replace('\n', '')
            s[1] = s[1].split(' ')
            for i in range(len(s[1])) :
                s[1][i] = int(s[1][i])
            result += (s,)
    return result

# Formats ingredient string into a list of tuples
def ingredient_formatter(s) :
    result = []
    out = s.split('@@')
    for i in range(len(out)):
        out[i] = out[i].split('::')
