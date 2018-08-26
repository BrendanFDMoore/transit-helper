import React, { Component } from 'react';
import { Fixed, Heading, Modal, Image, Flex, Box, Panel, Link, Text, Close, ButtonCircle, Hide } from 'rebass';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import ComingSoon from '../coming-soon/coming-soon';

import { stationsByName } from '../../config/stations';
import lines from '../../config/lines';
import stationConfig from '../map/stationConfig';

// This page does not work, currently.
const getDeparturesUrl = stationCode =>
  `https://www.gotransit.com/en/trip-planning/scheduled-departures/station?stationCode=${stationCode}`;

const pdfFilepath = station => 
  `../../assets/pdfs/${stationsByName[station].line}/${stationsByName[station].miniScheduleFilename}`;

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
          <Flex alignItems='center'>
            <Box flex={1} py={1}>
               <Text textAlign='center'>{stationConfig[station].name}</Text>
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
          <Box p={3}>
            <Hide xs sm md lg>
              <Document
                file={pdfFilepath(station)}
                >
                <Page pageNumber={2} scale={1.9}/>
              </Document>
            </Hide>
            <Hide xs sm md xl>
              <Document
                file={pdfFilepath(station)}
                >
                <Page pageNumber={2} scale={1.65}/>
              </Document>
            </Hide>
            <Hide xs sm lg xl>
              <Document
                file={pdfFilepath(station)}
                >
                <Page pageNumber={2} scale={1.45}/>
              </Document>
            </Hide>
            <Hide xs md lg xl>
              <Document
                file={pdfFilepath(station)}
                >
                <Page pageNumber={2} scale={1.15}/>
              </Document>
            </Hide>
            <Hide sm md lg xl>
              <Document
                file={pdfFilepath(station)}
                >
                <Page pageNumber={2} scale={0.80}/>
              </Document>
            </Hide>
          </Box>
        </Flex>
        <Panel.Footer
          color='black'
          borderTop={0}
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
