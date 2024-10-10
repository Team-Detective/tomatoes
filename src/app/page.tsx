import BannerLink from '@/components/common/BannerLink';

export default function Home() {
  return (
    <>
      <h1>main component</h1>
      <div className="flex flex-col gap-4 justify-center h-screen items-center">
        <BannerLink url="https://google.com" />
        <BannerLink url="https://google.com" />
        <BannerLink url="https://google.com" />
      </div>
    </>
  );
}
