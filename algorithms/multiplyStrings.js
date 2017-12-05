/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
	var n1 = str2Num(num1),
		n2 = str2Num(num2),
		shorter = n1.length < n2.length ? n1 : n2,
		longer = shorter === n1 ? n2 : n1,
		results = [];
	
	for(var i = 0; i < longer.length; i++) {
		results.push(
			mutiplier(longer.concat([]), i, shorter[i])
		);
	}

	results = results.reduce(add, [0]);

	return num2Str(results);

	// num [ Number ] (lower digits -> higher)
	function str2Num(str) {
		return str
			.split('')
			.map(val => parseInt(val))
			.reverse(); 
	}
	function num2Str(num) {
		return num
			.reverse()
			.join('');
	}
	function add(n1, n2) {
		var carry = 0,
			shorter = n1.length < n2.length ? n1 : n2
			longer = shorter === n1 ? n2 : n1;

		for (var i = 0; i < shorter.length; i++) {
			carry = adder(longer, i, shorter[i] + carry);
		}

		while(carry) {
			carry = adder(longer, i++, 1);
		}

		return longer;
	}
	function mutiplier(num, position, val) {
		if (!val) {
			return [0];
		}

		var carry = 0,
			product;

		for (var i = 0; i < num.length; i++) {
			product = num[i] * val + carry; 
			num[i] = product % 10;
			carry = Math.floor(product / 10);
		}

		if (carry) {
			num.push(carry);
		}

		while(position--) {
			num.unshift(0);
		}


		return num;
	}
	function adder(num, position, val) {
		if (!val) return 0;
		var carry = 0,
			sum;

		if (position >= num.length) {
			var delta = position - num.length;
			while(delta--) {
				num.push(0);
			}
			num.push(val);
		} else {
			sum = num[position] + val;
			num[position] = sum % 10;
			carry = Math.floor(sum / 10);
		}

		return carry;
	}
};
