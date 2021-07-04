
number=int(input("Enter the nmber:\n"))
digit_count = 0

while number!=0:
	number = number // 10
	digit_count +=1

print("Total Digits :", digit_count)