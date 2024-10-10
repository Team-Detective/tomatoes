import Link from 'next/link';

interface BannerLinkProps {
  text: string;
  url: string;
}

export default function BannerLink({ text, url }: BannerLinkProps) {
  return (
    <Link
      href={url}
      className="
        text-[#F5F1DE] rounded-[5px] hover:bg-opacity-90 bg-[#4A734E] text-center flex flex-row gap-2.5 items-center justify-center 
        md:w-[140px] md:h-[42px] md:text-base
        w-[100px] h-8 text-sm
        lg:w-40 lg:h-[52px] lg:text-xl
      "
    >
      {text}
    </Link>
  );
}
