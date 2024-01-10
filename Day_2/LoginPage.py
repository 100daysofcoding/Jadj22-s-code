import customtkinter as ctk
import sqlite3

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("dark-blue")

# Création de la fenêtre principale
login = ctk.CTk()
login.geometry("400x500")
login.title("Icloud")
login.resizable(False, True)

# Création de la base de données et de la table
connection = sqlite3.connect("users.db")
cursor = connection.cursor()
cursor.execute("CREATE TABLE IF NOT EXISTS users (username TEXT PRIMARY KEY, password TEXT)")
connection.commit()

def connexion():
    username = champ1.get()
    password = champ2.get()
    if username and password:
        try:
            cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))
            connection.commit()
            print("Bienvenue")
        except sqlite3.IntegrityError:
            print("Ce nom d'utilisateur existe déjà.")
    else:
        print("Veuillez saisir un nom d'utilisateur et un mot de passe.")

def Identifiant_Apple_ou_mot_de_passe_oublié():
    print("Identifiant  ou mot de passe oublié ")

def Créer_un_identifiant_Apple():
    print("Créer un identifiant ")

# Création du frame
frame = ctk.CTkFrame(master=login)
frame.pack(pady=40, padx=60, fill='both', expand=True)

# Création du titre en gras
label = ctk.CTkLabel(master=frame, text="Se connecter avec un identifiant ")
label.pack(pady=12, padx=10)

champ1 = ctk.CTkEntry(master=frame, placeholder_text="Identifiant")
champ1.pack(pady=12)

champ2 = ctk.CTkEntry(master=frame, placeholder_text="Mot de passe", show="*")
champ2.pack(pady=12)

button = ctk.CTkButton(master=frame, text="Connexion", command=connexion)
button.pack(pady=12, padx=10)

checkbox = ctk.CTkCheckBox(master=frame, text="Rester connecté")
checkbox.pack(pady=12, padx=10)

# Label personnalisé pour button2
class ClickableLabel2(ctk.CTkLabel):
    def __init__(self, master=None, *args, **kwargs):
        super().__init__(master, *args, **kwargs)
        self.bind("<Button-1>", self._on_label_click)

    def _on_label_click(self, event):
        Identifiant_Apple_ou_mot_de_passe_oublié()

button2 = ClickableLabel2(master=frame, text="Identifiant ou mot de passe oublié ?")
button2.pack(pady=1, padx=10)

# Label personnalisé pour button3
class ClickableLabel3(ctk.CTkLabel):
    def __init__(self, master=None, *args, **kwargs):
        super().__init__(master, *args, **kwargs)
        self.bind("<Button-1>", self._on_label_click)

    def _on_label_click(self, event):
        Créer_un_identifiant_Apple()

button3 = ClickableLabel3(master=frame, text="Créer un identifiant")
button3.pack(pady=1, padx=10)

login.mainloop()

