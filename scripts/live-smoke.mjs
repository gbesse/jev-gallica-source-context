// Objectif : effectuer un appel Jev synthétique uniquement sur demande explicite.
import { createJevClient } from "../src/jev.mjs";
import { assessArchiveExtract } from "../src/index.mjs";
const client = createJevClient();
const résultat = await assessArchiveExtract({
  "id": "exemple-1",
  "text": "Extrait synthétique placé sous la rubrique « Annonces » avec prix, adresse commerciale et injonction d’achat : les indices convergent vers une publicité.",
  "source": {
    "url": "https://example.test/source-publique",
    "date": "2026-10-01"
  },
  "details": {
    "territoire": "France — cas synthétique",
    "origine": "donnée synthétique"
  }
}, client);
console.log(JSON.stringify({ décision: résultat.decision, confiance: résultat.confidence, usage: résultat.usage }, null, 2));
