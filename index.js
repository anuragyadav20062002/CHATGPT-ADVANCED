
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-FzZoACkC609FvLP6TJV476ZH",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();