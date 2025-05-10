import { API_URLS } from "@/lib/apiUrls";
import RectangleViewer from "./rectangle-viewer";

const movieCategories = [
  { title: "Popular on Netflix", url: API_URLS.popularOnNetflix },
  { title: "Trending Now", url: API_URLS.trendingNow },
  { title: "Top 10 in Korea Today", url: API_URLS.top10InKoreaToday },
  { title: "Korea Movies", url: API_URLS.koreaMovies },
  { title: "Korea TV", url: API_URLS.koreaTV },
  { title: "Netflix Originals", url: API_URLS.netflixOriginals },
  { title: "New Releases", url: API_URLS.newReleases },
  { title: "TV Thrillers & Mysteries", url: API_URLS.TVThrillersAndMysteries },
  { title: "US TV Shows", url: API_URLS.USTVShows },
];

const Movies = async () => {
  return (
    <div className="flex flex-col gap-6">
      {movieCategories.map(({ title, url }) => (
        <RectangleViewer key={title} title={title} url={url} />
      ))}
    </div>
  );
};

export default Movies;
