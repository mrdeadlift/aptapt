import { useRef, useEffect } from "react";

interface RulesProps {
  onClose: () => void;
}

export default function Rules({ onClose }: RulesProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-pink-900 bg-opacity-80 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-4 animate-slideUp"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="rules-title"
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="閉じる"
        >
          ✕
        </button>
        <h2 id="rules-title" className="text-xl font-bold mb-4">APTゲームのルール</h2>
        <div className="space-y-4 text-gray-700">
          <p>1. まず全員で円になって座ります。</p>
          <p>2. みんなが円の中央で両手を重ねます。この手の重なりがアパートの「階数」を表します。同じ人が連続で重ねてもOKです。</p>
          <p>3. 次に全員で『あーぱつ あぱつ』とリズムよく掛け声をかけながら、親がランダムに数字（階数）を叫びます。</p>
          <p>4. 1番下に手を入れた人から、1つずつ手を抜いて数字を言っていき、一番上に乗せていきます。</p>
          <p>5. 指定された特定の数字に引っかかった人が負けです。</p>
        </div>
        <h2 id="rules-title" className="text-xl font-bold mb-4 mt-8">このサイトの使い方</h2>
        <div className="space-y-4 text-gray-700">
          <p>APTゲームの親を変わりに行ってくれます。</p>
          <p>トップ画面をタップすると人数選択画面が表示されるので、人数を入力してください。</p>
          <p>最後の人が画面をタップすると、ランダムな数字が表示されます。</p>
        </div>
      </div>
    </div>
  );
}
