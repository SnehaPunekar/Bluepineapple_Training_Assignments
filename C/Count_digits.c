#include<stdio.h>

void main(){
	int number;
	int count_digit=0;
	
	printf("Enter the number\n");
	scanf("%d",&number);

    while(number!=0){
    	number=number/10;
    	count_digit += 1;
    }

    printf("Digits :%d",count_digit);


}