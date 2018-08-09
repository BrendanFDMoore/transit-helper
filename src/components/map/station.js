import React from "react";
import stationConfig from './stationConfig';

const Station = ({ stationId, onStationClick }) => (
  <rect
    id={`station-${stationId}`}
    x={stationConfig[stationId].rect.x}
    y={stationConfig[stationId].rect.y}
    height={stationConfig[stationId].rect.height}
    width={stationConfig[stationId].rect.width}
    className="stationHighlight"
    onClick={() => onStationClick(stationId)}
  />
);

export default Station;
