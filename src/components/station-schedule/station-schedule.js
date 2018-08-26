import React, { Component } from 'react';
import { setOptions as reactPdfSetOptions, Document, Page } from "react-pdf";

import { Box, Hide, Link, Button } from 'rebass';

import { stationsByName } from '../../config/stations';
import lines from '../../config/lines';

reactPdfSetOptions({
  workerSrc: "/static/pdf.worker.min.js"
});

const pdfFilepath = station => 
  `../../assets/pdfs/${stationsByName[station].line}/${stationsByName[station].miniScheduleFilename}`;

const schedulePages = station => {
  const directions = lines[stationsByName[station].line].majorDirections;
  const pages = [
    { direction: directions.am, page: stationsByName[station].pages[directions.am] },
    { direction: directions.pm, page: stationsByName[station].pages[directions.pm] },
  ];

  // Only return pages if distinct
  return pages[0].page !== pages[1].page ? pages : [];
};

class StationSchedule extends Component {
  constructor() {
    super();
    this.state = { currentPage: 2 };
  }

  setPage = page =>
    () => this.setState({ currentPage: page });

  render() {
    const { station } = this.props;
    const { currentPage } = this.state;
    return (
      <Box>
        <Box>
          {
            schedulePages(station).map(p =>
              <Button
                key={p.direction}
                mx={2}
                my={1}
                onClick={this.setPage(p.page)}
              >
                { p.direction }
              </Button>
            )
          }
        </Box>
        <Document
          file={pdfFilepath(station)}
          >
          <Hide xs sm md lg>
            <Page pageNumber={currentPage} scale={1.9}/>
          </Hide>
          <Hide xs sm md xl>
            <Page pageNumber={currentPage} scale={1.65}/>
          </Hide>
          <Hide xs sm lg xl>
            <Page pageNumber={currentPage} scale={1.45}/>
          </Hide>
          <Hide xs md lg xl>
            <Page pageNumber={currentPage} scale={1.15}/>
          </Hide>
          <Hide sm md lg xl>
            <Page pageNumber={2} scale={0.80}/>
          </Hide>
        </Document>
      </Box>
    );
  };
};

export default StationSchedule;