import * as cheerio from "cheerio";

export interface ProductMetadata {
  title: string;
  description: string;
  store: string;
  rating: string | null;
  thumb: string | null;
  images: string[];
  price: string | null;
}

export async function fetchProductMetadata(
  url: string
): Promise<ProductMetadata> {
  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);

  const title =
    $('meta[property="og:title"]').attr("content") || $("title").text().trim();
  const description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content") ||
    "";
  const store = new URL(url).hostname.replace("www.", "");
  const rating = $('meta[itemprop="ratingValue"]').attr("content") || null;
  const thumb = $('meta[property="og:image"]').attr("content") || null;
  const images: string[] = [];
  $("img").each((_, el) => {
    const src = $(el).attr("src");
    if (src && !images.includes(src)) images.push(src);
  });
  const price =
    $('meta[property="product:price:amount"]').attr("content") ||
    $('meta[itemprop="price"]').attr("content") ||
    $('[class*="price"], [id*="price"]').first().text().trim() ||
    null;

  return {
    title,
    description,
    store,
    rating,
    thumb,
    images,
    price,
  };
}
