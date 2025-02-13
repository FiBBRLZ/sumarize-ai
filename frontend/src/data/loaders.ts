import { stringify } from "qs";
import { getStrapiUrl } from "@/lib/utils";

const baseUrl = getStrapiUrl();

async function fetchData(url: string) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

const homepageQuery = stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero-section": {
            populate: {
              heroImage: {
                fields: ["url", "alternativeText"]
              },
              Link: {
                populate: true
              }
            }
          },
          "layout.features-section": {
            populate: {
              feature: {
                populate: true
              }
            }
          }
        }
      }
    },
});


export async function getHomepageData() {
    const baseUrl = getStrapiUrl();
  
    const url = new URL('/api/home-page', baseUrl);
    url.search = homepageQuery;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.log(error); 
    }
  
}
  
  