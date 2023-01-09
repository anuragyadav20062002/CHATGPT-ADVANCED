
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-FzZoACkC609FvLP6TJV476ZH",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

async function callApi(){  
const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text)
}

callApi()
