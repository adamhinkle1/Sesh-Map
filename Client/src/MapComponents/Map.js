import React, { useState, useEffect, useCallback, useContext } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, useGoogleMap } from '@react-google-maps/api';
import {listLocations, getCategory} from "./api"
import { Link } from  'react-router-dom';
import {LocContext} from './locContext';
import { CoordinatesStateValue } from '../Context/CoordinatesProvider';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import Slide from '@material-ui/core/Slide';
import NewLocation from './NewLocation'

const containerStyle = {
  width: '83vw',
  height: '90vh'
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Map = () => {
  const [isMarker, setIsMarker] = useState(false)
  const [mark, setMark] = useState({})
  const [showLocations, setShowLocations] = useState([]);
  const [ isClicked, setClicked ] = useState(null);
  const [ map, setMap ] = useState(null);
  const [ isEditable, setEditable] = useState(false);
  const [ addLocation, setAddLocation ] = useState(null)
  const [locCategory, setLocCategory] = useContext(LocContext);
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

const handleCloseDialog = () => {
    setOpen(false);
};


  const { isLoaded } = useJsApiLoader({
    id: '6fb736b44b1a2c01',
    googleMapsApiKey: 'AIzaSyDUjo0mL9FVACkCdFGlHdQWtQL0hAPnWRA'
  })


  const [{center}, dispatch] = CoordinatesStateValue();

  const getLocations = async () => {
    const loc = await listLocations();
    setShowLocations(loc);
    console.log(loc)
  }

  const getCategories = async (category) => {
    const loc = await getCategory(category)
    setShowLocations(loc)
  }

  useEffect(() => {
    if(locCategory){
    getCategories(locCategory)
    }
    else {
      setShowLocations([])
    }
    }, [locCategory])


  const goTo = useCallback(({ lat, lng}) => {
    map.panTo(32.09152341542215, -99.74991113935397);
  })

  
  const onClick = (e) => {
    console.log(e)
    if (!isMarker){
      if (e){
        setMark({lat: e.latLng.lat(), lng: e.latLng.lng(), x: e.Tb.x, y: e.Tb.y})
      }
      
    }
    setIsMarker(!isMarker)

  }

  return isLoaded ? (
    <div className='grid-container'>
      
      <GoogleMap
        id="map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={map}
        mapIds='6fb736b44b1a2c01'
        onClick={onClick}
        
        // onUnmount={onUnmount}
      >
        
        <Marker 
        key='1'
        visible={isMarker}
        id = {2}
        position={{lat: mark.lat, lng: mark.lng}}
        clickable={true}
        onClick={handleClickOpen} />
        
        { showLocations.map((location) => (
          <Marker 
            key={location._id}
            position={{ lat: location.coordinates.latitude, lng: location.coordinates.longitude }}
            clickable={true}
            onClick={() => {
              setClicked(location)
            }}
            icon={{
              url: process.env.PUBLIC_URL + '/' + location.category + '.jpg',
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(45, 45),
            }
            }
          />
        ))}
        {isClicked ? (
          <InfoWindow
            position={{ lat: isClicked.coordinates.latitude, lng: isClicked.coordinates.longitude }}
            onCloseClick={() => {
              setClicked(null);
            }}
          >
            <div>
              <h1>
                {isClicked.name}
              </h1>
              <Link to={"/discover/" + isClicked._id}>
                Click Here For More Details
              </Link>
            </div>
          </InfoWindow>
        ) : null }
        <></>
      </GoogleMap>
      <NewLocation 
        open={open}
        TransitionComponent={Transition} 
        onClose={handleCloseDialog}
        coords={{latitude:mark.lat,longitude:mark.lng}}
      />
    </div>
  ) : <></>
}

export default Map
