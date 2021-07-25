import React, { useState } from "react";
//@ts-ignore
import MapGL from "react-map-gl";

// Components
import PopupBox from "src/components/popup/Popup";
import MarkerPoint from "src/components/marker/Marker";
import MapControl from "src/components/mapControl/MapControl";
import AboutFabButton from "src/components/about/AboutFabButton";
import InfoDrawer from "src/components/drawer/InfoDrawer";

// Chakra components
import { useDisclosure } from "@chakra-ui/react";

// API & stores
import { useFetchActiveMarkers } from "src/hooks/useMarkers";

import "mapbox-gl/dist/mapbox-gl.css";
import "./map.css";

const Map: React.FC = () => {
  const btnInfoDrawerRef = React.useRef<HTMLButtonElement>();
  const {
    isOpen: isOpenInfoDrawer,
    onOpen: onOpenInfoDrawer,
    onClose: onCloseInfoDrawer,
  }: any = useDisclosure();
  const [activePoint, setActivePoint] = useState<PointProps | any>(null);
  const [viewport, setViewport] = useState<any>({
    latitude: 16.805312353924744,
    longitude: 96.15919476831377,
    zoom: 12,
    width: "100vh",
    height: "100vh",
  });

  const { coordinates }: any = useFetchActiveMarkers();

  const onClickOnMarker = (e: any, item: any) => {
    e.preventDefault();
    setActivePoint(item);
  };

  return (
    <div id="main-app">
      {/* This component is used to see the information of this map */}

      <InfoDrawer
        isOpenInfoDrawer={isOpenInfoDrawer}
        onCloseInfoDrawer={onCloseInfoDrawer}
        btnRef={btnInfoDrawerRef}
      />
      <MapGL
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/r4y/ckqy4djcy3pam17qu6nc59gy4"
        latitude={viewport.latitude}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={(viewport: any) => {
          setViewport(viewport);
        }}
      >
        {/* This component is used to change the regions of the map */}
        <MapControl />

        {/* This component is used to render all o2 available services location in map */}
        {coordinates &&
          coordinates.map((item: PointProps, i: number) => (
            <MarkerPoint
              item={item}
              key={i}
              onClickOnMarker={onClickOnMarker}
            />
          ))}

        {/* This component is used to show description of selected point in map */}
        {activePoint && (
          <PopupBox activePoint={activePoint} setActivePoint={setActivePoint} />
        )}

        {/* This component is used to see the information of this map */}
        <AboutFabButton
          btnRef={btnInfoDrawerRef}
          onOpenInfoDrawer={onOpenInfoDrawer}
        />
      </MapGL>
    </div>
  );
};

export default Map;
