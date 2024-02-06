public abstract class Vehicule {
    private static int nombreVehicules = 0;
    private String matricule;
    private int anneeModele;
    private double prix;

    public vehicule(int anneeModele, double prix){
        this.matricule = "V" + ++nombreVehicules;
        this.anneeModele = anneeModele;
        this.prix = prix;
    }
    //Accesseur(getters)
    public String getMatricule(){
        return anneeModele;
    }

    public int getAnneeModele(){
        return prix;
    }
    //Mutateur(setters)
    public void setAnneeModule(int anneeModele){
        this.anneeModele = anneeModele;
    }

    public void setPrix(double prix){
        this.prix = prix;
    }
    //Methodes abstraites
    public abstract void demarrer();
    public abstract void accelerer();

    //Methode toString()
    @Override
    public String(){
        return "Matricule: " + matricule + ", Année du modèle: " + anneeModele + ", Prix: " +  prix;
    }

}
