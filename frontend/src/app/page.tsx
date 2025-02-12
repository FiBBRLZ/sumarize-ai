import { Button } from "@/components/ui/button";
import { get } from "http";

async function getStrapiData(path: string) {
  const baseUrl = 'http://localhost:1337';
  try {
    const response = await fetch(baseUrl + path);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error); 
  }

}



export default async function Home() {
  const { data: hero } = await getStrapiData('/api/home-page');

  console.log(hero);

  return (
    <div className='max-w-[1200px] mx-auto min-h-screen'>
      <h1>{hero.heroTitle}</h1>
      <p>{hero.heroDesc}</p>
      <Button variant="outline">Button</Button>

    </div>
  );
}
