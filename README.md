# 5~6주차 미션 - Next-Netflix

## Team 프로메사

- 👨‍💻 권동욱
- 👩‍💻 김서연

## Pages

    src/app
    ├── (public)
        └── page.tsx            # Landing page
        (routes)
        ├── [productType]/
        │   └── [productId]/
        │       └── page.tsx    # Product detail page
        ├── home/
        │   └── page.tsx        # Home page
        ├── search/
        │   └── page.tsx        # Search page
        ├── comming-soon/
        │   └── page.tsx        # Not implemented ...
        ├── downloads/
        │   └── page.tsx        # Not implemented ...
        ├── more/
        │   └── page.tsx        # Not implemented ...

## API (GET)

| Types   | URL                                 | Description                    |
| ------- | ----------------------------------- | ------------------------------ |
| Search  | /api/search/?q={query}&page={index} | Search w/ query and page index |
| Product | /api/\[productType\]/\[productId\]  | Product Detail                 |
| Product | /api/products/new-releases          | New Releases                   |
| Product | /api/products/popular               | Previews                       |
| Product | /api/products/thumbnail             | Thumbnail                      |
| Product | /api/products/trending-top10        | Top 10 in Worldwide Today      |
| Movie   | /api/movies/korean                  | Korean Movies                  |
| TV-Show | /api/tv-shows/mystery               | TV Mysteries                   |
| TV-Show | /api/tv-shows/netflix-originals     | Netflix Originals              |
| TV-Show | /api/tv-shows/korean                | KR TV Shows                    |

## Usage

    https://next-netflix-21th-promesa.vercel.app/
