def is_Palindrome(word):
	rev = word[::-1]
	print("Reverse is : " + rev)
	if(rev == word):
		return 1
	return 0

word = input("Enter the word to check if it is palindrome or not\n")
if(is_Palindrome(word) == 1):
	print (word + " is Palindrome")
else:
	print(word + " is not Palindrome")