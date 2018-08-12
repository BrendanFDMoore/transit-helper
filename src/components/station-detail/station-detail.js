import React, { Component } from "react";
import { Fixed, Heading, Modal, Image, Flex, Box, Panel, Link, Text } from "rebass";
import stationConfig from '../map/stationConfig';
import ComingSoon from '../coming-soon/coming-soon'

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
      xonClick={onModalClick}
      p={1}
      width={[0.8, 0.7, 0.6, 0.5]}
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
          {stationConfig[station].name}
        </Panel.Header>
        <Box p={3}>
          {
            stationConfig[station].miniSchedule ? 
            <Image
              src={stationConfig[station].miniSchedule}
            />
            : <ComingSoon text="Mini schedule" />
          }
        </Box>
        <Panel.Footer
          color='black'
          borderTop={0}
          xborderColor='green'
        >
          <Flex>
            <Box flex={1}>
              <Link
                href={stationConfig[station].fullScheduleUrl}
                target="_blank"
              >
                <Text textAlign='center'>Full Schedule</Text>
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
