import BannerLink from '@/components/common/BannerLink';

export default function Home() {
  return (
    <>
      <h1>main component</h1>
      <div className="flex flex-col gap-4 justify-center h-screen items-center">
        <BannerLink text="자세히보기" url="https://google.com" />
        <BannerLink text="Button Text" url="https://google.com" />
        <BannerLink text="자세히보기" url="https://google.com" />
      </div>
    </>
  );
}
