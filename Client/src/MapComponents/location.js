import React, { useState, useEffect }from 'react';
import {getLocation, getReviews, getImages, addReview, uploadFile, addImages} from "./api";
import {Button} from '@material-ui/core';
import './location.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import RateReviewIcon from '@material-ui/icons/RateReview';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Carousel  from 'react-bootstrap/Carousel';

import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const Location = ({ match }) => {
    const [seePoint, setSeePoint] = useState({});
    const [show, setShow] = useState(false)
    const [seeRevs, setSeeRevs] = useState({});
    const [seeImgs, setSeeImgs] = useState({});
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(5);
    const [review, setReview] = useState("");
    const [selectFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [uploadedImg, setUploadImg] = useState("");


    const reviewState = {
        "nameOfCust": "Test",
	    "subject": "Test Subject",
	    "parent_id": match.params.id,
	    "body": review,
        "rating": value
    }

    const newImg = {
        "parent_id": match.params.id,
        "category": match.params.category,
        "url": uploadedImg,
    }

    const classes = useStyles();

    useEffect(() => {  
        getLoc();
        getRevs();
        getImgs();
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleCloseDialog = () => {
        addRev()
        setOpen(false);
    };

    const handleReview = (e) => {
        setReview(e.target.value)
    }

    const getLoc = async () => {
        const seePoint = await getLocation(match.params.id);
        setSeePoint(seePoint)
    }

    const getRevs = async () => {
        const seeRevs = await getReviews(match.params.id);
        setSeeRevs(seeRevs)
    }

    const getImgs = async () => {
        const seeImgs = await getImages(match.params.id)
        setSeeImgs(seeImgs)
    }

    const addRev = async() => {
        await addReview(reviewState)
        alert("Thank you for your review!")
        //console.log(reviewState)
    }

    const uploadPhoto = async() => {
        const result = await uploadFile(selectFile);
        setUploadImg(result.data.public_id);
        
        setTimeout(() => {
            addImages(newImg, result.data.public_id).then((result) => {
                alert("Successfully uploaded image");
            } )
        },3000)
        

    }

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
        
    }

    if(!show) return null 
    return(
        
        <div className="locations"> 
            <Carousel>
                { seeImgs.map((image) => (
                <Carousel.Item key={image._id } >
                    <img
                        className="locImgs"
                        src={"https://res.cloudinary.com/dud0qwmfg/image/upload/w_1280,h_720,c_pad/v1620106605/" + image.url}
                        alt={image.category}
                    />
                    {/* <Image style={{width: 200}} cloudName="dud0qwmfg"
                    publicId={"https://res.cloudinary.com/dud0qwmfg/image/upload/v1620106605/" + image.url}/> */}
                    <Carousel.Caption>
                        {/* <h3>{image.nameOfImg}</h3>
                        <p>{image._id}</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel> 
            <div className="review-container">
                <div className="section-above">
                    {seePoint[0].name}
                </div>
                <div className="add-reviews">
                    <ListItem className='empty-review' alignItems="flex-start">
                        <ListItemAvatar>    
                            <Avatar alt="Username" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Username"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >

                                    </Typography>
                                    Start your review
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <input type='file' name="file" onChange={changeHandler} />
                    <Button variant="outlined" startIcon={<CloudUploadIcon />} className="upload-button" onClick={uploadPhoto}>
                        Upload Image
                    </Button>
                    <Button variant="outlined" startIcon={<RateReviewIcon />} className="review-button" onClick={handleClickOpen}>
                        Leave a Review
                    </Button>
                </div>
            <List className={classes.root}>
                { seeRevs.map((review) => (
                    <ListItem alignItems="flex-start" key={review._id}>
                        <ListItemAvatar>    
                            <Avatar alt={review.nameOfCust} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            //primary={review.subject + " - Date"}
                            primary={<Rating name={review._id} value={review.rating} readOnly />}
                            secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    {review.nameOfCust}: 
                                </Typography>
                                {review.body}
                            </React.Fragment>
                            }
                        />
                        <Divider variant="inset" component="li" />
                        
                    </ListItem>
                           
                    ))}
            </List>
            </div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
            <DialogTitle id="alert-dialog-title" >Leave a review for {seePoint[0].name}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                </DialogContentText>
                <TextField
                    margin="dense"
                    id="reviw"
                    label="Review"
                    type="body"
                    fullWidth
                    onChange={handleReview}
                />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleCloseDialog} color="primary" >
                Post Review
              </Button>
          </DialogActions>
      </Dialog>
        </div>
    )
};

export default Location;