import React, { Component } from "react";
import { Fixed, Modal, Text, Link } from "rebass";

class Disclaimer extends Component {
  constructor() {
    super();
    this.state = { showModal: null };
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal })
  render = () => (
    <div>
      { this.state.showModal && (
        <Fixed
          top={0}
          right={0}
          bottom={0}
          left={0}
          onClick={this.toggleModal}
        >
          <Modal
            onClick={this.toggleModal}
            p={1}
            width={[0.8, 0.7, 0.6, 0.5]}
            maxHeight={'90vh'}
          >
            <Text
              m={1}
              p={1}
              f={[ 1,2,2,3 ]}
            >
              This site is not affiliated with Go Transit or Metrolinx.
              <br />
              <br />
              Train times are static "mini schedules" not live departures and no delays or any other information is reflected here.
              Please see&nbsp;
              <Link
                href="https://www.gotransit.com"
                target="_blank"
              >
                gotransit.com
              </Link>
              &nbsp;for scheduled departures and service updates.
              <br />
              <br />
              This tool is meant only to help you plan your trip easily. 
            </Text>
          </Modal>
        </Fixed>
      )}
      <Link
        onClick={this.toggleModal}
      >
        <Text
          m={1}
          p={1}
          f={[ 1,1,2,3 ]}
        >
          Disclaimer
        </Text>
      </Link>
    </div>
  );
}

export default Disclaimer;
