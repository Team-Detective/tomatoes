interface ButtonProps {
  text: string;
  bgColor?: string; // 사용자 정의 배경색
  size?: 'small' | 'medium' | 'large';
}

export default function Button({
  text,
  bgColor = '#4A734E', // 기본 배경색 설정
  size = 'medium',
}: ButtonProps) {
  const sizeClass =
    size === 'small'
      ? 'text-[14px] py-[5.5px] px-[14px]'
      : size === 'large'
      ? 'text-[20px] py-[11px] px-[28.5px]'
      : 'text-[16px] py-[9px] px-[28.5px]';

  return (
    <button
      className={`text-[#F5F1DE] font-medium rounded-[5px] hover:bg-opacity-90 ${sizeClass}`}
      style={{ backgroundColor: bgColor }} // 스타일로 배경색을 동적으로 적용
    >
      {text}
    </button>
  );
}
