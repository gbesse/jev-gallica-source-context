# Comment la décision est prise

Replace un extrait OCR de Gallica dans son contexte éditorial et distingue information, opinion et publicité.

Le code normalise la source et applique d’abord le cas déterministe documenté dans `src/index.mjs`. Pour les autres dossiers, Jev choisit la catégorie la plus prudente selon le texte OCR, le titre, la rubrique, la date et les marqueurs éditoriaux réellement disponibles, en tenant compte des erreurs de reconnaissance. Une confiance inférieure à `0.8`, la catégorie `review_required` ou une absence de données choisie par le modèle marque le résultat pour revue humaine. Une collection vide explicitement fournie reste un résultat déterministe sans appel Jev.

La pagination, les identifiants ARK, les dates et les liens vers les pages sources restent gérés par le code.

Les démonstrations ne contiennent que des probabilités synthétiques. Constituez un corpus français annoté, mesurez les erreurs par catégorie et fixez vos propres seuils avant un usage opérationnel.
