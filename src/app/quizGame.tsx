import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import { quizQuestions } from "../config/questions";
import { useState } from "react";
import { router } from "expo-router";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import * as Progress from "react-native-progress";

export let scores = 0;

export default function QuizGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(Boolean);
  const [quizProgress, setQuisProgress] = useState(quizQuestions.length)


  const progress = (currentQuestionIndex + 1) / quizProgress;
  console.log(score);
  const handleNext = () => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      scores = score;
      router.push({ pathname: `/score`, params: { score } });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(false);
    }
  };

  const handleOptionPress = (pressedOption) => {
    setSelectedOption(pressedOption);

    const isAnswerCorrect =
      quizQuestions[currentQuestionIndex].correta === pressedOption;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  return (
    <Animated.View
      entering={FadeInUp.duration(800).springify()}
      style={styles.container}
    >
                  <Progress.Bar progress={progress} width={350} height={10} color="#6D28D9"/>
      <Animated.Text
        entering={FadeInUp.duration(1000).springify()}
        style={styles.questionText}
      >
        {quizQuestions[currentQuestionIndex].pergunta}
      </Animated.Text>
      {quizQuestions[currentQuestionIndex].opcoes.map((option, index) => (
        <Pressable
          key={index}
          style={[
            styles.option,
            selectedOption === option && isCorrect ? styles.correctOption : {},
            selectedOption === option && !isCorrect
              ? styles.incorrectOption
              : {},
          ]}
          onPress={() => handleOptionPress(option)}
          disabled={selectedOption}
        >
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            style={styles.optionText}
          >
            {option}
          </Animated.Text>
        </Pressable>
      ))}
      <Pressable style={styles.nextButton} onPress={handleNext}>
        <Animated.Text
          entering={FadeInUp.duration(1000).springify()}
          style={styles.nextButtonText}
        >
          {currentQuestionIndex === quizQuestions.length - 1
            ? "Finalizar Quiz"
            : "Proxima"}
        </Animated.Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 128,
    padding: 16,
  },
  container1: {
flexDirection:"row"
  },
  container2: {
    
    flex:1,
  },
  questionText: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 16,
  },
  option: {
    borderWidth: 2,
    borderColor: "#6D28D9",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  correctOption: {
    backgroundColor: "#D1FAE5",
    borderColor: "#22C55E",
  },
  incorrectOption: {
    backgroundColor: "#FEE2E2",
    borderColor: "#F87171",
  },
  optionText: {
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: "#6D28D9",
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
