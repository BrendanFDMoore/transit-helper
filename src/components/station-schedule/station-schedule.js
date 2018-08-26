import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

import { Box, Hide } from 'rebass';

import { stationsByName } from '../../config/stations';

const pdfFilepath = station => 
  `../../assets/pdfs/${stationsByName[station].line}/${stationsByName[station].miniScheduleFilename}`;

const StationSchedule = ({ station }) => (
  <Box>
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
);

export default StationSchedule;