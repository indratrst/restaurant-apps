import CONFIG from "./config";

const API_ENDPOINT = {
	HOMEPAGE: `${CONFIG.BASE_URL_LIST}`,
	PICTURE: `${CONFIG.BASE_URL}/images/small/`,
	DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
	POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
