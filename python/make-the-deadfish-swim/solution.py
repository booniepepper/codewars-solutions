# https://www.codewars.com/kata/51e0007c1f9378fa810002a9

class Deadfish:
    commands = {
        'i': lambda df: df.i(),
        'd': lambda df: df.d(),
        's': lambda df: df.s(),
        'o': lambda df: df.o()
    }

    def __init__(self):
        self.value = 0
        self.outputs = []

    def i(self): self.value += 1
    def d(self): self.value -= 1
    def s(self): self.value **= 2
    def o(self): self.outputs.append(self.value)

    def apply(self, command):
        try: Deadfish.commands[command](self)
        except KeyError: pass

def parse(commands):
    df = Deadfish()
    [df.apply(c) for c in commands]
    return df.outputs

