function getBinaryFromDecimal(number) {
    var divisao, binary = '';

    divisao = number / 2;

    if (divisao > 0) {
        if (Number.isInteger(divisao)) {
            binary = '0';
        } else {
            binary = '1';
        }
        binary = getBinaryFromDecimal(Math.trunc(divisao)) + binary;
        return binary;
    } else {
        return '';
    }
}

function getOctalFromDecimal(number) {
    var divisao, octal = '',
        resto;

    divisao = Math.trunc(number / 8);
    resto = Math.trunc(number) - (Math.trunc(divisao * 8));
    octal = Math.trunc(resto);
    if (divisao >= 8) {
        octal = getOctalFromDecimal(Math.trunc(divisao)) + octal;
        return octal;
    } else {
        return divisao != '0' ? Math.trunc(divisao) + '' + octal : octal;
    }
}

function getHexadecimalFromDecimal(number) {
    var divisao, hexa = '',
        resto;

    divisao = Math.trunc(number / 16);
    resto = Math.trunc(number) - (Math.trunc(divisao * 16));
    hexa = getLetter(Math.trunc(resto));
    if (divisao > 16) {
        hexa = getHexadecimalFromDecimal(Math.trunc(divisao)) + hexa;
        return hexa;
    } else {
		if (number >= 10) {
			return number > 15 ? Math.trunc(divisao) + '' + hexa : hexa;
		} else {
			return parseInt(number);
		}
    }
}

function getDecFromHexa(letter) {
	letter = letter.toString().toUpperCase();
	switch (letter) {
		case 'A':
			return 10;
		case 'B':
			return 11;
		case 'C':
			return 12;
		case 'D':
			return 13;
		case 'E':
			return 14;
		case 'F':
			return 15;
		default:
			return letter;
	}
}

function getLetter(number) {
	if (number >= 10 && number <= 15) {
		switch (number) {
			case 10:
				return 'A';
			case 11:
				return 'B';
			case 12:
				return 'C';
			case 13:
				return 'D';
			case 14:
				return 'E';
			case 15:
				return 'F';
			default:
				return '';
		}
	} else {
		return number;
	}
}

function getDecimal(number, base) {
	var soma = 0, result;
	for(var i = 0; i < number.length; i++) {
		if (base == 2) {
			soma += number.charAt(i) == '1' ? Math.pow(base, (number.length-1)-i) : 0;
		} else if (base == 8) {
			soma += Math.pow(base, (number.length-1)-i) * parseInt(number.charAt(i));
		} else if (base == 16) {
			soma += Math.pow(base, (number.length-1)-i) * parseInt(getDecFromHexa(number.charAt(i)));
		}
	}
	return soma;
}

function getOctalNumber(number) {
	var numbers = new Map();
	numbers.set('0', '000');
	numbers.set('1', '001');
	numbers.set('2', '010');
	numbers.set('3', '011');
	numbers.set('4', '100');
	numbers.set('5', '101');
	numbers.set('6', '110');
	numbers.set('7', '111');
	
	for (var [key, value] of numbers) {
		if (number == key) return value;
		if (number == value) return key;
	}
	return '0';
}

function getBinaryFromOctal(number) {
	var bin = '';
	
	for(var i = 0; i < number.toString().length; i++) {
		bin += getOctalNumber(number.toString().charAt(i));
	}
	return bin;
}