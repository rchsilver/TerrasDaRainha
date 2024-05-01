import { useContext, useEffect, useState } from "react";
import { SectionTextBox } from "./styleTextBox";
import { motion } from "framer-motion"; // Importe motion
import { ChoiceBox } from "../choiceBox/choiceBox";
import { PageContext } from "../../providers/PageProvider/PageContext";

const TextBox = () => {
  const {
    textoCompleto,
    setTextoCompleto,
    indiceParagrafo,
    setIndiceParagrafo,
    indiceLetra,
    setIndiceLetra,
    textoCompletoDigitado,
    setTextoCompletoDigitado,
  } = useContext(PageContext);

  useEffect(() => {
    setTextoCompleto([
      "Nikolai IronBlood é o herdeiro destinado a carregar o peso e a honra da antiga linhagem da família IronBlood. Apesar de sua tenra idade, seus olhos azuis brilham com uma sagacidade incomum, refletindo uma inteligência que transcende sua juventude. Com cabelos loiros que brilham como fios de ouro ao sol, Nikolai é uma visão de pureza e determinação em meio às sombras que envolvem as Terras da Rainha.",
      "Nascido em uma família conhecida por sua bravura e destemor no campo de batalha, Nikolai exibe uma curiosidade singular que o separa dos demais herdeiros da nobreza. Enquanto seus parentes se dedicam ao estudo das artes marciais e estratégias militares, Nikolai encontra fascínio nos mistérios da magia e nas histórias dos antigos feiticeiros que moldaram as terras que agora juram proteger.",
      "Apesar de sua linhagem ser conhecida por suas habilidades de combate, Nikolai busca desbravar os segredos dos grimórios e pergaminhos antigos, ansiando por desvendar os segredos arcanos que há muito tempo foram esquecidos. Seus dias são preenchidos com a exploração de bibliotecas e conversas com sábios misteriosos, em busca de conhecimento proibido que poderia desvendar os enigmas que assolam as Terras da Rainha.",
      "No entanto, mesmo com sua inclinação para os estudos arcanos, Nikolai não negligencia suas responsabilidades como herdeiro da família IronBlood. Ele treina diligentemente nas artes da espada e da estratégia militar, sabendo que um dia terá que liderar suas tropas para a batalha em defesa de seu povo e de suas terras. Sua determinação e coragem são tão afiadas quanto qualquer lâmina forjada em aço, e seu coração é tão forte quanto o alicerce de sua ancestral fortaleza.",
      "Assim, Nikolai IronBlood surge como uma figura única entre os nobres guerreiros de seu tempo, um herdeiro que busca equilibrar o legado de sua família com seus próprios anseios e sonhos. Ele é uma criança destinada a moldar o destino das Terras da Rainha não apenas com a força de sua espada, mas também com a sabedoria das antigas artes místicas que ele tão diligentemente busca dominar.",
    ]);
    console.log("Texto completo:", textoCompleto);
  }, []);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (indiceParagrafo < textoCompleto.length) {
        const paragrafo = textoCompleto[indiceParagrafo];
        if (indiceLetra < paragrafo.length) {
          setTextoDigitado((prevText) => {
            const novoTexto = [...prevText];
            novoTexto[indiceParagrafo] = paragrafo.substring(
              0,
              indiceLetra + 1
            );
            return novoTexto;
          });
          setIndiceLetra((prevIndice) => prevIndice + 1);
        } else {
          setIndiceLetra(0);
          setIndiceParagrafo((prevIndice) => prevIndice + 1);
        }
      } else {
        clearInterval(typingInterval);
        setTextoCompletoDigitado(true);
      }
    }, 10);
    console.log("Texto completo:", textoCompleto);
    return () => clearInterval(typingInterval);
  }, [
    indiceParagrafo,
    indiceLetra,
    textoCompleto,
    setTextoDigitado,
    setIndiceLetra,
    setIndiceParagrafo,
    setTextoCompletoDigitado,
  ]);

  return (
    <SectionTextBox className="textBox">
      <motion.div
        initial={{ opacity: 0 }} // Define a opacidade inicial como 0
        animate={{ opacity: 1 }} // Anima para opacidade 1
        transition={{ duration: 1.5 }} // Duração da transição em segundos
      >
        <h2>Nikolai IronBlood</h2>
        {textoDigitado &&
          textoDigitado.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}

        {textoCompletoDigitado && <ChoiceBox />}
      </motion.div>
    </SectionTextBox>
  );
};

export { TextBox };
