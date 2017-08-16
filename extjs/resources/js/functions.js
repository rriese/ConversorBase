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
		if (number >= 10) {
			return number > 15 ? Math.trunc(divisao) + '' + hexa : hexa;
		} else {
			return parseInt(number);
		}
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
			
		}
	}
	return soma;
}

function getOctalNumber(bin) {
	switch (bin) {
		case '000':
			return 0;
		case '001':
			return 1;
		case '010':
			return 2;
		case '011':
			return 3;
		case '100':
			return 4;
		case '101':
			return 5;
		case '110':
			return 6;
		case '111':
			return 7;
		default:
			return 0;
	}
}

function getOctalFromBinary(number) {
	var bin = '', octal = '';
	
	for(var i = 0; i < number.length; i++) {
		bin += number.charAt(i);
		if (bin.length == 3) {
			octal += getOctalNumber(bin);
			bin = '';
		}
	}
	return octal;
}