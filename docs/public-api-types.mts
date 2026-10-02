// Objectif : vérifier les types publiés depuis un projet consommateur.
import { archiveExtractCase, assessArchiveExtract, DECISIONS } from "../src/index.mjs";
import { createFakeProvider } from "../src/jev.mjs";
const dossier = archiveExtractCase({
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
});
void DECISIONS;
void assessArchiveExtract(dossier, createFakeProvider(() => ({})));
