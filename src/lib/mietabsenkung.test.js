/* eslint-disable no-unused-vars */
import getMietabsenkung, { getWohnlage } from './mietabsenkung';

describe('Mietabsenkung – Wohnlage', () => {
  const testDataSets = [
    [
      {
        adresseStrasse: 'Spichernstraße',
        adresseBezirk: 'ChWi',
        adresseHausnummer: 1
      },
      2
    ],
    [
      {
        adresseStrasse: 'Jablonskistraße',
        adresseBezirk: 'Pank',
        adresseHausnummer: 9
      },
      2
    ],
    [
      {
        adresseStrasse: 'Jablonskistraße',
        adresseBezirk: 'Pank',
        adresseHausnummer: 39
      },
      1
    ],
    [
      {
        adresseStrasse: 'Ostpreußendamm',
        adresseBezirk: 'StZe',
        adresseHausnummer: 116
      },
      1
    ],
    [
      {
        adresseStrasse: 'Ostpreußendamm',
        adresseBezirk: 'StZe',
        adresseHausnummer: 111
      },
      0
    ],
    [
      {
        adresseStrasse: 'Prinz-Eugen-Straße',
        adresseBezirk: 'Mitt',
        adresseHausnummer: 13
      },
      0
    ]
  ];
  testDataSets.forEach(([testData, expected]) => {
    test('getTabellenmieteBasedOnBaujahr - Wohnlage', async () => {
      const wohnlage = await getWohnlage(...Object.values(testData));
      expect(wohnlage.data.resData.residentialStatus).toBe(expected);
    });
  });
});

describe('Mietabsenkung berechnen', () => {
  const testDataSets = [
    [
      {
        adresseHausnummer: '13',
        adresseStrasse: 'Prinz-Eugen-Straße',
        baujahr: 'vor 1918',
        hatBad: true,
        hatEinbaukueche: true,
        hatGeringenEVK: true,
        hatHochwertigerBoden: true,
        hatHochwertigeSanitaerausstattung: true,
        hatPersonenaufzug: true,
        hatSammelheizung: true,
        istMehrfamilienhaus: true,
        istModernisierung: true,
        nettokaltmiete: 1293,
        wohnflaeche: 50
      },
      {
        key: 'res.mietabsenkung.ersparnis',
        props: {
          differenzUeberhoehteMieteNKM: '802,80',
          nettokaltmieteSqm: '25,86',
          nettokaltmieteTotal: '1293,00',
          ueberhoehteMieteSqm: '9,80',
          ueberhoehteMieteTotal: '490,20'
        }
      }
    ],
    [
      {
        adresseHausnummer: '13',
        adresseStrasse: 'Prinz-Eugen-Straße',
        baujahr: 'vor 1918',
        hatBad: true,
        hatEinbaukueche: true,
        hatGeringenEVK: true,
        hatHochwertigerBoden: true,
        hatHochwertigeSanitaerausstattung: true,
        hatPersonenaufzug: true,
        hatSammelheizung: true,
        istMehrfamilienhaus: true,
        istModernisierung: true,
        nettokaltmiete: 300,
        wohnflaeche: 50
      },
      {
        key: 'res.mietabsenkung.keineErsparnis',
        props: {
          nettokaltmieteSqm: '6,00',
          nettokaltmieteTotal: '300,00',
          ueberhoehteMieteSqm: '9,80',
          ueberhoehteMieteTotal: '490,20'
        }
      }
    ],
    [
      {
        adresseBezirk: 'Mitt',
        adresseHausnummer: '13',
        adresseHausnummerZusatz: '',
        adresseStrasse: 'Prinz-Eugen-Straße',
        baujahr: 'vor 1918',
        hatBad: true,
        hatEinbaukueche: true,
        hatGeringenEVK: true,
        hatHochwertigerBoden: true,
        hatHochwertigeSanitaerausstattung: true,
        hatPersonenaufzug: true,
        hatSammelheizung: true,
        istMehrfamilienhaus: true,
        istModernisierung: true,
        nettokaltmiete: 430.2,
        wohnflaeche: 50
      },
      {
        key: 'res.mietabsenkung.keineErsparnis',
        props: {
          nettokaltmieteSqm: '8,60',
          nettokaltmieteTotal: '430,20',
          ueberhoehteMieteSqm: '8,60',
          ueberhoehteMieteTotal: '430,20'
        }
      }
    ],
    [
      {
        adresseBezirk: 'Mitt',
        adresseHausnummer: '13',
        adresseHausnummerZusatz: '',
        adresseStrasse: 'Prinz-Eugen-Straße',
        baujahr: 'vor 1918',
        hatBad: true,
        hatEinbaukueche: true,
        hatGeringenEVK: true,
        hatHochwertigerBoden: true,
        hatHochwertigeSanitaerausstattung: true,
        hatPersonenaufzug: true,
        hatSammelheizung: true,
        istMehrfamilienhaus: true,
        istModernisierung: true,
        nettokaltmiete: 430.3,
        wohnflaeche: 50
      },
      {
        key: 'res.mietabsenkung.ersparnis',
        props: {
          differenzUeberhoehteMieteNKM: '0,10',
          nettokaltmieteSqm: '8,61',
          nettokaltmieteTotal: '430,30',
          ueberhoehteMieteSqm: '8,60',
          ueberhoehteMieteTotal: '430,20'
        }
      }
    ]
  ];

  testDataSets.forEach(([testData, expected]) => {
    test('getMietabsenkung - Betrag', async () => {
      await getMietabsenkung(...Object.values(testData)).then(res => {
        expect(res).toStrictEqual(expected);
      });
    });
  });
});
