const baseURL = "http://localhost:4000"

export const fetchData = async (endpoint:string) => {
    const response = await fetch(`${baseURL}/${endpoint}`);
    const data = await response.json();
    return data
  };
