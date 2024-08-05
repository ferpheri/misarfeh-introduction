"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Typewriter = () => {
  const [text, count] = useTypewriter({
    words: ["هیجان انتخاب خودته", "سورپرایز کنندست", "همیشه تخفیف داره"],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <>
      <Cursor cursorColor="#b3b3b3" />
      <span className="ml-1">
        {text}
      </span>
    </>
  );
};
export default Typewriter;
