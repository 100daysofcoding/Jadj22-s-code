#include <stdio.h>
#include <string.h>

typedef struct{
    char titre[100];
    char auteur[100];
    int annee;
} Livre;

void afficherLivre(Livre livre){
    printf("\n---------------------");
    printf("\nTitre : %s\n", livre.titre);
    printf("Auteur : %s\n",livre.auteur);
    printf("Annee : %d\n", livre.annee);
    printf("---------------------\n");
}

int main(){
    Livre bibliotheque[100];
    int nbLivres = 0;

    printf("Combien de livres voulez-vous ajouter ? ");
    scanf("%d", &nbLivres);

    for (int i = 0; i < nbLivres; i++) {
        printf("\nSaisissez les informations pour le livre %d :\n", i + 1);
        
        printf("Titre : ");
        scanf("%s", bibliotheque[i].titre);

        printf("Auteur : ");
        scanf("%s", bibliotheque[i].auteur);

        printf("Annee : ");
        scanf("%d", &bibliotheque[i].annee);
    }

    printf("\nAffichage de la bibliotheque :\n");
    for (int i = 0; i < nbLivres; i++) {
        afficherLivre(bibliotheque[i]);
    }

    return 0;
}
