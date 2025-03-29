"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

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

const MacTerminalHeader = ({ title }) => (
  <div className="bg-gray-800 p-3 flex items-center gap-2">
    <div className="flex gap-2">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <span className="text-gray-300 text-sm ml-4">{title}</span>
  </div>
);

const CodeBlock = ({ code, title }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-black border border-gray-700 rounded-lg shadow-lg"
  >
    <MacTerminalHeader title={title} />
    <ScrollArea className="h-[280px] overflow-y-auto">
      <pre className="text-sm md:text-base font-mono text-green-400 whitespace-pre-wrap p-2 m-0">
        {code}
      </pre>
    </ScrollArea>
  </motion.div>
);

const About = forwardRef((props, ref) => {
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
        }, 3000);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [currentSnippet]);

  return (
    <section id ="about"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400">
            About Me
          </h2>
          <p className="text-lg text-gray-400">
            I am a Software Engineer with over 3 years of experience specializing in Odoo ERP, Python, and full-stack development. I’ve delivered scalable ERP and CRM solutions that enhance business efficiency and user experiences, with expertise in customizing Odoo, building robust back-end systems, and developing intuitive front-end interfaces.
            
            With a growing interest in AI-driven applications, I’m excited about how AI can revolutionize industries by solving complex problems and automating processes. I aim to combine my software development expertise with cutting-edge AI technologies to contribute to impactful projects.

            I am always seeking new opportunities to expand my knowledge and collaborate on AI-focused solutions in software development and ERP customization.
          </p>
          <Badge className="bg-purple-600 text-white">Software Engineer</Badge>
          <div>
            <Button className="mt-4">Contact Me</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/50 transform hover:scale-[1.02] transition-all duration-300"
        >
          <CodeBlock code={displayedCode} title={currentSnippet.title} />
        </motion.div>
      </div>
    </section>
  );
});

export default About;
