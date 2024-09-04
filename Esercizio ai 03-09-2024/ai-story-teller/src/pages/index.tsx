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

export default function Home() {
  const [protagonista, setProtagonista] = useState("");
  const [antagonista, setAntagonista] = useState("");
  const [luogo, setLuogo] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [genere, setGenere] = useState("");
  const [pegi18, setPegi18] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `genera un racconto ${genere} per ${
      pegi18 ? "adulti" : "bambini"
    }, per ${luogo}, per periodo storico ${periodo} con il protagonista ${protagonista} e l'antagonista ${antagonista}.`;

    if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
        const genAI = new GoogleGenerativeAI(
          process.env.NEXT_PUBLIC_GEMINI_KEY
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);

        const output = (
          result.response.candidates as GenerateContentCandidate[]
        )[0].content.parts[0].text;

        if (output) {
          setResponse(output);
          console.log(output);
        
      }
    }
    setLoading(false);
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
        <Header title="StoryTeller" />
        <div className={style.content}>
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
              <InputBox label="Setting:" 
          value={luogo} 
          setValue={setLuogo}/>
          <InputBox label="Time period:" 
          value={periodo} 
          setValue={setPeriodo}/>
              <SelectBox
                label="Choose your genre:"
                list={ListaGeneri}
                setAction={setGenere}
              />
              <SwitchBox
                label="Per Adulti:"
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
            </div>

            {loading ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : ( 
              <div className={style.result}>{response}</div>
            )}
          </WindowBox>
        </div>
      </main>
    </>
  );
}
