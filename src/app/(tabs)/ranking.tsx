import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInDown, FadeInUp, BounceOut } from "react-native-reanimated";

interface ScoreData {
  username: string;
  score: number;
  horaPontuacao: string;
}

const CardTable = () => {
  const [data, setData] = useState<ScoreData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://b82a-189-29-146-118.ngrok-free.app/Scores",
          {
            method: "GET",
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        const data: ScoreData[] = await response.json();

        const sortedData = data.sort((a, b) => {
          const timeToSeconds = (time: string) => {
            const [hours, minutes, seconds] = time.split(":").map(Number);
            return hours * 3600 + minutes * 60 + seconds;
          };
          return (
            timeToSeconds(a.horaPontuacao) - timeToSeconds(b.horaPontuacao)
          );
        });

        setData(sortedData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const getTrophyIcon = (index: number) => {
    if (index === 0)
      return <Icon name="trophy" style={styles.goldTrophy} size={50} />;
    if (index === 1)
      return <Icon name="trophy" style={styles.silverTrophy} size={50} />;
    if (index === 2)
      return <Icon name="trophy" style={styles.bronzeTrophy} size={50} />;
    return null;
  };

  const limitedData = data.slice(0, 10);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Animated.View entering={FadeInDown.duration(1000).springify()}>
          <Animated.Text
          entering={FadeInDown.delay(300).duration(1000).springify()} style={styles.title}>Ranking Geral</Animated.Text>
        </Animated.View>
        {limitedData.map((item, index) => (
          <Animated.View entering={FadeInUp.duration(1000).springify()}
            key={index}
            style={[styles.row, index < 3 ? styles.topThree : styles.other]}
          >
            <Animated.Text entering={FadeInDown.delay(300).duration(1000).springify()} style={[styles.rank, index < 3 ? styles.whiteText : styles.blackText]}>
              {getTrophyIcon(index) || `${index + 1}º Lugar`}
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(300).duration(1000).springify()} style={[styles.username, index < 3 ? styles.whiteText : styles.blackText]}>
              {item.username}
            </Animated.Text>
            <Animated.Text  entering={FadeInDown.delay(300).duration(1000).springify()} style={[styles.score, index < 3 ? styles.whiteText : styles.blackText]}>
              Pontos: {item.score}
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(300).duration(1000).springify()} style={[styles.time, index < 3 ? styles.whiteText : styles.blackText]}>
              Tempo: {item.horaPontuacao}
            </Animated.Text>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    marginTop: 10,
  },
  topThree: {
    backgroundColor: "#6D28D9",
    justifyContent: "center",
    alignItems: "center",
  },
  other: {
    borderColor: "#6D28D9",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  rank: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  username: {
    flex: 2,
    textAlign: "center",
    fontSize: 16,
  },
  score: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  time: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
  },
  whiteText: {
    color: "#FFFFFF",
  },
  blackText: {
    color: "#000000",
  },
  goldTrophy: {
    color: "#FFD700",
  },
  silverTrophy: {
    color: "#C0C0C0",
  },
  bronzeTrophy: {
    color: "#CD7F32",
  },
});

export default CardTable;
