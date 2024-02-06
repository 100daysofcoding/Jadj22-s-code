public class Test {
    public static void main(String[] args) {
        Voiture voiture = new Voiture(2002, 25000.0);
        Camion camion = new Camion(2020, 50000.0);

        System.out.println(voiture)
        voiture.demarrer();
        voiture.accelerer();

        System.out.println();

        System.out.println(camion);
        camion.demarrer();
        camion.accelerer();
    }
    
}
