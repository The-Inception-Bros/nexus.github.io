"""
Install the Google AI Python SDK

$ pip install google-generativeai
"""

import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
generation_config = {
  "temperature": 0,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-pro",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
  system_instruction="imagine youre a person giving description for every single AI for a website project",
)

history = []

print("Bot: Hello")

while True:

  user_input = input("You: ")

  chat_session = model.start_chat(
    history=history
  )

  response = chat_session.send_message(user_input)

  model_response = response.text
  print(f'Bot: {model_response}')
  print()

  history.append({"role":"user", "parts": [user_input]})
  history.append({"role":"model", "parts": [model_response]})
  
  
# AIzaSyBZzpaMm7yDHl0ukYT4g_UodnS9xVEb7gs