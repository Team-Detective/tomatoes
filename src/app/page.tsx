import BannerLink from '@/components/common/BannerLink';
import Dday from '@/components/common/Dday';
import Tag from '@/components/common/Tag';

export default function Home() {
  return (
    <>
      <h1>main component</h1>
      <div className="flex flex-col gap-4 justify-center h-screen items-center">
        <BannerLink url="https://google.com" />
        <BannerLink url="https://google.com" />
        <BannerLink url="https://google.com" />
      </div>
      <div className='flex gap-2 mb-4'>
        <Tag type="hot" label="HOT" />
        <Tag type="best" label="BEST" />
        <Tag type="new" label="NEW" />
      </div>
      <div>
        <Dday type="active" day="30" color="red" />
        <Dday type="active" day="00" color="green" />
        <Dday type="active" day="30" color="yellow" />
        <Dday type="upcoming" day="30" />
        <Dday type="completed" day="30" />
      </div>
    </>
  );
}
