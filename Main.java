package br.org.catolicasc.oo;

public class Main {

    public static String getBinaryRecursiveFromDecimal(int number) {
        double divisao;
        String binary = "";

        divisao = number / 2;

        if (number % 2 == 0) {
            binary += "0";
        } else {
            binary += "1";
        }
        if (divisao > 0) {
            return getBinaryRecursiveFromDecimal((int) divisao) + binary;
        } else {
            return binary;
        }
    }
    
    public static String getOctalRecursiveFromDecimal(int number) {
        double divisao;
        double resto;
        String octal = "";

        divisao = (int) number / 8;
        resto = (int)number - ((int)divisao * 8);        
        octal = String.valueOf((int)resto);
       
        if (divisao > 8) {
            return getOctalRecursiveFromDecimal((int) divisao) + octal;
        } else {
            return (int)divisao + octal;
        }
    }
    
    public static String getHexadecimalRecursiveFromDecimal(int number) {
        double divisao;
        double resto;
        String octal = "";

        divisao = (int) number / 16;
        resto = (int)number - ((int)divisao * 16);        
        octal = String.valueOf((int)resto);
       
        if (divisao > 16) {
            return getHexadecimalRecursiveFromDecimal((int) divisao) + octal;
        } else {
            return (int)divisao + octal;
        }
    }

    public static void main(String[] args) throws Exception {
        System.out.println("Decimal -> Binário: " + getBinaryRecursiveFromDecimal(2018));
        System.out.println("Decimal -> Octal: " + getOctalRecursiveFromDecimal(12412));
        System.out.println("Decimal -> Hexa: " + getHexadecimalRecursiveFromDecimal(12412));
    }

}
