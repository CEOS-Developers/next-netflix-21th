const MovieDetail = async ({ params }: { params: { id: string } }) => {
  return <div>movie id: {params.id}의 상세페이지</div>;
};

export default MovieDetail;
