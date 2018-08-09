import React, { Component } from "react";
import { Fixed, Heading, Modal, Image } from "rebass";
import stationConfig from '../map/stationConfig';

const StationDetail = ({ station, onModalClick }) => (
  <div>
    <Fixed
      top={0}
      right={0}
      bottom={0}
      left={0}
      onClick={onModalClick}
    />
    <Modal onClick={onModalClick} p={5}>
      <Heading>Station: {stationConfig[station].name}</Heading>
      <Image
        src={stationConfig[station].miniSchedule}
      />
    </Modal>
  </div>
);

export default StationDetail;
