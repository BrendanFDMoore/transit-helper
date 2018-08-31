import React, { Component } from 'react';
import { setOptions as reactPdfSetOptions, Document, Page } from "react-pdf";
import { Box, Hide, Button } from 'rebass';
import styled from "styled-components";

import LoadingDots from '../loading/loading';

import { stationsByName } from '../../config/stations';
import lines from '../../config/lines';

const Loading = styled(LoadingDots)`
  min-height: 200px;
`;

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
    this.state = {
      currentPage: 2,
      isLoaded: false,
    };
  }

  onDocumentLoadSuccess = () => {
    this.setState({ isLoaded: true });
  }

  setPage = page =>
    () => this.setState({ currentPage: page });

  render() {
    const { station } = this.props;
    const { currentPage, isLoaded } = this.state;
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
        { 
          !isLoaded &&
          <Box py={4}>
            <Loading />
          </Box>
        }
        <Document
          file={pdfFilepath(station)}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Hide key="xl" xs sm md lg>
            <Page pageNumber={currentPage} scale={1.9}/>
          </Hide>
          <Hide key="lg" xs sm md xl>
            <Page pageNumber={currentPage} scale={1.65}/>
          </Hide>
          <Hide key="md" xs sm lg xl>
            <Page pageNumber={currentPage} scale={1.45}/>
          </Hide>
          <Hide key="sm" xs md lg xl>
            <Page pageNumber={currentPage} scale={1.15}/>
          </Hide>
          <Hide key="xs" sm md lg xl>
            <Page pageNumber={2} scale={0.80}/>
          </Hide>
        </Document>
      </Box>
    );
  };
};

export default StationSchedule;
