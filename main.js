module.exports = {
	taxCalculator: function(num) {
		var tax = 0;
		if(num>30){
			tax +=((10*10)+(10*7)+(10*5)+((num-30)*3));
		}
		else if(num>20 && num<=30){
			tax +=((10*10)+(10*7)+((num-20)*5));
		}
		else if(num>10 && num<=20){
			tax += ((10*10)+((num-10)*7));
		}
		else if (num<=10){
			tax += num*10;
		}
		tax = tax/100;
		return tax;
	}
}
