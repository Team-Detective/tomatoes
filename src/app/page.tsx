import Button from '@/components/common/Button';

export default function Home() {
  return (
    <>
      <h1>main component</h1>
      <div className='flex flex-col gap-4 justify-center h-screen items-center'>
        <Button text='Button Text' size='large' />
        <Button text='눌러요' size='medium' bgColor='#121212' />
        <Button text='Button Text' size='small' bgColor='blue' />
      </div>
    </>
  );
}
