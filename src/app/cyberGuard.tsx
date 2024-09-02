import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import axios from "axios";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { router } from "expo-router";
import FastImage from 'react-native-fast-image';
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

interface QuestionOption {
  correta: string;
  incorreta: string;
}

interface Question {
  text_question: string;
  imagem?: string;
  options: QuestionOption;
  explanation?: string;
}

const Card = () => {
  const [data, setData] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [explanation, setExplanation] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);
  const [points, setPoints] = useState(0);
  const [correctOnLeft, setCorrectOnLeft] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [username, setUsername] = useState("");

  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const [dragging, setDragging] = useState(false);

  const rotate = translateX.interpolate({
    inputRange: [-width, 0, width],
    outputRange: ["-10deg", "0deg", "10deg"],
  });

  useEffect(() => {
    const storageUsername = "";
    setUsername(storageUsername || "");
  }, []);

  useEffect(() => {
    fetch("https://b8a2-189-29-146-118.ngrok-free.app/Question", {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data as Question[]);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setCorrectOnLeft(Math.random() > 0.5);
      if (currentIndex === 0) {
        setStartTime(new Date());
      }
    }
  }, [currentIndex, data]);

  const currentQuestion = data[currentIndex] || {};

  const handleDrag = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;
    translateX.setValue(translationX);
    translateY.setValue(0);
    setDragging(true);

    if (currentQuestion.options) {
      if (correctOnLeft) {
        if (translationX < -100) {
          setFeedback(currentQuestion.options.correta);
        } else if (translationX > 100) {
          setFeedback(currentQuestion.options.incorreta);
        } else {
          setFeedback("");
        }
      } else {
        if (translationX < -100) {
          setFeedback(currentQuestion.options.incorreta);
        } else if (translationX > 100) {
          setFeedback(currentQuestion.options.correta);
        } else {
          setFeedback("");
        }
      }
    }
  };

  const handleDragEnd = (event: PanGestureHandlerGestureEvent) => {
    const { translationX } = event.nativeEvent;
    const isCorrect = currentQuestion.options
      ? correctOnLeft
        ? translationX < -100
        : translationX > 100
      : false;

    if (Math.abs(translationX) <= 100) {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
      translateY.setValue(0);
      setDragging(false);
      setFeedback("");
      setShowExplanation(false);
    } else {
    
      const feedbackMessage = isCorrect
        ? currentQuestion.options.correta
        : currentQuestion.options.incorreta;
      const explanationMessage = isCorrect
        ? `Parabéns! Você ganhou ${points + 10} pontos.`
        : currentQuestion.explanation || "Resposta incorreta. Tente novamente!";
      setFeedback(feedbackMessage);
      setExplanation(explanationMessage);
      setShowExplanation(true);
      Animated.spring(translateX, {
        toValue: isCorrect ? (correctOnLeft ? -width : width) : 0,
        useNativeDriver: true,
      }).start(() => {
        translateX.setValue(0);
        translateY.setValue(0);
        setDragging(false);

        if (isCorrect) {
          setPoints((prev) => prev + 10);
        }
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setFeedback("");
      setExplanation("");
      setShowExplanation(false);
    } else {
      setEndTime(new Date());
    }
  };

  console.log("Imagem URL:", currentQuestion.imagem);
  const formatTime = (milliseconds: number): string => {
    const totalSeconds = Math.round(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  const getTotalTime = (): string | null => {
    if (startTime && endTime) {
      const timeDiff = endTime.getTime() - startTime.getTime();
      return formatTime(timeDiff);
    }
    return null;
  };

  const PerformancePlayer = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('@username');

      const formattedTime = getTotalTime();
      const response = await axios.get(
        `https://b8a2-189-29-146-118.ngrok-free.app/Scores/attScores/user=${storedUsername};score=${points};horaPontuacao=${formattedTime}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (data.length === 0) {
    return (
      <View>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  if (endTime) {
    const messagePoint =
      points < 70 ? "Pode Melhorar." : "Você foi muito bem! Parabéns! ";
    PerformancePlayer();
    return (
      <View style={styles.finalScreen}>
        <Text style={styles.finalMessage}>{messagePoint}</Text>
        <Text style={styles.finalText}>Você fez {points} pontos.</Text>
        <Text style={styles.finalText}>Tempo total: {getTotalTime()}</Text>
        <TouchableOpacity onPress={() => router.replace("/(tabs)/ranking")}   style={styles.button}>
          <Text style={styles.buttonText}>Ver o Ranking Geral</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.replace("/cyberGuard");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Reiniciar o Jogo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  try {
    return (
      <GestureHandlerRootView style={styles.wrapper}>
        <PanGestureHandler
          onGestureEvent={handleDrag}
          onHandlerStateChange={handleDragEnd}
        >
          <Animated.View
            style={[
              styles.card,
              {
                transform: [{ translateX }, { translateY }, { rotate }],
              },
            ]}
          >
            <View style={styles.cardInner}>
              <Text style={styles.questionText}>
                {currentQuestion.text_question}
              </Text>
            </View>
              <Image
                style={styles.cardImage}
                source={{ uri: currentQuestion.imagem }}
              />
          </Animated.View>
        </PanGestureHandler>

        {feedback !== "" && (
          <View style={styles.feedback}>
            <Text style={styles.feedbackText}>{feedback}</Text>
          </View>
        )}
        {showExplanation && (
          <View style={styles.explanationScreen}>
            <Text style={styles.explanationText}>
              {feedback.includes(currentQuestion.options.correta)
                ? "Você Acertou!"
                : "Você Errou!"}
            </Text>
            <Text style={styles.explanationText}>{explanation}</Text>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Próxima Pergunta</Text>
            </TouchableOpacity>
          </View>
        )}
      </GestureHandlerRootView>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Card;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
  },
  card: {
    width: width - 40,
    height: 400,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  cardInner: {
    padding: 20,
    alignItems: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  cardImage: {
    width: "90%",
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  feedback: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
  },
  feedbackText: {
    color: "#fff",
    fontSize: 16,
  },
  explanationScreen: {
    position: "absolute",
    top: "30%",
    left: "10%",
    right: "10%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  explanationText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  finalScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
    padding: 20,
  },
  finalMessage: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  finalText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6200ee",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  loadingText: {
    fontSize: 18,
    color: "#333",
  },
});
