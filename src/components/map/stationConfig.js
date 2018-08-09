import langstaffSchedule from 'assets/61-richmondhill/03-langstaff.png';
import richmondhillSchedule from 'assets/61-richmondhill/04-richmondhill.png';
import mountjoySchedule from 'assets/71-stouffville/09-mountjoy.png';
import stouffvilleSchedule from 'assets/71-stouffville/10-stouffville.png';

const stations = {
  langstaff: {
    rect: {
      x: 131,
      y: 63,
      width: 14,
      height: 4,
    },
    miniSchedule: langstaffSchedule,
    name: 'Langstaff',
  },
  richmondhill: {
    rect: {
      x: 131,
      y: 56.5,
      width: 15,
      height: 5,
    },
    miniSchedule: richmondhillSchedule,
    name: 'Richmond Hill',
  },
  mountjoy: {
    rect: {
      x: 159,
      y: 48,
      width: 15,
      height: 4,
    },
    miniSchedule: mountjoySchedule,
    name: 'Mount Joy',
  },
  stouffville: {
    rect: {
      x: 159,
      y: 43,
      width: 15,
      height: 4,
    },
    miniSchedule: stouffvilleSchedule,
    name: 'Stouffville',
  },
};

export default stations;
