import { useState, useEffect } from "react";
import Editor from "react-monaco-editor";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Button } from "./components/ui/button";

const codeSnippets = {
  python: `# Python Example\nprint("Hello, World!")`,
  javascript: `// JavaScript Example\nconsole.log("Hello, World!");`,
  c: `#include <stdio.h>\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}`,
  cpp: `#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
};

const CodeEditor = () => {
  const [code, setCode] = useState("// Select a language to see a snippet...");
  const [theme, setTheme] = useState("vs-light");
  const [language, setLanguage] = useState("javascript");
  const [languages, setLanguages] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch("https://ce.judge0.com/languages");
        const data = await response.json();
        setLanguages(data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchLanguages();
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTimer((prev) => prev + 10), 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleLanguageChange = (langId, langName) => {
    setLanguage(langName.toLowerCase());
    let normalizedLang = langName.toLowerCase();
    if (normalizedLang.includes("python")) normalizedLang = "python";
    else if (normalizedLang.includes("c++") || normalizedLang.includes("cpp")) normalizedLang = "cpp";
    else if (normalizedLang === "c" || normalizedLang.includes("c ")) normalizedLang = "c";
    else if (normalizedLang === "java") normalizedLang = "java";
    else if (normalizedLang.toLowerCase().includes("javascript")) normalizedLang = "javascript";
    setCode(codeSnippets[normalizedLang] || "// No snippet available");
  };

  return (
    <div className="bg-[rgb(31,31,31)] p-4 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-md font-semibold">Code Editor</h2>
        
        <Select
          onValueChange={(value) => {
            const selectedLang = languages.find((lang) => lang.id.toString() === value);
            if (selectedLang) {
              handleLanguageChange(selectedLang.id, selectedLang.name);
            }
          }}
          className="bg-black"
        >
          <SelectTrigger className="w-[150px] border border-gray-600 bg-gray-800 text-white rounded-[40px]">
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border border-gray-600 text-white">
            <SelectGroup>
              {languages.map((lang) => (
                <SelectItem key={lang.id} value={lang.id.toString()}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setTheme(value)} className="bg-black">
          <SelectTrigger className="w-[150px] border border-gray-600 bg-gray-800 text-white rounded-[40px]">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="bg-gray-800 border border-gray-600 text-white">
            <SelectGroup>
              <SelectItem value="vs">Vs-Light</SelectItem>
              <SelectItem value="vs-dark">Vs-Dark</SelectItem>
              <SelectItem value="hc-black">HC-Dark</SelectItem>
              <SelectItem value="hc-light">HC-Light</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Timer Panel */}
      <div className="flex items-center justify-center mb-2 text-white text-sm">
        <span>Timer: {Math.floor(timer / 60000)}:{((timer / 1000) % 60).toFixed(2)}</span>
        <Button className="ml-2" onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button className="ml-2" onClick={() => { setTimer(0); setIsRunning(false); }}>
          Reset
        </Button>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
        <Editor
          height="100%"
          language={language}
          value={code}
          theme={theme}
          onChange={(newValue) => setCode(newValue)}
          options={{
            fontSize: 12,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
