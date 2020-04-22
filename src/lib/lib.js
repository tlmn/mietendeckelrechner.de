import streetsList from '../data/streetsBerlinDistricts.json';

export default function convertNum(value, decimalPlace) {
  return value.toFixed(decimalPlace).replace('.', ',');
}

export function round3(value) {
  return Math.round(value * 1000) / 1000;
}

export function getBezirk(streetWithLabel) {
  return streetsList.district[streetsList.label.indexOf(streetWithLabel)];
}

export function getStrasseOhneLabel(streetWithLabel) {
  return streetsList.street[streetsList.label.indexOf(streetWithLabel)];
}

export function getHausnummerNurNummer(houseNumberInput) {
  const pattern = /\d*/;

  if (!houseNumberInput) {
    return null;
  }

  return pattern.test(houseNumberInput)
    ? houseNumberInput.match(pattern)[0]
    : null;
}

export function getHausnummerZusatz(houseNumberInput) {
  const pattern = /([A-Z]|[a-z])/;

  if (!houseNumberInput) {
    return null;
  }

  return pattern.test(houseNumberInput)
    ? houseNumberInput.match(pattern)[0]
    : null;
}
