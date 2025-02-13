import FeaturesSection from "@/components/custom/features-section";
import HeroSection from "@/components/custom/hero-section";
import { getHomepageData } from "@/data/loaders";


const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeaturesSection,
};

function blockRenderer(block: any) {
  const Component = blockComponents[block.__component as keyof typeof blockComponents];
  return Component ? <Component key={block.id} data={block} /> : null;
}


export default async function Home() {
  const strapiData = await getHomepageData();
  const { blocks } = strapiData?.data || [];

  console.log(blocks)

  return (
    <main>
      {blocks.map(blockRenderer)}
    </main>
  ); 
}
