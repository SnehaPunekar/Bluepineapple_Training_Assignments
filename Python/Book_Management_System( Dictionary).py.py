books = {}

def add_book():
	book = input("Enter the name of book\n")
	author = input("Enter the author of book\n")

	books[book] = author
	print("Book added successfully.\n")

def search():
	if books:
		print("1.Search by Book name")
		print("2.Search by Author name")
		x = int(input("Enter the choice\n"))
		if x==1:
			book_name = input("Enter the name of book to search.\n")
			if books.get(book_name):
				print("Book exists.\n")
			else:
				print("Book does not exists.\n")
			
		elif x==2:
			author_name = input("Enter the author of book to search.\n")
			if author_name in books.values():
				print("Book exists.\n")
			else:
				print("Book does not exists.\n")
	else:
		print("No books are present to search.")
		

def delete_a_book():
	if books:
		print("1.Delete by Book name")
		print("2.Delete by Author name")
		x = int(input("Enter the choice\n"))
		if x==1:
			book_name = input("Enter the name of book delete.\n")
			del books[book_name]
			print(book_name + " deleted successfully.")
		elif x==2:
			author_name = input("Enter the author of book delete.")
			del books[author_name]
			print("Book with author " + author_name + "deleted successfully.\n")
	else:
		print("No books are present to delete.")


def display():
	if books:
		print(books)
	else:
		print("No books are present to display.")

while True:
	print("1.Add a book.")
	print("2.Search a book.")
	print("3.Delete a book.")
	print("4.Display all.")
	print("5.Quit.")
	x = int(input("Enter your Choice.\n"))
	if x==1:
		add_book()
	elif x==2:
		search()
		
	elif x==3:
		delete_a_book()
		
	elif x==4:
		display()
	
	elif x==5:
		exit()

	else:
		print("Invalid Choice.\n")
		break














