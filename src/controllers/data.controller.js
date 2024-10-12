const controller = {};
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const geminiApiKey = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(geminiApiKey);
const geminiConfig = {
  temperature: 0.0,
  topP: 0,
  topK: 0,
  maxOutputTokens: 2048,
};
const geminiModel = googleAI.getGenerativeModel({ model: "gemini-1.5-flash-latest", geminiConfig, });

const newsApiKey = process.env.NEWS_API_KEY;



controller.getData = async (req, res) => {
  const country = req.query.country
  const prompt = `En texto sin formato y con los titulos: Cultura,Política,Religion,Clima,Seguridad,Consideraciones importantes, y con un texto corto por cada titulo, Dame informacion sobre ${country} para mi estadia`
  const url = `http://newsapi.org/v2/top-headlines?q=${country}&apiKey=${newsApiKey}`;

  try {

    const result = await geminiModel.generateContent(prompt);
    const data = result.response.text().replace(/[#\*\-]/g, '');


    const news = await axios.get(url);
    const articles = news.data.articles.map(article => ({
      title: article.title,
      content: article.content,
      url: article.url
    }))

    res.render('content', { pais: country.toUpperCase() ,data: data, articles: articles });

  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching news articles');
  }
};


module.exports = controller;

