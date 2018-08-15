import React from "react";
import stationConfig from './stationConfig';

const Station = ({ stationId, onStationClick, unavailable = false }) => (
  <rect
    id={`station-${stationId}`}
    x={stationConfig[stationId].rect.x}
    y={stationConfig[stationId].rect.y}
    height={stationConfig[stationId].rect.height}
    width={stationConfig[stationId].rect.width}
    className={`station ${unavailable ? 'unavailable' : 'highlight'}`}
    onClick={() => onStationClick(stationId)}
  />
);

export default Station;
