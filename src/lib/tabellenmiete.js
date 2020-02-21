/* eslint-disable no-unused-expressions */
import { tabellenMieteInitial, baujahrsklassen } from './vars';

export const getTabellenmieteFeld = (
  baujahr,
  hatSammelheizung = true,
  hatBad = true
) => {
  const baujahrsklasse = baujahrsklassen.indexOf(baujahr);

  const sammelheizungBadFeld = (hatSammelheizung ? 0 : 1) + (hatBad ? 0 : 1); // Feld für Bad und Sammelheizung bestimmen

  return tabellenMieteInitial[baujahrsklasse][sammelheizungBadFeld]; // Feld für Ausgangstabellenmiete bestimmen;
};

export const getFulfilledModerneAusstattungMerkmale = (...args) =>
  [...args].filter(Boolean).length;

export default (
  baujahr,
  hatSammelheizung,
  hatBad,
  istMehrfamilienhaus,
  hatPersonenaufzug,
  hatEinbaukueche,
  hatHochwertigeSanitaerausstattung,
  hatHochwertigerBoden,
  hatGeringenEVK,
  istModernisierung
) => {
  const faktorMehrFamilienhaus = istMehrfamilienhaus ? 1 : 1.1;

  // Tabellenmiete nach Baujahr und Grundausstattung ermitteln §6 Abs. 1
  const tabellenMieteFeld = getTabellenmieteFeld(
    baujahr,
    hatSammelheizung,
    hatBad
  );

  // Summe der Merkmale einer modernen Ausstattung §6 Abs. 3
  const countModerneAusstattungMerkmale = getFulfilledModerneAusstattungMerkmale(
    hatPersonenaufzug,
    hatEinbaukueche,
    hatHochwertigeSanitaerausstattung,
    hatHochwertigerBoden,
    hatGeringenEVK
  );
  const zuschlagModernisierung = istModernisierung ? 1 : 0;
  const zuschlagWohnwert = countModerneAusstattungMerkmale >= 3 ? 1 : 0;

  return parseFloat(
    tabellenMieteFeld * faktorMehrFamilienhaus +
      zuschlagModernisierung +
      zuschlagWohnwert
  );
};
