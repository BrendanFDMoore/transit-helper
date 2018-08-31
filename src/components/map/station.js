import React from "react";
import { stationsByName } from '../../config/stations';

const Station = ({ stationId, onStationClick, unavailable = false }) => (
  stationsByName[stationId] && stationsByName[stationId].rect &&
  <rect
    id={`station-${stationId}`}
    x={stationsByName[stationId].rect.x}
    y={stationsByName[stationId].rect.y}
    height={stationsByName[stationId].rect.height}
    width={stationsByName[stationId].rect.width}
    className={`station ${unavailable ? 'unavailable' : 'highlight'}`}
    onClick={() => onStationClick(stationId)}
  />
);

export default Station;
