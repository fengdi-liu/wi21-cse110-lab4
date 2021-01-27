#### Solution ####

1. Before the function call, nothing will happen for line 11, since there is nothing to pass in. But after the function call, the line 11 will print out: 3, since the code is displying the i, which is the total number of prices.

1. Before the function call, nothing will happen for line 12, since there is nothing to pass in. But after the function call, the line 12 will print out: 150, since the code is displying the last price's discounted price, which is 300 * 0.5 = 150.

1. Before the function call, nothing will happen for line 13, since there is nothing to pass in. But after the function call, the line 13 will print out: 150, since the code is displying the last price's final price, which is  300 * 0.5 = 150.

4. The function will return:[ 50, 100, 150 ], since the function call will return the discounted, which is final price. And there are three prices passed in, each price times 0.5 will be their final price.

5. Before the function call, nothing will happen for line 11, since there is nothing to pass in. But after the function call, the line 11 will print out: 3, since the code is displying the i, which with let keyword, and let can be used in a loop, so which will display the total number of prices.

6. Before the function call, nothing will happen for line 12, since there is nothing to pass in. But after the function call, error showed  "ReferenceError: discountedPrice is not defined". The variable discounted and finalPrice are defined as let, which is fine. But the "discountedPrice" is defined as let type in side a for loop, and for the let behave, it is not allowed to use inside the loop.  

7. Before the function call, nothing will happen for line 13, since there is nothing to pass in. But after the function call,error showed  "ReferenceError: discountedPrice is not defined". The variable discounted and finalPrice are defined as let, which is fine. But the "discountedPrice" is defined as let type in side a for loop, and for the let behave, it is not allowed to use inside the loop. And "finalPrice" is related to "discountedPrice", so error will keep to here. 

8. The function returns "Reference Error", since variables declared with the "let" keyword have block scope, let can not with other let in same scope.   

9. Before the function call, nothing will happen for line 11, since there is nothing to pass in. But after the function call, TypeError: Assignment to constant variable. showed, Because variables defined with const behave like let variables, except they cannot be reassigned.

10. Before the function call, nothing will happen for line 12, since there is nothing to pass in. But after the function call, TypeError: Assignment to constant variable. showed, Because variables defined with const behave like let variables, except they cannot be reassigned.

11. Before the function call, nothing will happen for line 13, since there is nothing to pass in. But after the function call, TypeError: Assignment to constant variable. showed, Because variables defined with const behave like let variables, except they cannot be reassigned.

12. It will return TypeError, since the const data type, which not allow us change the data value. 

13. - a. When accessing the value of the name in the studnet object, will return "Sarah"
    - b. When accessing the value of the Grad Year property in the student object, will return 2022
    - c. Calling the function for the greeting property in the student object, will return "Hello"
    - d. Accessing the name property of the object in the Favorite Teacher property in student, will return { name: 'Thomas Powell', course: 'CSE 110' }
    - e. Access the first index in the array of the courseLoad property of the student object, will return CSE 110
    
14. - a. output is 32, since the 3 inside " ",2 was converted to a string, so "3" +2 will consider two string, the answer is 32.
    - b. output is 1, since the 3 there is converted to integer, 3-2 =1, the answer is 1.
    - c. output is 3, because null converted into 0. 3+0=3.
    - d. output is 3null, because null is converted into string "null".
    - e. output is 4, because true here was converted into 1, 3+1=4.
    - f. output is 0, because false is considered as 0, null converted into 0.
    - g. output is 3undefined, because undefined is converted into string.
    - h. output is NaN, because the variabl is not a number so show me NaN. 
