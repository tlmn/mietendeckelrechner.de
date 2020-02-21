import streetsList from '../data/streetsBerlinDistricts.json';

export default function convertNum(value) {
  return value.toFixed(2).replace('.', ',');
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
