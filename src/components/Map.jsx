import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-110.0, -1.0, 0],
        center: [-5, 0],
        scale: 2000
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#340062"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[103.8198, 1.3521]}
        dx={90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="80" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Singapore"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
