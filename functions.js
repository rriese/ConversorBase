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
	var divisao, octal = '', resto;

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
	var divisao, hexa = '', resto;
	
	divisao = Math.trunc(number / 16);
	resto = Math.trunc(number) - (Math.trunc(divisao * 16));
	hexa = Math.trunc(resto);
	if (divisao > 16) {
		hexa = getHexadecimalFromDecimal(Math.trunc(divisao)) + hexa;
		return hexa;
	} else {
		return Math.trunc(divisao) + '' + hexa;
	}
}