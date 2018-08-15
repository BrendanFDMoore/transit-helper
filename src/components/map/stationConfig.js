import langstaffSchedule from 'assets/61-richmondhill/03-langstaff.png';
import richmondhillSchedule from 'assets/61-richmondhill/04-richmondhill.png';
import mountjoySchedule from 'assets/71-stouffville/09-mountjoy.png';
import stouffvilleSchedule from 'assets/71-stouffville/10-stouffville.png';

const stations = {
  oriole: {
    code: 'OR',
    rect: {
      x: 126,
      y: 77.5,
      width: 15,
      height: 4,
    },
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
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
    miniSchedule: null,
    fullScheduleUrl: 'https://www.gotransit.com/static_files/gotransit/assets/pdf/TripPlanning/FullSchedules/Table71.pdf',
    name: 'Lincolnville',
  },
};

export default stations;