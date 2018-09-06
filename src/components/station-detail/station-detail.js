import React from 'react';
import { Fixed, Modal, Flex, Box, Panel, Link, Text, ButtonCircle } from 'rebass';

import ComingSoon from '../coming-soon/coming-soon';
import StationSchedule from '../station-schedule/station-schedule';

import { stationsByName } from '../../config/stations';
import lines from '../../config/lines';

// This page does not work, currently.
const getDeparturesUrl = stationCode =>
  `https://www.gotransit.com/en/trip-planning/scheduled-departures/station?stationCode=${stationCode}`;

const StationDetail = ({ station, onModalClick }) => (
  <div>
    <Fixed
      top={0}
      right={0}
      bottom={0}
      left={0}
      onClick={onModalClick}
    />
    <Modal
      p={1}
      width={[0.9, 0.8, 0.7, 0.6]}
      maxHeight={'90vh'}
    >
      <Panel
        color='white'
        border={1}
        borderColor='black'
      >
        <Panel.Header
          color='white'
          borderBottom={0}
          borderColor='green'
          bg='black'>
          <Flex alignItems='center'>
            <Box flex={1} py={1}>
               <Text textAlign='center'>{stationsByName[station].name}</Text>
            </Box>
            <Box>
              <ButtonCircle
                bg='white'
                px={1}
                py={1}
                color='black'
                fontSize={1}
                fontWeight='bold'
                onClick={onModalClick}
                children='X'
              />
            </Box>
          </Flex>
        </Panel.Header>
        <Flex
          justifyContent="space-around"
        >
          <Box p={2}>
            {
              stationsByName[station].miniScheduleFilename
              ? <StationSchedule station={station} />
              : <ComingSoon />
            }
          </Box>
        </Flex>
        <Panel.Footer
          color='black'
          borderTop={0}
        >
          <Flex>
            <Box flex={1}>
              <Link
                href={lines[stationsByName[station].line].fullScheduleUrl}
                download={true}
              >
                <Text textAlign='center'>Full {lines[stationsByName[station].line].name} Line Schedule</Text>
              </Link>
            </Box>
            {/* Note: these station links do not currently resolve as expected. */}
            {/* <Box  flex={1}>
              <Link
                href={getDeparturesUrl(stationConfig[station].code)}
                target="_blank"
              >
                <Text textAlign='center'>Departures</Text>
              </Link>
            </Box> */}
          </Flex>
        </Panel.Footer>
      </Panel>
    </Modal>
  </div>
);

export default StationDetail;
