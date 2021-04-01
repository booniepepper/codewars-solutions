// https://www.codewars.com/kata/556deca17c58da83c00002db

std::vector<int> tribonacci(std::vector<int> signature, int n)
{
    std::vector<int> result;

    int a, b, c, d;
    for (int i = 0; i < n; i++) {
        if (i >= 3) {
            d = a + b + c;
        }
        else {
            d = signature[i];
        }
        result.push_back(d);
        a = b; b = c; c = d;
    }

    return result;
}

