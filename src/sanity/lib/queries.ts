import { groq } from "next-sanity";


export const allProducts = groq`*[_type == "products"]`;

export const four = groq`*[_type == "products"][0..3]`;

export const Nfour = groq`*[_type == "products"][4..7]`;

export const Sfour = groq`*[_type == "products"][8..11]`;
