const stations = [
  {
    name: 'Milton',
    code: 'ML',
    miniScheduleFilename: 'Milton-Union.pdf',
    line: 'milton',
    rect: {
      x: 40,
      y: 116.5,
      width: 12,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Lisgar',
    code: 'LS',
    miniScheduleFilename: 'Lisgar-Union.pdf',
    line: 'milton',
    rect: {
      x: 52,
      y: 104.5,
      width: 12,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Kipling',
    code: 'KP',
    miniScheduleFilename: 'Kipling-Union.pdf',
    line: 'milton',
    rect: {
      x: 100,
      y: 104.5,
      width: 11,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Dixie',
    code: 'DI',
    miniScheduleFilename: 'Dixie-Union.pdf',
    line: 'milton',
    rect: {
      x: 88,
      y: 110,
      width: 10,
      height: 5,
    },
    pages: {
      east: 2,
      west: 1,
    },
  },
  {
    name: 'Cooksville',
    code: 'CO',
    miniScheduleFilename: 'Cooksville-Union.pdf',
    line: 'milton',
    rect: {
      x: 88,
      y: 116.5,
      width: 15,
      height: 5,
    },
    pages: {
      east: 2,
      west: 1,
    },
  },
  {
    name: 'Erindale',
    code: 'ER',
    miniScheduleFilename: 'Erindale-Union.pdf',
    line: 'milton',
    rect: {
      x: 82,
      y: 122,
      width: 13,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Streetsville',
    code: 'SR',
    miniScheduleFilename: 'Streetsville-Union.pdf',
    line: 'milton',
    rect: {
      x: 62,
      y: 116.5,
      width: 18,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Meadowvale',
    code: 'ME',
    miniScheduleFilename: 'Meadowvale-Union.pdf',
    line: 'milton',
    rect: {
      x: 68,
      y: 109.5,
      width: 16,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Exhibition',
    code: 'EX',
    miniScheduleFilename: 'Exhibition-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 117,
      y: 110.5,
      width: 13,
      height: 4,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Mimico',
    code: 'MI',
    miniScheduleFilename: 'Mimico-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 111,
      y: 116.5,
      width: 11,
      height: 4,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Long Branch',
    code: 'LO',
    miniScheduleFilename: 'LongBranch-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 106,
      y: 121.5,
      width: 17,
      height: 4,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Port Credit',
    code: 'PO',
    miniScheduleFilename: 'PortCredit-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 98,
      y: 128.5,
      width: 15,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Clarkson',
    code: 'CL',
    miniScheduleFilename: 'Clarkson-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 90,
      y: 137,
      width: 13,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Oakville',
    code: 'OA',
    miniScheduleFilename: 'Oakville-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 79,
      y: 148,
      width: 12,
      height: 5,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Bronte',
    code: 'BO',
    miniScheduleFilename: 'Bronte-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 73,
      y: 154,
      width: 11,
      height: 4,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Appleby',
    code: 'AP',
    miniScheduleFilename: 'Appleby-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 68,
      y: 159,
      width: 12,
      height: 4,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Burlington',
    code: 'BU',
    miniScheduleFilename: 'Burlington-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 64,
      y: 163.5,
      width: 14,
      height: 4,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Aldershot',
    code: 'AL',
    miniScheduleFilename: 'Aldershot-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 59,
      y: 168.5,
      width: 14,
      height: 4,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'West Harbour',
    code: 'WR',
    miniScheduleFilename: 'WestHarbour-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 57,
      y: 179,
      width: 14,
      height: 6,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'St Catharines',
    code: 'SCTH',
    miniScheduleFilename: null,
    line: 'lakeshorewest',
    rect: {
      x: 118,
      y: 176.5,
      width: 14,
      height: 6,
    },
  },
  {
    name: 'Niagara Falls',
    code: 'NI',
    miniScheduleFilename: 'NiagaraFalls-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 151,
      y: 178,
      width: 18,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Hamilton',
    code: 'HA',
    miniScheduleFilename: 'Hamilton-Union.pdf',
    line: 'lakeshorewest',
    rect: {
      x: 38,
      y: 177,
      width: 16,
      height: 4.5,
    },
  },
  {
    name: 'Kitchener',
    code: 'KI',
    miniScheduleFilename: 'Kitchener-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 2,
      y: 85,
      width: 12,
      height: 6,
    },
    pages: {
      east: 2,
      west: 1,
    },
  },
  {
    name: 'Pearson',
    code: 'PA',
    miniScheduleFilename: 'Pearson-Union.pdf',
    line: 'kitchener',
    rect: {},
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Guelph',
    code: 'GL',
    miniScheduleFilename: 'GuelphCentral-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 17,
      y: 88.5,
      width: 8,
      height: 5.5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Acton',
    code: 'AC',
    miniScheduleFilename: 'Acton-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 26.5,
      y: 85,
      width: 7.5,
      height: 6,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Georgetown',
    code: 'GE',
    miniScheduleFilename: 'Georgetown-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 35,
      y: 88.5,
      width: 13,
      height: 5.5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Mount Pleasant',
    code: 'MO',
    miniScheduleFilename: 'MountPleasant-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 46,
      y: 85,
      width: 13,
      height: 6,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Brampton',
    code: 'BR',
    miniScheduleFilename: 'Brampton-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 60,
      y: 88.5,
      width: 10.5,
      height: 5.5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Bramalea',
    code: 'BE',
    miniScheduleFilename: 'Bramalea-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 68,
      y: 85,
      width: 11,
      height: 6,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Malton',
    code: 'MA',
    miniScheduleFilename: 'Malton-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 78,
      y: 88.5,
      width: 8,
      height: 5.5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Etobicoke North',
    code: 'ET',
    miniScheduleFilename: 'EtobicokeNorth-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 86,
      y: 84,
      width: 11,
      height: 7,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Weston',
    code: 'WE',
    miniScheduleFilename: 'Weston-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 97.5,
      y: 85,
      width: 8,
      height: 7,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Bloor',
    code: 'BL',
    miniScheduleFilename: 'Bloor-Union.pdf',
    line: 'kitchener',
    rect: {
      x: 102,
      y: 95.5,
      width: 11,
      height: 5,
    },
    pages: {
      east: 2,
      west: 2,
    },
  },
  {
    name: 'Centennial',
    code: 'CE',
    miniScheduleFilename: 'Centennial-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 154,
      y: 59.5,
      width: 15,
      height: 3.5,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Markham',
    code: 'MR',
    miniScheduleFilename: 'Markham-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 158,
      y: 55,
      width: 15,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Mount Joy',
    code: 'MJ',
    miniScheduleFilename: 'MountJoy-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 159,
      y: 48,
      width: 15,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Stouffville',
    code: 'ST',
    miniScheduleFilename: 'Stouffville-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 159,
      y: 43,
      width: 15,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Lincolnville',
    code: 'LI',
    miniScheduleFilename: 'Lincolnville-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 159,
      y: 38,
      width: 17,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Agincourt',
    code: 'AG',
    miniScheduleFilename: 'Agincourt-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 146,
      y: 75,
      width: 14,
      height: 3.5,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Milliken',
    code: 'MK',
    miniScheduleFilename: 'Milliken-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 146,
      y: 68.5,
      width: 13,
      height: 3.5,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Unionville',
    code: 'UI',
    miniScheduleFilename: 'Unionville-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 149.5,
      y: 63.5,
      width: 14,
      height: 3.5,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Kennedy',
    code: 'KE',
    miniScheduleFilename: 'Kennedy-Union.pdf',
    line: 'stouffville',
    rect: {
      x: 146,
      y: 83,
      width: 13,
      height: 3.5,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Richmond Hill',
    code: 'RI',
    miniScheduleFilename: 'RichmondHill-Union.pdf',
    line: 'richmondhill',
    rect: {
      x: 131,
      y: 56.5,
      width: 15,
      height: 5,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Langstaff',
    code: 'LA',
    miniScheduleFilename: 'Langstaff-Union.pdf',
    line: 'richmondhill',
    rect: {
      x: 131,
      y: 63,
      width: 14,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Old Cummer',
    code: 'OL',
    miniScheduleFilename: 'OldCummer-Union.pdf',
    line: 'richmondhill',
    rect: {
      x: 126,
      y: 69,
      width: 15,
      height: 6,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Oriole',
    code: 'OR',
    miniScheduleFilename: 'Oriole-Union.pdf',
    line: 'richmondhill',
    rect: {
      x: 126,
      y: 77.5,
      width: 15,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Gormley',
    code: 'GO',
    miniScheduleFilename: 'Gormley-Union.pdf',
    line: 'richmondhill',
    rect: {
      x: 135.5,
      y: 49,
      width: 15,
      height: 5,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Downsview Park',
    code: 'DO',
    miniScheduleFilename: 'DownsviewPark-Union.pdf',
    line: 'barrie',
    rect: {
      x: 102,
      y: 78.5,
      width: 17,
      height: 6,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'York University',
    code: 'YO',
    miniScheduleFilename: 'YorkUniversity-Union.pdf',
    line: 'barrie',
    rect: {
      x: 102,
      y: 71.5,
      width: 17,
      height: 6,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Rutherford',
    code: 'RU',
    miniScheduleFilename: 'Rutherford-Union.pdf',
    line: 'barrie',
    rect: {
      x: 102,
      y: 65.5,
      width: 17,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Maple',
    code: 'MP',
    miniScheduleFilename: 'Maple-Union.pdf',
    line: 'barrie',
    rect: {
      x: 106,
      y: 60,
      width: 13,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'King City',
    code: 'KC',
    miniScheduleFilename: 'KingCity-Union.pdf',
    line: 'barrie',
    rect: {
      x: 104,
      y: 53.5,
      width: 15,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Aurora',
    code: 'AU',
    miniScheduleFilename: 'Aurora-Union.pdf',
    line: 'barrie',
    rect: {
      x: 112,
      y: 44,
      width: 13.5,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Newmarket (Train Station)',
    code: 'NE',
    miniScheduleFilename: 'NewmarketGoTrainStation-Union.pdf',
    line: 'barrie',
    rect: {
      x: 108,
      y: 37.5,
      width: 17.5,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Newmarket (Bus Terminal)',
    code: '00001',
    miniScheduleFilename: 'NewmarketBusTerminal-Union.pdf',
    line: 'barrie',
    rect: {},
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'East Gwillimbury',
    code: 'EA',
    miniScheduleFilename: 'EastGwillimbury-Union.pdf',
    line: 'barrie',
    rect: {
      x: 120,
      y: 30,
      width: 17,
      height: 6,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Bradford',
    code: 'BD',
    miniScheduleFilename: 'Bradford-Union.pdf',
    line: 'barrie',
    rect: {
      x: 105,
      y: 24.5,
      width: 15,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Barrie South',
    code: 'BA',
    miniScheduleFilename: 'BarrieSouth-Union.pdf',
    line: 'barrie',
    rect: {
      x: 100,
      y: 15,
      width: 19,
      height: 4,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Allandale Waterfront',
    code: 'AD',
    miniScheduleFilename: 'AllandaleWaterfront-Union.pdf',
    line: 'barrie',
    rect: {
      x: 100,
      y: 4,
      width: 19,
      height: 6,
    },
    pages: {
      south: 2,
      north: 2,
    },
  },
  {
    name: 'Danforth',
    code: 'DA',
    miniScheduleFilename: 'Danforth-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 140.5,
      y: 102.5,
      width: 13,
      height: 5,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Scarborough',
    code: 'SC',
    miniScheduleFilename: 'Scarborough-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 145.5,
      y: 98,
      width: 17,
      height: 4,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Eglinton',
    code: 'EG',
    miniScheduleFilename: 'Eglinton-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 151,
      y: 93.5,
      width: 12,
      height: 4,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Guildwood',
    code: 'GU',
    miniScheduleFilename: 'Guildwood-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 155.5,
      y: 89.5,
      width: 14,
      height: 3.5,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Rouge Hill',
    code: 'RO',
    // typo in filename is deliberate to match GO transit typo...
    miniScheduleFilename: 'RogueHill-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 159.5,
      y: 85,
      width: 14,
      height: 4,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Pickering',
    code: 'PIN',
    miniScheduleFilename: 'Pickering-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 174.5,
      y: 82,
      width: 10,
      height: 6,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Ajax',
    code: 'AJ',
    miniScheduleFilename: 'Ajax-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 190.5,
      y: 84.5,
      width: 5,
      height: 6,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Whitby',
    code: 'WH',
    miniScheduleFilename: 'Whitby-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 196,
      y: 82,
      width: 7,
      height: 6,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
  {
    name: 'Oshawa',
    code: 'OS',
    miniScheduleFilename: 'Oshawa-Union-Exhibition.pdf',
    line: 'lakeshoreeast',
    rect: {
      x: 205,
      y: 84.5,
      width: 10,
      height: 6,
    },
    pages: {
      east: 1,
      west: 2,
    },
  },
];

// Disable this export when running downloadpdfs script
export default stations;

export const stationsByName = stations.reduce((acc, curr) =>
  ({...acc, [curr.name.replace(/\s+/g, '').toLowerCase()]: curr}) ,{});

// Use this export for running the downloadpdfs script
// exports.stations = stations;
