import axios from "axios";
const apiServiceCall = async ({
  url,
  method,
  body,
  headers,
}: {
  url: string;
  method?: string;
  body?: any;
  headers?: any;
}) => {


  try {
    const response = await axios({
      method: method?.toUpperCase() || "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      data: body, 
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      // Spread any custom config passed to the function
    });
    console.log("xxxxxxxxxxxxxxx", response?.data, method);
    return response?.data;
  } catch (error) {
    // Handle error (you could add more custom error handling here)
    if (axios.isAxiosError(error)) {
      throw error.response?.data || error.message;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export default apiServiceCall;
