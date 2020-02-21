import axios from 'axios';
import getTabellenmiete from './tabellenmiete';
import { emit } from './message';
import convertNum, {
  getBezirk,
  getHausnummerNurNummer,
  getHausnummerZusatz,
  getStrasseOhneLabel
} from './lib';
import { WOHNLAGE_ZUSCHLAEGE } from './vars';

export const getWohnlage = async (
  adresseStrasse,
  adresseBezirk,
  adresseHausnummer,
  adresseHausnummerZusatz = ''
) =>
  axios(
    `https://api.mietendeckel.jetzt/2019/residentialStatus/${adresseBezirk}/${adresseStrasse}/${adresseHausnummer}/${adresseHausnummerZusatz}`
  );

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

  if (wohnlage === undefined) {
    return emit('res.mietabsenkung.wohnlageNichtErmittelbar');
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
  const ueberhoehteMieteSqm = (tabellenmiete + wohnlageBewertung) * 1.2;
  const ueberhoehteMieteTotal = ueberhoehteMieteSqm * wohnflaeche;
  const differenzUeberhoehteMieteNKM = nettokaltmiete - ueberhoehteMieteTotal;

  const istUeberhoehteMiete = nettokaltmieteSqm > ueberhoehteMieteSqm;

  if (istUeberhoehteMiete) {
    return emit('res.mietabsenkung.ersparnis', {
      differenzUeberhoehteMieteNKM: convertNum(differenzUeberhoehteMieteNKM),
      nettokaltmieteSqm: convertNum(nettokaltmieteSqm),
      nettokaltmieteTotal: convertNum(nettokaltmiete),
      ueberhoehteMieteTotal: convertNum(ueberhoehteMieteTotal),
      ueberhoehteMieteSqm: convertNum(ueberhoehteMieteSqm)
    });
  }

  return emit('res.mietabsenkung.keineErsparnis', {
    nettokaltmieteSqm: convertNum(nettokaltmieteSqm),
    nettokaltmieteTotal: convertNum(nettokaltmiete),
    ueberhoehteMieteTotal: convertNum(ueberhoehteMieteTotal),
    ueberhoehteMieteSqm: convertNum(ueberhoehteMieteSqm)
  });
};

export default getMietabsenkung;
