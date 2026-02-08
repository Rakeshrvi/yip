
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAcademicInsights = async (data: any) => {
  if (!API_KEY) return "Please provide an API key to generate insights.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = "gemini-3-flash-preview";

  const prompt = `
    As an educational consultant specialized in PISA and TIMSS standards, analyze the following student competency data:
    ${JSON.stringify(data)}

    Provide a concise, professional analysis for a teacher. Focus on:
    1. Primary learning gap.
    2. Alignment with global standards.
    3. One actionable intervention strategy.
    
    Format the response as clear markdown bullet points.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    return response.text || "No insights available at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating AI insights. Please check your connectivity.";
  }
};
