# Maître Philippe Quaghebeur — Site Notaire

Site vitrine professionnel pour Maître Philippe Quaghebeur, Notaire.

## 📁 Structure du projet

```
site notaire Phillipe Quaghebeur/
├── index.html          # Page principale (one-page)
├── css/
│   └── style.css       # Tous les styles (thème or, noir, ivoire)
├── js/
│   └── main.js         # Interactions, animations, formulaire
├── images/             # Dossier pour vos photos (à remplir)
└── README.md
```

## 🎨 Design

- **Style** : Élégant & classique — Or `#C9A84C` · Noir `#0D0D0D` · Ivoire `#F8F4EC`
- **Typographie** : Cormorant Garamond (titres) + Montserrat (corps)
- **Animations** : Scroll reveal, compteurs animés, transitions fluides

## 📄 Sections

1. **Accueil (Hero)** — accroche visuelle plein écran
2. **Bandeau chiffres** — 20 ans, 2500 actes, 98% satisfaction
3. **Expertises** — 5 domaines (Immobilier, Famille, Successions, Sociétés, Patrimoine)
4. **Le Cabinet** — présentation du notaire
5. **Citation** — section inspirationnelle
6. **Honoraires** — 3 cartes tarifaires
7. **Contact** — formulaire + coordonnées

## 🛠️ Personnalisation à faire

1. **Adresse et téléphone** : Chercher `À compléter` dans `index.html` et remplacer
2. **Photo du notaire** : Ajouter `images/notaire.jpg` et remplacer le placeholder
3. **Logo** : Optionnel — remplacer l'icône ⚖ par votre logo SVG
4. **Email** : Remplacer `contact@notaire-quaghebeur.fr` par le vrai email
5. **Formulaire** : Connecter à Netlify Forms (voir ci-dessous)

## 📬 Activer le formulaire Netlify

Ajouter `netlify` dans la balise form :

```html
<form class="contact-form" id="contact-form" name="contact" netlify>
```

Et ajouter ce champ caché :
```html
<input type="hidden" name="form-name" value="contact" />
```

## 🚀 Déploiement

Pusher sur GitHub → Netlify déploie automatiquement.

```bash
git init
git add .
git commit -m "Site notaire Quaghebeur - version initiale"
git remote add origin https://github.com/louloulam/site-Phillipe-Quaghebeur-.git
git branch -M main
git push -u origin main
```
