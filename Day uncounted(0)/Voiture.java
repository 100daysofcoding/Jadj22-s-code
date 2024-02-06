public class Voiture extends Vehicule {
    public Voiture(int anneeModele, double prix){
        super(anneeModele, prix);
    }
    @Override
    public void demarrer(){
        System.out.println("La voiture démarre.");
    }
    @Override
    public void accelerer(){
        System.out.println("La voiture accélère.");
    }
}
