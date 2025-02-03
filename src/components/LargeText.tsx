import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  onReset: () => void;
}

const LargeText = ({ onReset }: Props) => {
  const router = useRouter();
  const [isWaiting, setIsWaiting] = useState(true);
  const [number, setNumber] = useState<number>(0);
  const [currentTitle, setCurrentTitle] = useState("あーぱつあぱつ");
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["あーぱつあぱつ", "APT APT", "아파트먼트"];

  useEffect(() => {
    if (isWaiting) {
      const titleInterval = setInterval(() => {
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setCurrentTitle(titles[(titleIndex + 1) % titles.length]);
      }, 2000);

      return () => clearInterval(titleInterval);
    }
  }, [titleIndex, isWaiting]);

  const handleTap = () => {
    if (isWaiting) {
      // 1から30までのランダムな数字を生成
      const newNumber = Math.floor(Math.random() * 30) + 1;
      setNumber(newNumber);
      setIsWaiting(false);
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen"
      onClick={handleTap}
    >
      {isWaiting ? (
        <>
          <div className="text-6xl title-fade">{currentTitle}</div>
          <div className="text-sm mt-8 text-gray-600">最後の人は画面をタップしてください</div>
        </>
      ) : (
        <div className="flex flex-col items-center gap-8">
          <div className="text-6xl">{number}</div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onReset();
              router.push('/');
            }} 
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded"
          >
            トップに戻る
          </button>
        </div>
      )}
    </div>
  );
};

export default LargeText;
