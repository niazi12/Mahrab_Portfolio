"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    title: "Python API Integration",
    code: `import requests

def fetch_data(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None`,
  },
  {
    title: "Odoo Model Example",
    code: `from odoo import models, fields

class CustomModel(models.Model):
    _name = 'custom.model'
    _description = 'Custom Odoo Model'

    name = fields.Char(string='Name', required=True)
    description = fields.Text(string='Description')`,
  },
];

const CodeEditorHeader = ({ title }) => (
  <div className="bg-gray-800 p-3 flex items-center gap-2 rounded-t-lg">
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
    </div>
    <span className="text-gray-300 text-sm">{title}</span>
  </div>
);

const CodeBlock = ({ code }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-black border border-gray-800 rounded-b-lg shadow-lg"
  >
    <pre className="p-6 overflow-x-auto text-sm md:text-base font-mono h-[280px] flex items-start">
      <motion.code
        className="text-green-400 whitespace-pre-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        {code}
      </motion.code>
    </pre>
  </motion.div>
);

const HeaderContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent inline-block pb-1 leading-tight">
        Python & Odoo Development
      </span>
    </h2>
    <p className="text-lg text-gray-400">Efficient API integrations and custom Odoo modules</p>
  </motion.div>
);

export const AnimatedFeatures = forwardRef((props, ref) => {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const currentSnippet = codeSnippets[currentSnippetIndex];

  useEffect(() => {
    let currentIndex = 0;
    const code = currentSnippet.code;
    let animationFrame;

    const animate = () => {
      if (currentIndex <= code.length) {
        setDisplayedCode(code.slice(0, currentIndex));
        currentIndex++;
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
        }, 2000);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [currentSnippet]);

  return (
    <section
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Glowing effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(51,195,240,0.1),rgba(15,160,206,0.1))] blur-3xl opacity-40 animate-pulse" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <HeaderContent />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transform hover:scale-[1.02] transition-all duration-300"
          >
            <CodeEditorHeader title={currentSnippet.title} />
            <CodeBlock code={displayedCode} />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AnimatedFeatures.displayName = "AnimatedFeatures";
