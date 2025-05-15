import { axiosInstance } from "./axios";

//HeroSlider
export const getTrendingAllDay = async()=>{
  try{
    const res = await axiosInstance.get("/trending/all/day",{
      params: {language:"ko-KR"},
    });
    return res.data;
}catch(err){
  console.error("HeroSlider data error")
  return {results:[]};
}};

//장르별 영화
export const getMoviesByGenre = async(genreIds: string) =>{
  try{
    const res = await axiosInstance.get("/discover/movie",{
      params:{
        with_genres: genreIds,
        sort_by: "popularity.desc",
        language: "ko-KR",
      }
    });  return res.data;
  }catch(err){
    console.log("getMoviesByGenere data error")
    return { results: [] };
  }
}

//넷플릭스 오리지널
export const getTVByNetwork = async (networkId: number) => {
  try {
    const res = await axiosInstance.get("/discover/tv", {
      params: {
        with_networks: networkId,
        language: "ko-KR",
      },
    });
    return res.data;
  } catch (err) {
    console.error("getTVByNetwork data error")
    return { results: [] };
  }
};

export const getMoviesByCompany = async (companyId: number) => {
  try {
    const res =  await axiosInstance.get("/discover/movie", {
      params: {
        with_companies: companyId,
        language: "ko-KR",
      },
    });
    return res.data;
  } catch(err) {
    console.error("getMoviesByCompany data error")
    return { results: [] };
  }
}
  

//Preview
export const getMoviePopular = async(page: number=1) =>{
  try{
    const res = await axiosInstance.get("movie/popular",{
      params:{language: "ko-KR", page},
    }); return res.data;
  }catch(err){
    console.log("preview data error")
    return { results: [] };
  }
}

//Korea Movie
export const getKoreaMovie = async() => {
  try {const res = await axiosInstance.get("/discover/movie",{
    params:{ with_original_language: "ko", language: "ko-KR" },
    });  return res.data;
  }catch(err){
    console.log("getKoreaMovie data error")
    return{results:[]};
  }
}

//search
export const searchMulti = async(query:string, page: number = 1) =>{
  try{const res =  await axiosInstance.get("/search/multi",{
    params:{query, language: "ko-KR", page, include_adult: "false"},
  }); return res.data;
  }catch(err){
    console.log("searchMulti data error")
    return{results:[]};
  }
}

//overviewMovie
export const getDetail = async(media_type: string, id: string) => {
  try{const res= await axiosInstance.get(`/${media_type}/${id}`,{
    params:{language:"ko-KR"}
  }); return res.data;
  }catch(err){
    console.log("getDetail data error")
    return null;
  }
}