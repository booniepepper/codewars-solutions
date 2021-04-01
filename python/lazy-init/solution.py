# https://www.codewars.com/kata/59b7b43b4f98a81b2d00000a

# Feels convoluted. ¯\_(ツ)_/¯

def lazy_init(_):
    def get_init(member_names):
        def init(*args):
            instance = args[0]
            member_vals = args[1:]
            members = zip(member_names, member_vals)
            for name, val in members:
                instance.__setattr__(name, val)
        return init
    return get_init

class LazyInit(type):
    def __init__(cls, name, bases, dct):
        members = cls.__init__.__code__.co_varnames[1:]
        
        @lazy_init
        def get_init(): pass
        
        cls.__init__ = get_init(members)

