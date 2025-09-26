# Quizapplikation (Interaktiv och Dynamisk)


## Kort beskrivning

Denna webbaserade quizapplikation är en single-page app (HTML/CSS/JavaScript) där alla frågor och användarinteraktioner hanteras dynamiskt på samma sida. Syftet är att öva DOM-manipulation, tillståndshantering (state), och grundläggande UX.


#Enkel guide: Hur man jobbar med en GitHub-repo utan att sabba varandras kod
## 1. Fork = gör en egen kopia
Gå in på projektet: Grupp-H-Quizz


Klicka på knappen Fork (uppe till höger).
 👉 Nu har du en egen kopia av projektet på ditt eget GitHub-konto.



## 2. Clone = ladda ner till datorn
På din egen fork (din kopia), klicka på Code → välj SSH eller HTTPS → kopiera länken.
 Öppna terminal/PowerShell och skriv:
```bash
git clone <länken du kopierade>
```
👉 Nu har du projektet på din dator.

## 3. Skapa en ny gren (branch) för ditt jobb
Jobba aldrig direkt i main. Skapa en gren (branch) för din ändring:
git checkout -b min-ändring

👉 Nu jobbar du i en “egen låda” där du kan göra dina ändringar utan att störa andra.

## 4. Gör ändringar + spara dem (commit)
Efter att du ändrat kod:
```bash
git add .
git commit -m "Jag la till min grej"
```

👉 Du har nu sparat dina ändringar lokalt.

## 5. Ladda upp till din fork på GitHub

```bash
git push origin min-ändring
```
👉 Nu ligger dina ändringar på din fork (din egen GitHub-kopia).

## 6. Skicka en Pull Request
Gå in på din fork på GitHub.


Du kommer se en knapp: Compare & pull request.


Klicka → skriv en kort förklaring → skapa Pull Request.
 👉 Då ber du om att dina ändringar ska läggas in i originalprojektet.



## 7. När ändringen godkänns
Någon i gruppen godkänner din PR. Då läggs din kod in i originalprojektet.
 Sedan kan du ta bort din gamla branch och börja på en ny nästa gång.

### Kortfattad “fusklapp”
Fork = gör en egen kopia av projektet


Clone = ladda ner din kopia till datorn


Branch = gör en egen gren för din ändring


Commit = spara ändringar lokalt


Push = skicka upp ändringarna till din kopia


Pull Request = fråga om att lägga in dina ändringar i originalet
