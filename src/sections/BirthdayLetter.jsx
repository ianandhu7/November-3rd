import React from 'react';
import { Mail } from 'lucide-react';
import LoveLetter from '../components/LoveLetter';

export default function BirthdayLetter() {
  return (
    <section id="letter" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Mail size={14} /> 03 • A Note for You
        </span>
        <h2 className="section-title">A Note for You</h2>
        <p className="section-subtitle">
          "A few words I wanted to share with you."
        </p>
      </div>

      <LoveLetter />
    </section>
  );
}
