from itertools import permutations

def allPermutations(str):
        
     permute = permutations(string)
     for i in list(permute):
         print (''.join(i))
        
if __name__ == "__main__":
    string = input("Enter the string\n")
    allPermutations(string)