import React, { Component } from 'react';
import { setOptions as reactPdfSetOptions, Document, Page } from "react-pdf";
import { Box, Hide, Button, Link } from 'rebass';
import styled from "styled-components";

import LoadingDots from '../loading/loading';

import { stationsByName } from '../../config/stations';
import lines from '../../config/lines';
import directions from '../../config/directions';

const Loading = styled(LoadingDots)`
  min-height: 200px;
`;

reactPdfSetOptions({
  workerSrc: "pdf.worker.min.js"
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
  constructor(props) {
    super(props);
    const { station } =               props;
    const directions = lines[stationsByName[station].line].majorDirections;
    const now = new Date();
    let firstPage = 2;
    if ( now.getHours() <= 11 ) {
      firstPage = stationsByName[station].pages[directions.am];
    } else {
      firstPage = stationsByName[station].pages[directions.pm];
    }
    this.state = {
      currentPage: firstPage,
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
                { directions[p.direction].name }
              </Button>
            )
          }
          <Link
            href={pdfFilepath(station)}
            download={true}
          >
            <Button
              key='download'
              bg='green'
              mx={2}
              my={1}
            >
              {'Download PDF'}
            </Button>
          </Link>
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
            <Page pageNumber={currentPage} width={700}/>
          </Hide>
          <Hide key="lg" xs sm md xl>
            <Page pageNumber={currentPage} width={600}/>
          </Hide>
          <Hide key="md" xs sm lg xl>
            <Page pageNumber={currentPage} width={500}/>
          </Hide>
          <Hide key="sm" xs md lg xl>
            <Page pageNumber={currentPage} width={400}/>
          </Hide>
          <Hide key="xs" sm md lg xl>
            <Page pageNumber={currentPage} width={300}/>
          </Hide>
        </Document>
      </Box>
    );
  };
};

export default StationSchedule;
