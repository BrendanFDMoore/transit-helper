import langstaffSchedule from 'assets/61-richmondhill/03-langstaff.png';
import richmondhillSchedule from 'assets/61-richmondhill/04-richmondhill.png';
import mountjoySchedule from 'assets/71-stouffville/09-mountjoy.png';
import stouffvilleSchedule from 'assets/71-stouffville/10-stouffville.png';

const stations = {
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
};

export default stations;
