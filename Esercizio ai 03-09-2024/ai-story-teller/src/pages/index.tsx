import Head from "next/head";
import style from "@/styles/Home.module.scss";
import Header from "@/components/Molecules/Header/Header";
import WindowBox from "@/components/Organism/Window/WindowBox";
import InputBox from "@/components/Molecules/InputBox/InputBox";
import SelectBox from "@/components/Molecules/SelectBox/SelectBox";
import { useState } from "react";
import { ListaGeneri } from "@/constants/common";
import Button from "@/components/Atoms/Button/Button";
import { GenerateContentCandidate, GoogleGenerativeAI } from "@google/generative-ai";
import SwitchBox from "@/components/Molecules/SwitchBox/SwitchBox";
import Toast from "@/components/Atoms/Toast/Toast";

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");
  const [genere, setGenere] = useState("");
  const [pegi18, setPegi18] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [error, setError] = useState(false);
  const [domande, setDomande] = useState<string[]>([]);
  const [risposte, setRisposte] = useState<string[]>([]);
  const [userQuestion, setUserQuestion] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [story, setStory] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `genere un racconto ${genere}, per ${
      pegi18 ? "adulti" : "bambini"
    }, con il protagonista ${protagonista} e l'antagonista ${antagonista}`;

    try {
      if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const output = (result.response.candidates as GenerateContentCandidate[])[0].content.parts[0].text;
        if (output) {
          setResponse(output);
          setStory(output);
          handleGenerateQuestionsAndAnswers(output);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error Creating Story");
      setLoading(false);
      setError(true);
    }
  };

  const handleGenerateQuestionsAndAnswers = async (storia: string) => {
    const promptQuestionsAndAnswers = `Crea 5 domande di comprensione del testo per la seguente storia e fornisci anche le risposte a ciascuna domanda: ${storia}`;

    if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
      try {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(promptQuestionsAndAnswers);

        const content = (result.response.candidates as GenerateContentCandidate[])[0].content.parts[0].text;
        if (content) {
          const [questionsText, answersText] = content.split("Risposte:").map((part) => part.trim());
          const questions = questionsText.split("\n").filter((q) => q.trim() !== "");
          const answers = answersText?.split("\n").filter((a) => a.trim() !== "");

          setDomande(questions || []);
          setRisposte(answers || []);
        }
      } catch (error) {
        console.error("Errore nella generazione delle domande e risposte:", error);
        setDomande([]);
        setRisposte([]);
      }
    }
  };

  const handleAskQuestion = async () => {
    if (!userQuestion.trim() || !story.trim()) return;
    
    setLoading(true);

    const prompt = `Considerando la seguente storia: ${story}. Rispondi alla domanda: ${userQuestion}`;

    try {
      if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const output = (result.response.candidates as GenerateContentCandidate[])[0].content.parts[0].text;
        if (output) {
          setAnswers([output]);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error answering the question");
      setAnswers(["Errore nella generazione della risposta"]);
      setLoading(false);
    }
  };

  const handleVoice = () => {
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = "it-IT";
    setIsPlaying(true);
    speechSynthesis.speak(utterance);

    utterance.pitch = 1;

    utterance.onend = () => {
      setIsPlaying(false);
    };
  };

  const handleStopVoice = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
  };

  return (
    <>
      <Head>
        <title>StoryTeller</title>
        <meta name="description" content="AI based app to generate stories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main}>
        <Header 
          title="StoryTeller" 
          showHamburger={showHamburger}
          setShowHamburger={setShowHamburger}
        />
        <div className={`${style.hamburgerWindow} ${
            showHamburger ? style.active : ""
          }`}>
          <div className={`${style.mask} ${showHamburger ? style.active : ""}`} />
        </div>
        <div className={style.content}>
          {error && (
            <Toast
              setAction={setError}
              title="Errore"
              message="Errore nella creazione del racconto"
            />
          )}
          <WindowBox title="Create your story">
            <div className={style.container}>
              <InputBox
                label="Main character:"
                value={protagonista}
                setValue={setProtagonista}
              />
              <InputBox
                label="Antagonist:"
                value={antagonista}
                setValue={setAntagonista}
              />
              <SelectBox
                label="Select genre:"
                list={ListaGeneri}
                setAction={setGenere}
              />
              <SwitchBox
                label="For adults:"
                value={pegi18}
                setValue={setPegi18}
              />
              <Button
                label="Create Story"
                onClick={handleGenerate}
                disabled={
                  protagonista.trim().length <= 0 ||
                  antagonista.trim().length <= 0 ||
                  genere.trim().length <= 0
                }
              />
              {loading ? (
                <div>
                  <p>Loading...</p>
                </div>
              ) : (
                <div className={style.result}>{response}</div>
              )}
              <div className={style.btn}>
                {isPlaying ? (
                  <Button label="Stop" onClick={handleStopVoice} />
                ) : (
                  <Button label="Audio" onClick={handleVoice} />
                )}
              </div>
            </div>
            <div className={style.userQuestionContainer}>
                <InputBox
                  label="Ask a question:"
                  value={userQuestion}
                  setValue={setUserQuestion}
                />
                <Button
                  label="Ask"
                  onClick={handleAskQuestion}
                  disabled={!userQuestion.trim() || !story.trim()}
                />
                  <ul>
                    {answers.map((answer, index) => (
                      <li key={index}>{answer}</li>
                    ))}
                  </ul>
              </div>
          </WindowBox>
        </div>
      </main>
    </>
  );
}

