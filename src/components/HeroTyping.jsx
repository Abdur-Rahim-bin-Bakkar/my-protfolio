"use client";

import { useEffect, useState } from "react";

export default function HeroTyping() {
  const roles = [
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
  ];

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
    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
      I am{" "}
      <span className="text-blue-500">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    </h1>
  );
}
