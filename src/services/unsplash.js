import axios from 'axios';

export default async function searchImage(keyword, resolution = '') {
  const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${apiKey}`;

  axios.get(url).then((response) => {
    const photos = response.data.results;

    for (const photo of photos) {
      const imageUrl = photo.urls.regular;
      const title = photo.title;
      const description = photo.description;

      // Do something with the photo data.
      console.log(imageUrl, title, description);
      return imageUrl;
    }
  });
}
