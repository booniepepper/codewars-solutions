# https://www.codewars.com/kata/565f5825379664a26b00007c

def get_size(w, h, d):
    surface_area = (w*h + w*d + h*d) * 2
    volume = w*h*d
    return [surface_area, volume]

