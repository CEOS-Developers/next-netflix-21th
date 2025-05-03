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

## API

| Method | URL                             | Description               |
| ------ | ------------------------------- | ------------------------- |
| GET    | \[productType\]/\[productId\]   | Product Detail            |
| GET    | /api/movies/korean              | Korean Movies             |
| GET    | /api/products/new-releases      | New Releases              |
| GET    | /api/products/popular           | Previews                  |
| GET    | /api/products/thumbnail         | Thumbnail                 |
| GET    | /api/products/trending-top10    | Top 10 in Worldwide Today |
| GET    | /api/tv-shows/mystery           | TV Mysteries              |
| GET    | /api/tv-shows/netflix-originals | Netflix Originals         |
| GET    | /api/tv-shows/korean            | KR TV Shows               |

## Usage

    https://next-netflix-21th-promesa.vercel.app/
