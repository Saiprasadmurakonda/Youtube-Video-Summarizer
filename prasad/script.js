// import {config} from "dotenv"
// config()

// import {Configuration, OpenAIApi } from "openai"
// import readline from "readline"

// const openai= new OpenAIAPI(new Configuration({
//     apiKey : process.env.API_KEY
// }))
// const userInterface =readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// userInterface.prompt()
// userInterface.on("line", async input =>{

//     openai.createChatCompletion({
//         model: "gpt-3.5-turbo",
//         messages: [{role: "user", content: input}]
//     })
//     console.log(res.data.choices[0].messege.content);
//     userInterface.prompt()

// // })
// import dotenv from "dotenv";
// import openai from "openai";
// import readline from "readline";

// dotenv.config();

// const apiKey = process.env.API_KEY;

// if (!apiKey) {
//   console.error("API key not provided in the environment variables.");
//   process.exit(1);
// }

// const openaiInstance = new openai.OpenAIAPI({ key: apiKey });

// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// userInterface.prompt();

// userInterface.on("line", async (input) => {
//   try {
//     const response = await openaiInstance.complete.create({
//       engine: "text-davinci-002", // You can use "text-davinci-002" or "text-davinci-003"
//       prompt: input,
//       max_tokens: 150,
//     });

//     console.log(response.data.choices[0].text.trim());
//   } catch (error) {
//     console.error("Error making API request:", error.message);
//   }

//   userInterface.prompt();
// // });
// import dotenv from "dotenv";
// import openai from "openai";
// import readline from "readline";

// dotenv.config();

// const apiKey = process.env.API_KEY;

// if (!apiKey) {
//   console.error("API key not provided in the environment variables.");
//   process.exit(1);
// }

// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// userInterface.prompt();

// userInterface.on("line", async (input) => {
//   try {
//     const response = await openai.complete.create({
//       engine: "text-davinci-002", // You can use "text-davinci-002" or "text-davinci-003"
//       prompt: input,
//       max_tokens: 150,
//     });

//     console.log(response.data.choices[0].text.trim());
//   } catch (error) {
//     console.error("Error making API request:", error.message);
//   }

//   userInterface.prompt();
// });




// import dotenv from "dotenv";
// import openai from "openai";
// import readline from "readline";

// dotenv.config();

// const apiKey = process.env.API_KEY;

// if (!apiKey) {
//   console.error("API key not provided in the environment variables.");
//   process.exit(1);
// }

// const userInterface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// userInterface.prompt();

// userInterface.on("line", async (input) => {
//   try {
//     const response = await openai.Completions.create({
//       engine: "text-davinci-002", // You can use "text-davinci-002" or "text-davinci-003"
//       prompt: input,
//       max_tokens: 150,
//     });

//     console.log(response.data.choices[0].text.trim());
//   } catch (error) {
//     console.error("Error making API request:", error.message);
//   }

//   userInterface.prompt();
// });

import { YoutubeTranscript } from 'youtube-transcript';

YoutubeTranscript.fetchTranscript('https://youtu.be/fmIKhp_Mnb8?si=9ZzkC4uy-_R0SG2f').then(console.log)
