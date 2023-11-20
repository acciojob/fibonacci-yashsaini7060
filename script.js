function fibonacci(num) {
// your code here
		if(num==1)
		return 0;
	else if(num==2)
		return 1;
		
	var current_indx=3
	var a = 0;
	var b = 1
	var c;
	while(num!=current_indx-1){
	    c=a+b;
	    a=b;
	    b=c
	    current_indx++;
	}
	return c;
}

module.exports = fibonacci;
