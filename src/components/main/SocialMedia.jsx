import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default function SocialMedia() {
  return (
    <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600">
      <AiFillLinkedin />
      <AiFillGithub />
    </div>
  );
}
