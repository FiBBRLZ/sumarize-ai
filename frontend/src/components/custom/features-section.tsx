function getIcon(type: string) {
    switch (type) {
        case "CLOUD_ICON":
            return <CloudIcon className="w-[50px] h-[50px]" />;
        case "CHECK_ICON":
            return <CheckIcon className="w-[50px] h-[50px]" />;
        case "CLOCK_ICON":
            return <ClockIcon className="w-[50px] h-[50px]" />;
        default:
            return null
    }
}



interface Feature {
    id: number;
    featureIcon: "CLOUD_ICON" | "CHECK_ICON" | "CLOCK_ICON";
    heading: string;
    subHeading: string;
}


interface FeaturesSectionProps {
    id: number;
    title: string;
    description: string;
    __component: string;
    feature: Feature[];
}


export function FeaturesSection( { data }: { readonly data: FeaturesSectionProps } ) {
    const features = data.feature;

    return (
        <div className="container">
            <div className="flex flex-col md:flex-row gap-[20px] justify-center md:justify-between items-center py-[50px]">
                {features.map(feature => (
                    <div className="flex justify-center flex-col items-center text-center" key={feature.id}>
                        <div className="feature-icon">
                            {getIcon(feature.featureIcon)}
                        </div>
                        <h3 className="font-bold my-5 text-2xl font-mono">{feature.heading}</h3>
                        <p className="text-gray-600">{feature.subHeading}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


function CheckIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  
  function ClockIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
  
  function CloudIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    );
  }