import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import { Box, Hide } from 'rebass';

import { stationsByName } from '../../config/stations';

const pdfFilepath = station => 
  `../../assets/pdfs/${stationsByName[station].line}/${stationsByName[station].miniScheduleFilename}`;

const StationSchedule = ({ station }) => (
  <Box>
    <Document
      file={pdfFilepath(station)}
      >
      <Hide xs sm md lg>
        <Page pageNumber={2} scale={1.9}/>
      </Hide>
      <Hide xs sm md xl>
        <Page pageNumber={2} scale={1.65}/>
      </Hide>
      <Hide xs sm lg xl>
        <Page pageNumber={2} scale={1.45}/>
      </Hide>
      <Hide xs md lg xl>
        <Page pageNumber={2} scale={1.15}/>
      </Hide>
      <Hide sm md lg xl>
        <Page pageNumber={2} scale={0.80}/>
      </Hide>
    </Document>
  </Box>
);

export default StationSchedule;