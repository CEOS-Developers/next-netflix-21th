export const fetcher = async (endpoint: string, params?: Record<string, string>, options: RequestInit = {}) => {
	const url = new URL(`${process.env.NEXT_PUBLIC_TMDB_V3_BASE_URL}${endpoint}`);

	// 쿼리 파라미터 설정
	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			url.searchParams.append(key, value);
		});
	}

	const res = await fetch(url.toString(), {
		next: { revalidate: 3600 }, // 1hour cache
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}`,
			...options.headers,
		},
		...options,
	});

	if (!res.ok) {
		const errorData = await res.json();
		throw new Error(errorData.message || `${endpoint} API 호출 실패`);
	}

	//  응답 데이터를 JSON 형식으로 parse
	return res.json();
};
