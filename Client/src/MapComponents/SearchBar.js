import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search'
import { CoordinatesStateValue } from '../Context/CoordinatesProvider';
import {actionTypes} from '../Context/reducer'
const useStyles = makeStyles((theme) => ({
  search: {
    borderBottom: 'solid 1px grey',
    width:'15vw',
  },
  searchinput:{
    display:'flex'
  },
  icon:{
    color:'grey',
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    outlineWidth: '0',
  },
}));

export default function SearchBar() {
  const [{center}, dispatch] = CoordinatesStateValue();
  const classes = useStyles()
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState();

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    dispatch({
      type: actionTypes.SET_COORDINATES,
      center: coordinates,
    })
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className = {classes.search}>
            <div className= {classes.searchinput}>
              <SearchIcon className={classes.icon}/>
            < input className={classes.input} {...getInputProps({ placeholder: "Search Location" })} />
            </div>
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? 'rgb(96, 158, 209)' : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}