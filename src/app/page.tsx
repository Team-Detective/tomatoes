import BannerLink from '@/components/common/BannerLink';
import SearchBar from '@/components/common/SearchBar';

export default function Home() {
  return (
    <>
      <h1>main component</h1>
      <div className="flex flex-col gap-4 justify-center h-screen items-center">
        {/* <BannerLink url="https://google.com" />
        <BannerLink url="https://google.com" />
        <BannerLink url="https://google.com" /> */}
        <SearchBar placeholder="나는야 춤을 출거야🎵" />
        <SearchBar placeholder="사과가 되지말고 토마토가 돼라" />
      </div>
    </>
  );
}
