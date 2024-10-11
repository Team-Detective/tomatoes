import Link from 'next/link';

export default function BannerLink({ url }: { url: string }) {
  return (
    <Link
      href={url}
      className="
        text-bannerLinkText rounded-[5px] hover:bg-opacity-90 bg-bannerLink text-center flex flex-row gap-2.5 items-center justify-center 
        md:w-[140px] md:h-[42px] md:text-base
        w-[100px] h-8 text-sm
        lg:w-40 lg:h-[52px] lg:text-xl
      "
    >
      자세히보기
    </Link>
  );
}
