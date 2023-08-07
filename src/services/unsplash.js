import axios from 'axios';

export default async function searchImage(keyword, resolution = '') {
  const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
  const imagesPerRequest = 30; // Number of images fetched in a single request or api call
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(keyword)}&client_id=${apiKey}&per_page=${imagesPerRequest}`;

  try {
    const response = await axios.get(url);
    const photos = response.data.results;

    if (photos && photos.length > 0) {
      // Get image URLS
      const imageUrls = photos.map((photo) => photo.urls.regular);
      console.log("🚀 ~ file: unsplash.js:14 ~ searchImage ~ imageUrls:", imageUrls)
      return imageUrls;
    } else {
      throw new Error('No images found for the given keyword.');
    }
  } catch (error) {
    if (error.response && error.response.status === 403) {
      throw new Error('Unauthorized access. Please check your API key.');
    } else {
      throw new Error('Failed to fetch images. Please try again later.');
    }
  }
}
