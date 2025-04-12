import axios from "axios";

export const getData = async (endpoint, query, variables = {}) => {
  const response = await axios.post(endpoint, { query, variables });
  if (response.data.errors) {
    // console.error(response.data.errors);
    throw new Error("GraphQL query failed");
  }
  return response.data.data;
};