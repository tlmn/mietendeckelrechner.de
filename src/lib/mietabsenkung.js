/* eslint-disable no-unused-vars */
/* eslint-disable no-return-await */
/* eslint-disable import/no-extraneous-dependencies */

import "isomorphic-fetch";

import { WOHNLAGE_LABELS, WOHNLAGE_ZUSCHLAEGE } from "./vars";
import convertNum, {
  getBezirk,
  getHausnummerNurNummer,
  getHausnummerZusatz,
  getStrasseOhneLabel,
  round3,
} from "./lib";

import { emit } from "./message";
import getTabellenmiete from "./tabellenmiete";

export const getWohnlage = async (
  adresseStrasse,
  adresseBezirk,
  adresseHausnummer,
  adresseHausnummerZusatz = " ",
) => {
  const queryString = {
    adresseBezirk,
    adresseStrasse,
    adresseHausnummer,
    adresseHausnummerZusatz,
  };

  return await fetch(
    `https://mdr-api-serverless-2.vercel.app/api/objectStatus?${Object.keys(queryString)
      .map((key) => `${key}=${queryString[key]}`)
      .join("&")}`
  )
    .then((res) => {
      return res.json();
    })
    .then(
      (response) => {
        return response.response !== undefined
          ? response.response.objectstatus
          : -1;
      },
      (error) => {
        return error;
      }
    );
};

const getMietabsenkung = async (
  adresseHausnummer,
  adresseStrasse,
  baujahr,
  hatBad,
  hatEinbaukueche,
  hatGeringenEVK,
  hatHochwertigerBoden,
  hatHochwertigeSanitaerausstattung,
  hatPersonenaufzug,
  hatSammelheizung,
  istMehrfamilienhaus,
  istModernisierung,
  nettokaltmiete,
  wohnflaeche
) => {
  const adresseBezirk = getBezirk(adresseStrasse);
  const adresseStrasseOhneLabel = getStrasseOhneLabel(adresseStrasse);
  const adresseHausnummerZusatz = getHausnummerZusatz(adresseHausnummer);
  const adresseHausnummerNurNummer = getHausnummerNurNummer(adresseHausnummer);

  const requestOrigin =
    typeof window !== "undefined" ? window.location.pathname : "";

  const wohnlage = await getWohnlage(
    adresseStrasseOhneLabel,
    adresseBezirk,
    adresseHausnummerNurNummer,
    adresseHausnummerZusatz
  );

  if (wohnlage === -1) {
    return emit("res.mietabsenkung.wohnlageNichtErmittelbar", {
      adresseStrasse,
      adresseHausnummer,
    });
  }

  const tabellenmiete = getTabellenmiete(
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
  );

  const nettokaltmieteSqm = nettokaltmiete / wohnflaeche;
  const wohnlageBewertung = WOHNLAGE_ZUSCHLAEGE[wohnlage];
  const mietobergrenzeSqm = tabellenmiete + wohnlageBewertung;
  const ueberhoehteMieteSqm = round3(mietobergrenzeSqm * 1.2);
  const ueberhoehteMieteTotal = ueberhoehteMieteSqm * wohnflaeche;
  const differenzUeberhoehteMieteNKM = nettokaltmiete - ueberhoehteMieteTotal;

  const istUeberhoehteMiete = nettokaltmieteSqm > ueberhoehteMieteSqm;

  if (istUeberhoehteMiete) {
    return emit("res.mietabsenkung.ersparnis", {
      adresseHausnummer,
      adresseStrasse,
      baujahr,
      differenzUeberhoehteMieteNKM: convertNum(differenzUeberhoehteMieteNKM, 2),
      faktorMehrfamilienhaus: istMehrfamilienhaus === true ? 1 : 1.1,
      hatBad: hatBad === true ? "ja" : "nein",
      hatSammelheizung: hatSammelheizung === true ? "ja" : "nein",
      mietobergrenzeSqm: convertNum(mietobergrenzeSqm, 2),
      modernisierungsUmlage: istModernisierung === true ? 1 : 0,
      nettokaltmieteSqm: convertNum(nettokaltmieteSqm, 2),
      nettokaltmieteTotal: convertNum(nettokaltmiete, 2),
      tabellenmieteSqm: convertNum(tabellenmiete, 2),
      ueberhoehteMieteSqm: convertNum(ueberhoehteMieteSqm, 3),
      ueberhoehteMieteTotal: convertNum(ueberhoehteMieteTotal, 2),
      wohnflaeche: convertNum(wohnflaeche, 2),
      wohnlage: WOHNLAGE_LABELS[wohnlage],
      wohnlageBewertung: convertNum(WOHNLAGE_ZUSCHLAEGE[wohnlage], 2),
    });
  }

  return emit("res.mietabsenkung.keineErsparnis", {
    adresseHausnummer,
    adresseStrasse,
    baujahr,
    differenzUeberhoehteMieteNKM: convertNum(differenzUeberhoehteMieteNKM, 2),
    faktorMehrfamilienhaus: istMehrfamilienhaus === true ? 1 : 1.1,
    hatBad: hatBad === true ? "ja" : "nein",
    hatSammelheizung: hatSammelheizung === true ? "ja" : "nein",
    mietobergrenzeSqm: convertNum(mietobergrenzeSqm, 2),
    modernisierungsUmlage: istModernisierung === true ? 1 : 0,
    nettokaltmieteSqm: convertNum(nettokaltmieteSqm, 2),
    nettokaltmieteTotal: convertNum(nettokaltmiete, 2),
    tabellenmieteSqm: convertNum(tabellenmiete, 2),
    ueberhoehteMieteSqm: convertNum(ueberhoehteMieteSqm, 3),
    ueberhoehteMieteTotal: convertNum(ueberhoehteMieteTotal, 2),
    wohnflaeche: convertNum(wohnflaeche, 2),
    wohnlage: WOHNLAGE_LABELS[wohnlage],
    wohnlageBewertung: convertNum(WOHNLAGE_ZUSCHLAEGE[wohnlage], 2),
  });
};

export default getMietabsenkung;
