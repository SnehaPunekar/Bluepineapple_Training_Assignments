# Program to perform matrix multiplication.

row1 = int(input("Enter the number of rows in Matrix 1 \n"))
col1 = int(input("Enter the number of columns in Matrix 1\n"))
row2 = int(input("Enter the number of rows in Matrix 2\n"))
col2 = int(input("Enter the number of columns in Matrix 2\n"))

if(col1 == row2):
	print("Enter the elements of Matrix 1")
	mat1 = [[int(input()) for i in range (col1)] for j in range (row1)]
	print("Matrix 1:")
	for i in range(row1):
		for j in range(col1):
			print(format(mat1[i][j],"<3"),end="")
		print()
 
	print("Enter the elements of Matrix 2")
	mat2 = [[int(input()) for i in range (col2)] for j in range (row2)]
	print("Matrix 2:")
	for i in range(row2):
		for j in range(col2):
			print(format(mat2[i][j],"<3"),end="")
		print()

	result = [[0 for i in range (col2)] for j in range(row1)]

	for i in range (row1):
		for j in range (col2):
			for k in range(col1):
				result[i][j] = result[i][j] + mat1[i][k] * mat2[k][j]

	print("Multiplication is:")
	for i in range(row1):
		for j in range(col2):
			print(format(result[i][j],"<3"),end="")
		print()

else:
	print("Number of columns in Matrix 1 and number of rows in Matrix 2 must be same to find out Multipliacation of Matrix")
