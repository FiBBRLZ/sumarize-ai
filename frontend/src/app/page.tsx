import { FeaturesSection } from "@/components/custom/features-section";
import HeroSection from "@/components/custom/hero-section";
import { stringify } from 'qs';
import { getStrapiUrl } from "@/lib/utils";

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
})


async function getStrapiData(path: string) {
  const baseUrl = getStrapiUrl();

  const url = new URL(path, baseUrl);
  url.search = homepageQuery;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error); 
  }

}



export default async function Home() {
  const strapitData = await getStrapiData('/api/home-page');

  console.log(strapitData)

  const { blocks } = strapitData.data;


  return (
    <div>
      <HeroSection data={blocks[0]} />
      <FeaturesSection data={blocks[1]} />
    </div>
  );
}
