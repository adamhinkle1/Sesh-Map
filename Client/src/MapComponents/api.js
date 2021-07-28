import Axios from 'axios';

export async function listLocations() {
    const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data');
    return response.json();
  };

export async function getLocation(id) {
  const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data/' + id);
  return response.json();
}
export async function getCategory(category) {
  const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data/loc/' + category);
  return response.json();
}
export async function addLocation(location) {
  console.log(location)
  const data = {
    category: location.category,
    name: location.name,
    url: '',
    coordinates: {latitude: location.coordinates.latitude, longitude: location.coordinates.longitude}
  }
  const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return response.json();
}
export async function getReviews(id) {
  const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data/' + id + '/reviews')
  return response.json();
}

export async function getImages(id) {
  const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data/' + id + '/images')
  return response.json();
}

export async function addReview(review) {
  console.log(review)
  const data = {
    nameOfCust: review.nameOfCust,
    subject: review.subject,
    parent_id: review.parent_id,
    body: review.body,
    rating: review.rating
  }

  const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data/reviews', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return response.json();
}

export async function addImages(id, url) {
  const data = {
    nameOfImg: "Image",
    category: id.category,
    parent_id: id.parent_id,
    url: url
  }
  const response = await fetch('https://sleepy-taiga-84581.herokuapp.com/data/images', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  console.log("Uploaded")
  return response.json();
}

export async function uploadFile(image) {
  const formData = new FormData();

  formData.append('file', image);
  formData.append('upload_preset', 'vzyvbwrf')

  const resp = await Axios.post('https://api.cloudinary.com/v1_1/dud0qwmfg/image/upload', formData)
  return(resp)
}