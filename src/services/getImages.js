// Get image from unsplash
async function getImage(keyword, pageCount) {
    const unsplash = require('unsplash');
    const dotenv = require("dotenv");

    // Load environment variables
    dotenv.config();
    const apiKey = process.env.UNSPLASH_API_KEY;

    const photos = await unsplash.photos.get({
        query: keyword,
        per_page: pageCount,
        api_key: apiKey,
    });

    return photos;
} 

module.exports = getImage;