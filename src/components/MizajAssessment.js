import { useState } from "react";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MizajAssessment({ mizaj, setMizaj, setDailyGraph, setSuggestions }) {
  const [responses, setResponses] = useState({});
  const [error, setError] = useState("");
  const [foods, setFoods] = useState([]);

  const questions = [
    { id: 1, text: "How do you usually perceive your body temperature?", options: ["Often feel cold", "Sometimes feel cold", "Neutral", "Sometimes feel warm", "Often feel warm"] },
    { id: 2, text: "How would you describe your skin texture?", options: ["Very dry", "Dry", "Balanced", "Oily", "Very oily"] },
    { id: 3, text: "How is your energy level throughout the day?", options: ["Very low", "Low", "Moderate", "High", "Very high"] },
    { id: 4, text: "How is your digestion?", options: ["Slow and weak", "Moderate", "Good", "Fast and strong", "Very strong"] },
    { id: 5, text: "How do you react to weather changes?", options: ["Feel discomfort in cold weather", "Prefer warm weather", "Feel comfortable in most weather conditions", "Prefer cold weather", "Feel discomfort in hot weather"] },
    { id: 6, text: "How would you describe your sleep pattern?", options: ["Very restless", "Restless", "Normal", "Deep", "Very deep"] },
    { id: 7, text: "How frequently do you feel thirsty?", options: ["Rarely", "Occasionally", "Moderate", "Often", "Always"] },
    { id: 8, text: "How would you describe your appetite?", options: ["Very low", "Low", "Moderate", "High", "Very high"] },
    { id: 9, text: "How quickly do you gain or lose weight?", options: ["Very quickly", "Quickly", "Moderate", "Slowly", "Very slowly"] },
    { id: 10, text: "How do you feel about physical activity?", options: ["Avoid it", "Prefer light activity", "Moderate", "Enjoy it", "Very active"] },
    { id: 11, text: "How do you react to stressful situations?", options: ["Very anxious", "Anxious", "Balanced", "Calm", "Very calm"] },
    { id: 12, text: "How do you describe your hair texture?", options: ["Very dry", "Dry", "Balanced", "Oily", "Very oily"] },
    { id: 13, text: "How often do you feel bloated?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"] },
    { id: 14, text: "How sensitive is your skin to external factors?", options: ["Very sensitive", "Sensitive", "Moderate", "Resistant", "Very resistant"] },
    { id: 15, text: "How frequently do you experience mood swings?", options: ["Always", "Often", "Sometimes", "Rarely", "Never"] },
  ];

  const handleResponseChange = (questionId, optionIndex) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: optionIndex,
    }));
  };

  const handleAssessment = () => {
    if (Object.keys(responses).length !== questions.length) {
      setError("⚠️ Please answer all questions before analyzing.");
      return;
    }
    setError("");

    let warmScore = 0, coldScore = 0, dryScore = 0, wetScore = 0;
    Object.entries(responses).forEach(([questionId, optionIndex]) => {
      questionId = parseInt(questionId);
      if ([1, 5].includes(questionId)) {
        if (optionIndex <= 1) coldScore += 2 - optionIndex;
        else if (optionIndex >= 3) warmScore += optionIndex - 2;
      }
      if ([2, 12].includes(questionId)) {
        if (optionIndex <= 1) dryScore += 2 - optionIndex;
        else if (optionIndex >= 3) wetScore += optionIndex - 2;
      }
    });

    let mizajResult = "Balanced";
    if (warmScore > coldScore && wetScore > dryScore) mizajResult = "Sanguine (Warm & Wet)";
    else if (warmScore > coldScore && dryScore > wetScore) mizajResult = "Choleric (Warm & Dry)";
    else if (coldScore > warmScore && wetScore > dryScore) mizajResult = "Phlegmatic (Cold & Wet)";
    else if (coldScore > warmScore && dryScore > wetScore) mizajResult = "Melancholic (Cold & Dry)";

    const foodMap = {
      "Sanguine (Warm & Wet)": ["Fresh fruits", "Leafy greens", "Whole grains"],
      "Choleric (Warm & Dry)": ["Cucumber", "Yogurt", "Coconut water"],
      "Phlegmatic (Cold & Wet)": ["Ginger tea", "Spicy foods", "Warm soups"],
      "Melancholic (Cold & Dry)": ["Nuts & seeds", "Oily fish", "Avocado"],
      "Balanced": ["Eat a variety of foods", "Stay hydrated", "Avoid extreme diets"],
    };

    setMizaj(mizajResult);
    setSuggestions(foodMap[mizajResult]);
    setFoods(foodMap[mizajResult]);
  };

  return (
    <Container className="mt-4">
      <Card className="shadow-lg">
        <Card.Body>
          <h2 className="text-center mb-4">🩺 Mizaj Assessment</h2>
          {questions.map((question) => (
            <Form.Group key={question.id} className="mb-4">
              <Form.Label className="fw-bold">{question.text}</Form.Label>
              <div className="d-flex flex-wrap">
                {question.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={responses[question.id] === index ? "primary" : "outline-secondary"}
                    className="m-1"
                    onClick={() => handleResponseChange(question.id, index)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </Form.Group>
          ))}
          {error && <Alert variant="danger">{error}</Alert>}
          <Button className="w-100 mt-3" variant="success" onClick={handleAssessment}>🔍 Analyze</Button>
          {mizaj && <Alert variant="info" className="text-center mt-4"><strong>Your Mizaj: </strong> {mizaj}</Alert>}
          {foods.length > 0 && <Alert variant="warning" className="mt-3"><h5>🍎 Suggested Foods:</h5><ul>{foods.map((food, index) => (<li key={index}>{food}</li>))}</ul></Alert>}
        </Card.Body>
      </Card>
    </Container>
  );
}
