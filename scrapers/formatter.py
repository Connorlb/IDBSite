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
