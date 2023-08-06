import Unsplash from 'unsplash';

// Get image from Unsplash
export default async function searchImage(keyword, pageCount, resolution = "") {
  const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY; // Make sure your environment variable is set

  const unsplash = new Unsplash({ accessKey: apiKey });
  const images = resolution
    ? await unsplash.photos.search(keyword)
    : await unsplash.photos.search(keyword, { quality: resolution });

  return images;
}