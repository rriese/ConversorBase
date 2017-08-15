function getBinaryFromDecimal(number) {
    var divisao, binary = '';
    //var number = 10;

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
    if (divisao > 8) {
        octal = getOctalFromDecimal(Math.trunc(divisao)) + octal;
        return octal;
    } else {
        return Math.trunc(divisao) + '' + octal;
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
        return Math.trunc(divisao) + '' + hexa;
    }
}

function getLetter(number) {
	if (number >= 10 && number < 15) {
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

function getDecimalFromBinary(number) {
	var soma = 0, render, result;
	for(var i = number.toString().length; i >= 0; i--) {
		render = number.toString().charAt(i);
		result = render.toString() == '0' ? Math.pow(2, i) * 0 : Math.pow(2, i) * 1;
		soma += result;
	}
	return soma;
}