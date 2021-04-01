# https://www.codewars.com/kata/5962ddfc2f9addd52200001d

def factors(n):
    fs = []
    rem = [n]
    def handle_factor(f):
        if n % f == 0:
            fs.append(f)
            rem[0] /= f
    handle_factor(2)
    i = 3
    while i <= rem[0]:
        handle_factor(i)
        i += 2
    return fs

def find_key(ciphertext):
    print("find_key({})".format(ciphertext))
    num = int(ciphertext, 16)
    facts = [n - 1 for n in factors(num)]
    return facts[0] * facts[1]

