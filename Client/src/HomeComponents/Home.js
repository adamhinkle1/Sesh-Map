import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import HomeHeader from './HomeHeader'
import PlaceToVisit from './PlaceToVisit';

const useStyles = makeStyles((theme) => ({
    landing: {
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/ocean01.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    },
    places: {
        height: 'auto',
    },
    footer: {
        height: '20vh',
        width: '100%',
        background: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer_text: {
        color: 'black',
        fontSize: '1.5rem',
        fontWeight: '400',
    },
}))
function Home() {
    const classes = useStyles()
    return (
        <>
            <div className={classes.landing}>
                <CssBaseline />
                <HomeHeader />
            </div>
            <div className={classes.places}>
                <PlaceToVisit />
            </div>
            <div className={classes.footer}>
                <p className={classes.footer_text}>
                    Sesh Map
                </p>
            </div>
        </>
    )
}  
export default Home