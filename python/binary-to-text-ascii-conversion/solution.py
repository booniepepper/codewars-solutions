# https://www.codewars.com/kata/5583d268479559400d000064

import binascii

def binary_to_string(binary):
    if (binary == ''): return ''
    hex_str = '{0:x}'.format(int(binary, 2))
    return binascii.unhexlify(hex_str).decode('ascii')

