# Script PowerShell - Renommer l'image pour qu'elle fonctionne avec le CSS
$source = "C:\Users\HP\Desktop\site notaire Phillipe Quaghebeur\images\image d'acceuil.jpeg"
$dest = "C:\Users\HP\Desktop\site notaire Phillipe Quaghebeur\images\hero.jpg"

if (Test-Path $source) {
    Copy-Item $source $dest -Force
    Write-Host "OK - hero.jpg cree avec succes!"
} else {
    Write-Host "Fichier source introuvable: $source"
}
