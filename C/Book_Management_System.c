#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Book{
	int id;
	char book_name[40];
	char book_author[40];
	float book_cost;
	struct Book *next;
};

struct Book *head = NULL;
struct Book *temp = NULL;

void Add_Book(int d, char name[],char author[],float cost){
	struct Book *new;
	new = (struct Book *)malloc(sizeof(struct Book));
	new->id = d;
	// if(Search_by_id(d)==1){
	// 	printf("This book is already with us.\n Please enter new Book");
	// }
	strcpy(new->book_name, name);
	strcpy(new->book_author, author);
	new->book_cost = cost;
	new->next = NULL;
	if(head==NULL){
		head=new;
	}
	else{
		temp=head;
		while(temp->next!=NULL){
			temp= temp->next;
		}
		temp->next=new;
		new->next=NULL;
	}
	printf("Book Added Successfully.\n");
}

int Search_by_id(int d){
	temp=head;
	while(temp!=NULL){
		if(temp->id == d)
			return 1;
		temp=temp->next;
	}	
}

int Search_by_name(char name[]){
	temp=head;
	while(temp!=NULL){
		if(strcmp(temp->book_name,name)==0)
			return 1;
		temp=temp->next;
	}
}

void delete(int d){
	struct Book *temp1;
	int flag=0;
	if(head==NULL){
		printf("No books are present to delete.\n");
	}
	else{
		if(Search_by_id(d)==1){
		temp=head;
		while(temp->id!=d){
			temp1=temp;
			temp=temp->next;
		}
		temp1->next=temp->next;
		free(temp);
		flag = 1;
		printf("Book Deleted\n");
    	// if(flag == 0){
   		// printf("Book with id: %d is not there.");
    	// }
	}
}
}

void display(){
	if(head==NULL){
		printf("No books are present in a list.\n");
	}
	else{
	temp=head;
	while(temp!=NULL){
		printf("Book id :%d\n",temp->id);
		printf("Book Name : %s\n",temp->book_name);
		printf("Book Author: %s\n",temp->book_author);
		printf("Cost :%f\n",temp->book_cost);
		temp = temp->next;
		}
	}
}

int main(){
	int c,x,d,data;
	char name[40],author[40],book[40];
	float cost;
	while(1){
	printf("Enter your Choice.\n");
	printf("1.Add a Book\n");
	printf("2.Search a Book\n");
	printf("3.Delete a Book\n");
	printf("4.Display all\n");
	printf("5.Quit\n");
	scanf("%d",&x);

	switch(x){
		case 1:
			printf("Enter the id of book\n");
			scanf("%d",&d);
			printf("Enter the name of book\n");
			scanf("%s",name);
			printf("Enter the name of author\n");
			scanf("%s",author);
			printf("Enter the cost of book\n");
			scanf("%f",&cost);
			Add_Book(d,name,author,cost);
			break;

		case 2:
			printf("Select how you want search the book\n");
			printf("1.Search by id\n");
			printf("2.Search by name\n");
			scanf("%d",&c);
			if(c==1){
				printf("Enter the id of book to search\n");
				scanf("%d",&data);
				if(Search_by_id(data)){
					printf("Book exists with id : %d\n",data);
				}
				else{
					printf("Book with id %d doesnt exists.\n",data);
				}
			}
			else if(c==2){
				printf("Enter the name of book to search\n");
				scanf("%s",book);
				if(Search_by_name(book)==1){
					printf("Book exists with name : %s\n",book);
				}
				else{
					printf("Book with name %s doesnt exists.\n",book);
					}
				}
			break;

		case 3:
			printf("Enter the id of book to be deleted\n");
			scanf("%d",&d);
			delete(d);
			break;

		case 4:
			display();
			break;

		case 5:
			exit(0);
			break;

		default:
			printf("Invalid Choice.\n");
		}
	}
	return 0;
}