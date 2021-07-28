import React from 'react'
import './Discover.css'
import MapD from './MapComponents/Map'
import Header from './Header';
import Container from './MapComponents/Container'
import { AddressProvider } from './Context/AddressProvider'
import {CoordinatesProvider} from './Context/CoordinatesProvider'
import reducer, {initAddrState,initLatLngState} from './Context/reducer'
import { useStateValue } from './Context/StateProvider'
import Login from './Context/Login'

function Discover() {
    const [{user},dispatch] = useStateValue()
    return (
        <div>
            <AddressProvider initialState={initAddrState} reducer = {reducer} >
                <CoordinatesProvider initialState={initLatLngState} reducer = {reducer} >
                    {user? (
                    <>
                        <Header />
                        <div className="body">
                            <div>
                                <Container />
                            </div>
                            <div>
                                <MapD />
                            </div>
                        </div>
                    </>
                    )
                    : (
                        <Login />
                    )
                    }
                </CoordinatesProvider>
            </AddressProvider>
        </div>

    )
}
export default Discover
