import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-md border">
      <figure className="px-6 pt-6">
        <Image width={500} height={500} src={img} alt="Shoes" className="rounded-xl w-full h-[208.008px]" quality={100} />
      </figure>
      <div className="card-body">
        <h2 className="text-neutral-700 text-[25px] font-bold">{title}</h2>
        <p className="text-xl font-semibold text-primary">Price: ${price}</p>
        <div className="card-actions justify-end -mt-9">
          <Link href={`services/${_id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
