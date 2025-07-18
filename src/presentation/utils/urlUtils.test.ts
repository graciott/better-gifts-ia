import { fetchProductMetadata, ProductMetadata } from "./urlUtils";

// Mock fetch for React Native
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () =>
      Promise.resolve(`
        <html>
          <head>
            <title>Test Product</title>
            <meta property="og:title" content="Test Product Title" />
            <meta property="og:description" content="Test Description" />
            <meta property="og:image" content="https://example.com/thumb.jpg" />
            <meta itemprop="ratingValue" content="4.5" />
            <meta property="product:price:amount" content="99.99" />
          </head>
          <body>
            <img src="https://example.com/img1.jpg" />
            <img src="https://example.com/img2.jpg" />
          </body>
        </html>
      `),
  })
) as jest.Mock;

describe("fetchProductMetadata", () => {
  it("should extract product metadata from HTML", async () => {
    const url = "https://store.example.com/product";
    const metadata: ProductMetadata = await fetchProductMetadata(url);

    expect(metadata.title).toBe("Test Product Title");
    expect(metadata.description).toBe("Test Description");
    expect(metadata.store).toBe("store.example.com");
    expect(metadata.rating).toBe("4.5");
    expect(metadata.thumb).toBe("https://example.com/thumb.jpg");
    expect(metadata.images).toEqual([
      "https://example.com/img1.jpg",
      "https://example.com/img2.jpg",
    ]);
    expect(metadata.price).toBe("99.99");
  });
});
