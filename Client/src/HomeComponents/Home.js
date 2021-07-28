import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import HomeHeader from './HomeHeader'
import PlaceToVisit from './PlaceToVisit';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/ocean01.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}))
function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <HomeHeader />
            <PlaceToVisit />
        </div>
    )
}  
export default Home