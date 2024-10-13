import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center px-7 py-4 lg:px-[88px] lg:py-[22px] justify-between w-full shadow">
      <Link href="/" className="mr-8 shrink-0">
        {/* 데스크탑 로고 */}
        <Image
          src="/assets/common/PC_logo_text (1).svg"
          width={160}
          height={30}
          alt="tomatoes desktop logo"
          className="hidden md:block"
        />

        {/* 모바일 로고 */}
        <Image
          src="/assets/common/MO_logo_text.svg"
          width={76}
          height={17}
          alt="tomatoes mobile logo"
          className="md:hidden block"
        />
      </Link>

      {/* 통합 Navigation 컴포넌트 */}
      <Navigation />

      {/* 검색 컴포넌트 자리 */}
    </header>
  );
}
