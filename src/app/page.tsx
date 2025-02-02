"use client";

import { useState, useEffect, useRef } from "react";
import LargeText from "@/components/LargeText";
import Rules from "@/components/Rules";
import Image from "next/image";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [people, setPeople] = useState("");
  const [isWaiting, setIsWaiting] = useState(false);
  const [currentTitle, setCurrentTitle] = useState("あぱつ");
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["あぱつ", "APT", "아파트"];
  const inputRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      setCurrentTitle(titles[(titleIndex + 1) % titles.length]);
    }, 2000);

    return () => clearInterval(titleInterval);
  });

  useEffect(() => {
    if (showForm) {
      inputRef.current?.focus();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          handleClose();
        }
        if (e.key === "Tab") {
          if (!e.shiftKey && document.activeElement === closeButtonRef.current) {
            e.preventDefault();
            inputRef.current?.focus();
          } else if (e.shiftKey && document.activeElement === inputRef.current) {
            e.preventDefault();
            closeButtonRef.current?.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [showForm]);

  const handleTap = () => {
    if (!showForm) {
      setShowForm(true);
    }
  };

  const handleClose = () => {
    setShowForm(false);
    setPeople("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (people) {
      setIsWaiting(true);
    }
  };

  return (
    isWaiting ? (
      <LargeText 
        onReset={() => setIsWaiting(false)} 
      />
    ) : (
      <div 
        className="min-h-screen flex flex-col items-center justify-center relative"
        onClick={handleTap}
      >
        <button
          className="absolute top-4 right-4 p-2 hover:opacity-70 z-10"
          onClick={(e) => {
            e.stopPropagation();
            setShowRules(true);
          }}
          aria-label="ルールを表示"
        >
          <Image
            src="/rules.svg"
            width={32}
            height={32}
            alt="ゲームのルールを表示"
            className="text-pink-900"
          />
        </button>
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-8 title-fade">{currentTitle}</h1>
          <h2 className="text-xl text-gray-700 mb-4">韓国発の飲みゲーム</h2>
          <p className="text-gray-600 mb-8">画面をタップして人数を入力してください</p>
        </div>
      {showForm && (
        <div className="fixed inset-0 bg-pink-900 bg-opacity-80 flex items-center justify-center animate-fadeIn" onClick={handleClose}>
          <form 
            className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-4 animate-slideUp" 
            onClick={e => e.stopPropagation()} 
            onSubmit={handleSubmit}
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-title"
          >
          <button
            ref={closeButtonRef}
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="閉じる"
          >
            ✕
          </button>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="people" id="form-title">
            人数を入力してください
          </label>
          <input
            ref={inputRef}
            type="number"
            id="people"
            min="1"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="人数"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            max="999"
            required
          />
          <button
            ref={submitButtonRef}
            type="submit"
            className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            決定
          </button>
          </form>
        </div>
      )}
      {showRules && <Rules onClose={() => setShowRules(false)} />}
      </div>
    )
  );
}
