/* eslint-disable no-unused-vars */

import axios from 'axios';
import getTabellenmiete from './tabellenmiete';
import { emit } from './message';
import convertNum, {
  getBezirk,
  getHausnummerNurNummer,
  getHausnummerZusatz,
  getStrasseOhneLabel,
  round3
} from './lib';
import { WOHNLAGE_ZUSCHLAEGE, WOHNLAGE_LABELS } from './vars';

export const getWohnlage = async (
  adresseStrasse,
  adresseBezirk,
  adresseHausnummer,
  adresseHausnummerZusatz = ''
) =>
  axios({
    url: `https://api.mietendeckel.jetzt/2019/residentialStatus/${adresseBezirk}/${adresseStrasse}/${adresseHausnummer}/${adresseHausnummerZusatz}`,
    validateStatus: status => {
      return true;
    }
  });

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

  const {
    data: {
      resData: { residentialStatus: wohnlage }
    }
  } = await getWohnlage(
    adresseStrasseOhneLabel,
    adresseBezirk,
    adresseHausnummerNurNummer,
    adresseHausnummerZusatz
  );

  if (wohnlage === -1) {
    return emit('res.mietabsenkung.wohnlageNichtErmittelbar', {
      adresseStrasse,
      adresseHausnummer
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
    return emit('res.mietabsenkung.ersparnis', {
      adresseHausnummer,
      adresseStrasse,
      baujahr,
      differenzUeberhoehteMieteNKM: convertNum(differenzUeberhoehteMieteNKM, 2),
      faktorMehrfamilienhaus: istMehrfamilienhaus === true ? 1 : 1.1,
      hatBad: hatBad === true ? 'ja' : 'nein',
      hatSammelheizung: hatSammelheizung === true ? 'ja' : 'nein',
      mietobergrenzeSqm: convertNum(mietobergrenzeSqm, 2),
      modernisierungsUmlage: istModernisierung === true ? 1 : 0,
      nettokaltmieteSqm: convertNum(nettokaltmieteSqm, 2),
      nettokaltmieteTotal: convertNum(nettokaltmiete, 2),
      tabellenmieteSqm: convertNum(tabellenmiete, 2),
      ueberhoehteMieteSqm: convertNum(ueberhoehteMieteSqm, 3),
      ueberhoehteMieteTotal: convertNum(ueberhoehteMieteTotal, 2),
      wohnflaeche: convertNum(wohnflaeche, 2),
      wohnlage: WOHNLAGE_LABELS[wohnlage],
      wohnlageBewertung: convertNum(WOHNLAGE_ZUSCHLAEGE[wohnlage], 2)
    });
  }

  return emit('res.mietabsenkung.keineErsparnis', {
    adresseHausnummer,
    adresseStrasse,
    baujahr,
    differenzUeberhoehteMieteNKM: convertNum(differenzUeberhoehteMieteNKM, 2),
    faktorMehrfamilienhaus: istMehrfamilienhaus === true ? 1 : 1.1,
    hatBad: hatBad === true ? 'ja' : 'nein',
    hatSammelheizung: hatSammelheizung === true ? 'ja' : 'nein',
    mietobergrenzeSqm: convertNum(mietobergrenzeSqm, 2),
    modernisierungsUmlage: istModernisierung === true ? 1 : 0,
    nettokaltmieteSqm: convertNum(nettokaltmieteSqm, 2),
    nettokaltmieteTotal: convertNum(nettokaltmiete, 2),
    tabellenmieteSqm: convertNum(tabellenmiete, 2),
    ueberhoehteMieteSqm: convertNum(ueberhoehteMieteSqm, 3),
    ueberhoehteMieteTotal: convertNum(ueberhoehteMieteTotal, 2),
    wohnflaeche: convertNum(wohnflaeche, 2),
    wohnlage: WOHNLAGE_LABELS[wohnlage],
    wohnlageBewertung: convertNum(WOHNLAGE_ZUSCHLAEGE[wohnlage], 2)
  });
};

export default getMietabsenkung;
