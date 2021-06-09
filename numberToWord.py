def numberToWord(n, suffix):

    if n == 0:
        return zero

    if n > 19:
        return Y[n // 10] + X[n % 10] + suffix
    else:
        return X[n] + suffix

def convert(n):
    if n == 0 :
        return "Zero"

    res = numberToWord(( n // 10000000000000000000) % 100, "Maha Shankh ")

    res += numberToWord(( n // 100000000000000000) % 100, "Shankh ")

    res += numberToWord(( n // 1000000000000000) % 100, "Padma ")

    res += numberToWord(( n // 10000000000000) % 100, "Neel ")

    res += numberToWord(( n // 100000000000) % 100, "Kharab ")

    res += numberToWord((n // 1000000000) % 100, "Arab ")

    res += numberToWord((n // 10000000) % 100, "Crore ")

    res += numberToWord(((n // 100000) % 100), "Lakh ")

    res += numberToWord(((n // 1000) % 100), "Thousand ")

    res += numberToWord(((n // 100) % 10), "Hundred ")

    res += numberToWord((n % 100), "")

    return res


if __name__ == '__main__':


    zero = ""

    X = [zero, "One ", "Two ", "Three ", "Four ", "Five ", "Six ",
         "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ",
         "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ",
         "Seventeen ", "Eighteen ", "Nineteen "]

    Y = [zero, zero, "Twenty ", "Thirty ", "Forty ", "Fifty ",
         "Sixty ", "Seventy ", "Eighty ", "Ninety "]

    ui = 'yes'

    inputNum = input("Enter the Number which you want to convert to Words\n");
    ip = int(inputNum)
    print(convert(ip))
    if len(inputNum) > 21 :
        print("Exceeded the limit for processing. Please enter it again.")
            
                
                
        