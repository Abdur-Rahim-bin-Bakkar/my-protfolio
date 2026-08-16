"use client";

import { useEffect, useState, useMemo } from "react";

export default function HeroTyping() {
  const roles = useMemo(() => [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
  ], []);

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));

          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 60 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <div className="text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary">
      <span>{text}</span>
      <span className="inline-block w-[3px] h-7 md:h-8 bg-violet-500 ml-1 animate-pulse" />
    </div>
  );
}
