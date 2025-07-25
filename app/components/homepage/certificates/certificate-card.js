// @flow strict
import Image from 'next/image';
import Link from 'next/link';

function CertificateCard({ certificate }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={certificate.image}
          height={1080}
          width={1920}
          alt={certificate.name}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium'>
          {certificate.name}
        </p>
        <p className='mb-2 text-sm text-[#16f2b3]'>
          {certificate.issuingBody} - {certificate.issueDate}
        </p>
        <div className="mt-auto">
          <Link target='_blank' href={certificate.credentialLink}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              View Credential
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;