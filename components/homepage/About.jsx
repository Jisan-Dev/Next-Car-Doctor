import person from '../../public/images/about_us/person.jpg';
import parts from '../../public/images/about_us/parts.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <div className="hero min-h-screen my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <Image alt="" src={person} className="w-3/4 h-[473px] object-cover rounded-lg shadow-2xl" />
          <Image alt="" src={parts} className="w-1/2 h-[332px] object-cover absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4 -mb-16">
          <h3 className="text-2xl text-primary font-bold leading-none">About Us</h3>
          <h1 className="text-5xl font-bold  max-w-[380px]">We are qualified & of experience in this field</h1>
          <p className="py-6 ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do
            not look even slightly believable.{' '}
          </p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do
            not look even slightly believable.{' '}
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
