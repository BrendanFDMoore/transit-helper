import orioleSchedule from 'assets/61-richmondhill/01-oriole.png';
import oldcummerSchedule from 'assets/61-richmondhill/02-oldcummer.png';
import langstaffSchedule from 'assets/61-richmondhill/03-langstaff.png';
import richmondhillSchedule from 'assets/61-richmondhill/04-richmondhill.png';
import gormleySchedule from 'assets/61-richmondhill/05-gormley.png';
import kennedySchedule from 'assets/71-stouffville/03-kennedy.png';
import agincourtSchedule from 'assets/71-stouffville/04-agincourt.png';
import millikenSchedule from 'assets/71-stouffville/05-milliken.png';
import unionvilleSchedule from 'assets/71-stouffville/06-unionville.png';
import centennialSchedule from 'assets/71-stouffville/07-centennial.png';
import markhamSchedule from 'assets/71-stouffville/08-markham.png';
import mountjoySchedule from 'assets/71-stouffville/09-mountjoy.png';
import stouffvilleSchedule from 'assets/71-stouffville/10-stouffville.png';
import lincolnvilleSchedule from 'assets/71-stouffville/11-lincolnville.png';

const stations = {
  oriole: {
    code: 'OR',
    rect: {
      x: 126,
      y: 77.5,
      width: 15,
      height: 4,
    },
    miniSchedule: orioleSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table61.pdf',
    name: 'Oriole',
  },
  oldcummer: {
    code: 'OL',
    rect: {
      x: 126,
      y: 69,
      width: 15,
      height: 6,
    },
    miniSchedule: oldcummerSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table61.pdf',
    name: 'Old Cummer',
  },
  langstaff: {
    code: 'LA',
    rect: {
      x: 131,
      y: 63,
      width: 14,
      height: 4,
    },
    miniSchedule: langstaffSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table61.pdf',
    name: 'Langstaff',
  },
  richmondhill: {
    code: '00062',
    rect: {
      x: 131,
      y: 56.5,
      width: 15,
      height: 5,
    },
    miniSchedule: richmondhillSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table61.pdf',
    name: 'Richmond Hill',
  },
  gormley: {
    code: '02629',
    rect: {
      x: 135.5,
      y: 49,
      width: 15,
      height: 5,
    },
    miniSchedule: gormleySchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table61.pdf',
    name: 'Gormley',
  },
  kennedy: {
    code: 'KE',
    rect: {
      x: 146,
      y: 83,
      width: 13,
      height: 3.5,
    },
    miniSchedule: kennedySchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Kennedy',
  },
  agincourt: {
    code: 'AG',
    rect: {
      x: 146,
      y: 75,
      width: 14,
      height: 3.5,
    },
    miniSchedule: agincourtSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Agincourt',
  },
  milliken: {
    code: 'MK',
    rect: {
      x: 146,
      y: 68.5,
      width: 13,
      height: 3.5,
    },
    miniSchedule: millikenSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Milliken',
  },
  unionville: {
    code: 'UI',
    rect: {
      x: 149.5,
      y: 63.5,
      width: 14,
      height: 3.5,
    },
    miniSchedule: unionvilleSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Unionville',
  },
  centennial: {
    code: 'CA',
    rect: {
      x: 154,
      y: 59.5,
      width: 15,
      height: 3.5,
    },
    miniSchedule: centennialSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Centennial',
  },
  markham: {
    code: '00123',
    rect: {
      x: 158,
      y: 55,
      width: 15,
      height: 4,
    },
    miniSchedule: markhamSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Markham',
  },
  mountjoy: {
    code: 'MJ',
    rect: {
      x: 159,
      y: 48,
      width: 15,
      height: 4,
    },
    miniSchedule: mountjoySchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Mount Joy',
  },
  stouffville: {
    code: 'ST',
    rect: {
      x: 159,
      y: 43,
      width: 15,
      height: 4,
    },
    miniSchedule: stouffvilleSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Stouffville',
  },
  lincolnville: {
    code: 'LI',
    rect: {
      x: 159,
      y: 38,
      width: 17,
      height: 4,
    },
    miniSchedule: lincolnvilleSchedule,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Lincolnville',
  },
  lakeshoreeast: {
    code: 'LKE',
    rect: {
      x: 107,
      y: 125,
      width: 77,
      height: 22,
    },
    miniSchedule: null,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table09.pdf',
    name: 'Lakeshore East Line',
  },
  lakeshorewest: {
    code: 'LKW',
    rect: {
      x: -95,
      y: 160,
      width: 105,
      height: 10,
    },
    miniSchedule: null,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table01.pdf',
    name: 'Lakeshore West Line',
  },
  milton: {
    code: 'MIL',
    rect: {
      x: 40,
      y: 100,
      width: 65,
      height: 27,
    },
    miniSchedule: null,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table21.pdf',
    name: 'Milton Line',
  },
  barrie: {
    code: 'BAR',
    rect: {
      x: 100,
      y: 4,
      width: 25,
      height: 81,
    },
    miniSchedule: null,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table65.pdf',
    name: 'Barrie Line',
  },
  kitchener: {
    code: 'KIT',
    rect: {
      x: 2,
      y: 85,
      width: 105,
      height: 10,
    },
    miniSchedule: null,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table31.pdf',
    name: 'Kitchener Line',
  },
};

export default stations;
