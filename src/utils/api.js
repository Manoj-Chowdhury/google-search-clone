import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "chdxuutn_jqpkkr15efdfd8sd_sfjbajfbq_fFQER88_asplmqwe",
  cx: "jsndusda_78fiknsh9bdj_kndus36bshd_25najudn",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
