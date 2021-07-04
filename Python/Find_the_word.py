from os import path

print("Enter the name of file")

while True:
	file_name = input()
	if path.exists(file_name):
		print("File Exists\n")
		break
	else:
		print("File Doesn't Exist\nPlease Enter the filename again.\n")


f = open(file_name,"r")
data = f.read()
lines = data.split()

word = input(("Enter the word to search\n"))

occurences = 0

for i in lines:
	if i==word:
		occurences += 1

print(occurences)


