import tabellenmiete, {
  getFulfilledModerneAusstattungMerkmale,
  getTabellenmieteFeld
} from './tabellenmiete';

describe('Tabellenmiete - getTabellenmieteFeld', () => {
  test('getTabellenmieteFeld - with years', () => {
    expect(getTabellenmieteFeld('vor 1918')).toBe(6.45);
    expect(getTabellenmieteFeld('1919 bis 1949')).toBe(6.27);
    expect(getTabellenmieteFeld('1950 bis 1964')).toBe(6.08);
  });

  test('getTabellenmieteFeld - with without heating', () => {
    expect(getTabellenmieteFeld('vor 1918', false)).toBe(5);
    expect(getTabellenmieteFeld('1919 bis 1949', false)).toBe(5.22);
    expect(getTabellenmieteFeld('1950 bis 1964', false)).toBe(5.62);
  });

  test('getTabellenmieteFeld - with without bathroom', () => {
    expect(getTabellenmieteFeld('vor 1918', true, false)).toBe(5);
    expect(getTabellenmieteFeld('1919 bis 1949', true, false)).toBe(5.22);
    expect(getTabellenmieteFeld('1950 bis 1964', true, false)).toBe(5.62);
  });

  test('getTabellenmieteFeld - with without heating and bathroom', () => {
    expect(getTabellenmieteFeld('vor 1918', false, false)).toBe(3.92);
    expect(getTabellenmieteFeld('1919 bis 1949', false, false)).toBe(4.59);
    expect(getTabellenmieteFeld('1950 bis 1964', false, false)).toBe(5.62);
  });
});

describe('Tabellenmiete - getFulfilledModerneAusstattungMerkmale', () => {
  test('getFulfilledModerneAusstattungMerkmale - with one', () => {
    expect(getFulfilledModerneAusstattungMerkmale(true)).toBe(1);
    expect(getFulfilledModerneAusstattungMerkmale(true, true)).toBe(2);
    expect(getFulfilledModerneAusstattungMerkmale(true, true, true)).toBe(3);
  });
});

describe('Tabellenmiete - tabellenmiete', () => {
  const testDataSets = [
    [
      {
        baujahr: 'vor 1918',
        hatSammelheizung: true,
        hatBad: true,
        istMehrfamilienhaus: true,
        hatPersonenaufzug: true,
        hatEinbaukueche: true,
        hatHochwertigeSanitaerausstattung: true,
        hatHochwertigerBoden: true,
        hatGeringenEVK: true,
        istModernisierung: true
      },
      8.45
    ],
    [
      {
        baujahr: 'vor 1918',
        hatSammelheizung: true,
        hatBad: true,
        istMehrfamilienhaus: false,
        hatPersonenaufzug: true,
        hatEinbaukueche: true,
        hatHochwertigeSanitaerausstattung: true,
        hatHochwertigerBoden: true,
        hatGeringenEVK: true,
        istModernisierung: true
      },
      9.095
    ],
    [
      {
        baujahr: '2003 bis 2013',
        hatSammelheizung: false,
        hatBad: false,
        istMehrfamilienhaus: true,
        hatPersonenaufzug: false,
        hatEinbaukueche: false,
        hatHochwertigeSanitaerausstattung: false,
        hatHochwertigerBoden: true,
        hatGeringenEVK: true,
        istModernisierung: false
      },
      9.8
    ],
    [
      {
        baujahr: '2003 bis 2013',
        hatSammelheizung: false,
        hatBad: false,
        istMehrfamilienhaus: true,
        hatPersonenaufzug: false,
        hatEinbaukueche: false,
        hatHochwertigeSanitaerausstattung: false,
        hatHochwertigerBoden: true,
        hatGeringenEVK: true,
        istModernisierung: true
      },
      10.8
    ],
    [
      {
        baujahr: '2003 bis 2013',
        hatSammelheizung: false,
        hatBad: false,
        istMehrfamilienhaus: true,
        hatPersonenaufzug: true,
        hatEinbaukueche: true,
        hatHochwertigeSanitaerausstattung: false,
        hatHochwertigerBoden: true,
        hatGeringenEVK: true,
        istModernisierung: true
      },
      11.8,
      [
        {
          baujahr: '2003 bis 2013',
          hatSammelheizung: false,
          hatBad: false,
          istMehrfamilienhaus: false,
          hatPersonenaufzug: false,
          hatEinbaukueche: false,
          hatHochwertigeSanitaerausstattung: false,
          hatHochwertigerBoden: true,
          hatGeringenEVK: true,
          istModernisierung: false
        },
        10.78
      ],
      [
        {
          baujahr: '2003 bis 2013',
          hatSammelheizung: false,
          hatBad: false,
          istMehrfamilienhaus: false,
          hatPersonenaufzug: false,
          hatEinbaukueche: false,
          hatHochwertigeSanitaerausstattung: false,
          hatHochwertigerBoden: true,
          hatGeringenEVK: true,
          istModernisierung: true
        },
        11.78
      ],
      [
        {
          baujahr: '2003 bis 2013',
          hatSammelheizung: false,
          hatBad: false,
          istMehrfamilienhaus: false,
          hatPersonenaufzug: true,
          hatEinbaukueche: true,
          hatHochwertigeSanitaerausstattung: false,
          hatHochwertigerBoden: true,
          hatGeringenEVK: true,
          istModernisierung: true
        },
        11.78
      ],
      [
        {
          baujahr: '1919 bis 1949',
          hatSammelheizung: true,
          hatBad: false,
          istMehrfamilienhaus: true,
          hatPersonenaufzug: true,
          hatEinbaukueche: true,
          hatHochwertigeSanitaerausstattung: true,
          hatHochwertigerBoden: false,
          hatGeringenEVK: false,
          istModernisierung: false
        },
        6.22
      ],
      [
        {
          baujahr: '1919 bis 1949',
          hatSammelheizung: true,
          hatBad: false,
          istMehrfamilienhaus: true,
          hatPersonenaufzug: true,
          hatEinbaukueche: true,
          hatHochwertigeSanitaerausstattung: true,
          hatHochwertigerBoden: false,
          hatGeringenEVK: false,
          istModernisierung: true
        },
        6.22
      ]
    ]
  ];

  test('tabellenmiete', () => {
    testDataSets.forEach(([testData, expected]) => {
      expect(tabellenmiete(...Object.values(testData))).toBe(expected);
    });
  });
});
