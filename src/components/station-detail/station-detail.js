import React, { Component } from "react";
import { Fixed, Heading, Modal } from "rebass";

const StationDetail = ({ station, onModalClick }) => (
  <div>
    <Fixed
      top={0}
      right={0}
      bottom={0}
      left={0}
      onClick={onModalClick}
    />
    <Modal width={256} onClick={onModalClick} width={0.5} p={5}>
      <Heading>Station: {station}</Heading>
    </Modal>
  </div>
);

export default StationDetail;
