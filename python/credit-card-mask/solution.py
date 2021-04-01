# https://www.codewars.com/kata/5412509bd436bd33920011bc

# return masked string
def maskify(cc):
    mask_until = 4
    cc_len = len(cc)
    if (cc_len <= mask_until):
        return cc

    start = '#' * (cc_len - mask_until)
    end = cc[-mask_until:]
    return start + end

