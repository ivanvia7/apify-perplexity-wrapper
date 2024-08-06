# Perplexity Wrapper Actor - README

Welcome to the Perplexity Wrapper Actor! This actor enables you to interact with the Perplexity API effortlessly through the Apify platform, without needing to write any code. Below, you will find detailed instructions on how to configure and use this actor.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Inputs](#inputs)
  - [Your Query](#your-query)
  - [Your Instruction to the Bot](#your-instruction-to-the-bot)
  - [Bot Model](#bot-model)
  - [Maximum Amount of Tokens](#maximum-amount-of-tokens)
  - [Temperature](#temperature)
  - [Your Perplexity API Key](#your-perplexity-api-key)
  - [Clean Answer](#clean-answer)
- [Usage](#usage)
  - [Step-by-Step Guide](#step-by-step-guide)
- [Example Configuration](#example-configuration)
- [Outputs](#outputs)
- [Additional Information](#additional-information)
- [Support](#support)

## Introduction
The Perplexity Wrapper Actor simplifies the process of interacting with the Perplexity API. With this actor, you can easily send queries and get responses from the Perplexity model of your choice, all without writing a single line of code.

## Features
- **Easy Configuration**: Simply fill in the input fields to configure your queries.
- **Multiple Models**: Choose from various Perplexity models to get the desired response.
- **Custom Instructions**: Provide system-level instructions to control the behavior and formatting of the responses.
- **Token Management**: Specify the maximum number of tokens for the response.
- **Adjustable Temperature**: Control the randomness of the model's responses.
- **API Key Protection**: Securely input your Perplexity API key.
- **Clean Output**: Option to clean the output by replacing `\\n\\n` elements with whitespaces.

## Inputs
### Your Query
- **Title**: Your Query
- **Description**: The main query or request you want to send to the Perplexity API.
- **Input Type**: Text area
- **Max Length**: 500 characters

### Your Instruction to the Bot
- **Title**: Your Instruction to the Bot on a System Level
- **Description**: Instructions to preprogram the model on a system level, ensuring the results are formatted as needed.
- **Prefill**: Be precise and concise.
- **Default**: Be precise and concise
- **Max Length**: 500 characters

### Bot Model
- **Title**: Bot Model
- **Description**: Select the model you would like to use.
- **Default**: llama-3.1-sonar-small-128k-chat

### Maximum Amount of Tokens
- **Title**: Maximum Amount of Tokens
- **Description**: Select the maximum number of tokens the platform should use. In text models like Perplexity, one token equals one word in the answer.
- **Unit**: token

### Temperature
- **Title**: Temperature
- **Description**: The amount of randomness in the response, valued between 0 (inclusive) and 2 (exclusive). Higher values are more random, and lower values are more deterministic.
- **Default**: 0.2

### Your Perplexity API Key
- **Title**: Your Perplexity API Key
- **Description**: Your Perplexity API key.
- **Input Type**: Text field (secure)

### Clean Answer
- **Title**: Clean Answer
- **Description**: If enabled, `\\n\\n` elements will be replaced with whitespaces.
- **Default**: true

## Usage

### Step-by-Step Guide
1. **Enter Your Query**: In the "Your Query" field, type the main query or request you want to send to the Perplexity API.
2. **Provide Instructions**: In the "Your Instruction to the Bot" field, enter any specific instructions to format the responses as needed.
3. **Choose a Model**: Select your desired model from the "Bot Model" dropdown menu.
4. **Set Maximum Tokens**: Specify the maximum number of tokens for the response in the "Maximum Amount of Tokens" field.
5. **Adjust Temperature**: Set the desired level of randomness for the response in the "Temperature" field.
6. **Enter API Key**: Input your Perplexity API key in the "Your Perplexity API Key" field.
7. **Clean Output**: Enable or disable the "Clean Answer" option based on your preference.

## Example Configuration
Here is an example of how you might configure the actor:
```json
{
  "startQuery": "What are the latest advancements in AI technology?",
  "systemInstruction": "Provide a summary with key points.",
  "model": "llama-3.1-sonar-large-128k-chat",
  "max_tokens": 150,
  "temperature": "0.5",
  "apiKey": "YOUR_API_KEY_HERE",
  "cleanText": true
}
```

## Outputs
The actor will return a response from the Perplexity API based on your configuration. The response will be formatted according to the system instructions provided and will respect the maximum token limit and temperature settings.

## Additional Information
- **Security**: Your API key is securely handled and never exposed in the output.
- **Formatting**: Use the "Clean Answer" option to ensure the output is neatly formatted by replacing `\\n\\n` elements with whitespaces.

## Support
If you encounter any issues or have any questions, please reach out to me via [Issues Tab](https://console.apify.com/actors/Wg7PLutWZ7fTrP64H/issues). I will be glad to help!

Enjoy using the Perplexity Wrapper Actor!
