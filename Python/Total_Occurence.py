number=input("Enter the number\n")

digits = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0}

for n in number:
	digits[n]+=1

print(digits)


