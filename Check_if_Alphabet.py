# Write a program to check if given character is alphabet or not. */

ch=input("Enter the character:\n")

if((ch>='a' and ch<='z') or (ch>='A' and ch<='Z')):
	print(ch, "is an Alphabet.")
else:
	print(ch, "is not an Alphabet.")
