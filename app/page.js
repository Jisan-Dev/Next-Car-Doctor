import About from '@/components/homepage/About';
import Banner from '@/components/homepage/Banner';
import Services from '@/components/homepage/Services';

export default function Home() {
  return (
    <div className="container mx-auto font-[family-name:var(--font-geist-mono)] pb-20">
      <div>
        <Banner />
        <About />
        <Services />
      </div>
    </div>
  );
}
