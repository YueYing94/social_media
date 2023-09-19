

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Create the Sanity client
export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

// Create an instance of the image URL builder
const builder = imageUrlBuilder(client);

// Define a function to generate image URLs
export const urlFor = (source) => builder.image(source);

// Optionally, define a function to specify image dimensions and other parameters
export const imageUrlWithParams = (source) =>
  builder.image(source).width(300).height(200); // Adjust dimensions as needed
