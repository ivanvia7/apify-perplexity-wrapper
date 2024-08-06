import { Actor, Dataset } from "apify";
import axios from "axios";

// Initialize the Apify SDK
await Actor.init();

const inputData = await Actor.getInput();

if (!inputData) {
    throw new Error("Input data is missing");
}

const query = inputData.startQuery;
const systemInstruction = inputData.systemInstruction;
const model = inputData.model;
const tokens = Number(inputData.max_tokens);
const temp = Number(inputData.temperature); // Fixed typo here
const apiKey = `Bearer ${inputData.apiKey}`;
console.log("Calling API");

const options = {
    method: "POST",
    url: "https://api.perplexity.ai/chat/completions",
    headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: apiKey,
    },
    data: {
        model: model,
        messages: [
            { role: "system", content: systemInstruction },
            {
                role: "user",
                content: query,
            },
        ],
        max_tokens: tokens,
        temperature: temp,
    },
};

try {
    const response = await axios.request(options);
    const message = response.data.choices[0].message.content;
    const messageClean = message.replace(/\n\n/g, " ");

    if (inputData.cleanText === "true") {
        console.log("Pushing Clean Message");
        await Dataset.pushData({
            query: query,
            answer: messageClean,
        });
    } else {
        console.log("Pushing Message");

        await Dataset.pushData({
            query: query,
            answer: message,
        });
    }
} catch (error) {
    console.error("while perfoming the axios call:", error);
}

console.log(
    "Done! If you find it cool and useful, please start this Actor. Thank you!"
);
// Exit successfully
await Actor.exit();
