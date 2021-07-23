//DATA STRUCTURE: STACK
/*
A stack processes from outside to inside by using two main operations; push to add an element to the top of a collection and pop to remove the element from the top of the collection. 
*/

/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    An input string is valid if:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.*/ 

/*
STEPS:
5. If the stack is empty after completely iterating over the string, return true because the parentheses in the string are balanced and you have a valid string
*/

s = "()"

//1. Create a stack
let stack = [];
//2. Loop through each element in the string
for(let i = 0; i < s.length; i++){
    let char = stack[stack.length - 1]
    //3. If the elment is an opening bracket, push it onto the stack
    if(s[i] == "(" || s[i] == "{" || s[i] == "["){
        stack.push(s[i])
    } else if((char == "(" && s[i] == ")") ||
    (char == "{" && s[i] == "}") ||
    (char == "[" && s[i] == "]")){
        stack.pop()
    } else{
        return false
    }
    //4. If the element is a closing bracker, pop off the last element from the stack only if it matches with the encounteres closing bracket and keep iterationg through the string. If the closing bracket does not match with the opening bracket places on top of the stack, break out of the loop and return false because the parentheses in the string are not balance.  
    console.log(stack.length ? false : true)
}



