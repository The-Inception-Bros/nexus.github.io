from flask import Flask, jsonify

app = Flask(__name__)

# Route that runs the Python script
@app.route('/run-script', methods=['GET'])
def run_script():
    # Your Python logic (e.g., calling a function or script)
    response_data = {"message": "Python script executed successfully!"}
    
    # Example: calling another function
    result = my_python_function()  # Call your Python logic here
    response_data["result"] = result
    
    return jsonify(response_data)  # Send a JSON response

def my_python_function():
    
    import os
    import google.generativeai as genai
    import json
    from dotenv import load_dotenv
    
    load_dotenv()
    
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    generation_config = {
        "temperature": 0,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
        "response_mime_type": "application/json",
    }
    
    safety_settings = [
        {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_NONE"},
        {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
        {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    ]
    
    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro",
        safety_settings=safety_settings,
        generation_config=generation_config,
        system_instruction="You're making a website with a lot of useful AI's and gives a short description for each",
    )
    
    chat_session = model.start_chat(history=[])
    
    # List of inputs
    user_inputs = [
        "short description of ChatGPT",
        "short description of Gemini",
        "short description of wolphram alpha"
        
    ]
    
    # Initialize a list to hold responses
    responses = []
    
    # Loop through each user input
    for user_input in user_inputs:
        response = chat_session.send_message(user_input)
        model_response = response.text
        # Append each input and corresponding response to the list
        responses.append({"input": user_input, "response": model_response})
    
    # Specify the full path for response.json
    json_file_path = "/Volumes/ALAN'S USB/AIWeb/gemini/response.json"
    print(f"Saving response to: {json_file_path}")
    
    if responses:
        with open(json_file_path, "w") as json_file:
            json.dump({"responses": responses}, json_file, indent=4)  # Use indent for better readability
        print(f"Response saved to {json_file_path}")
    else:
        print("No response to save.")
    

if __name__ == '__main__':
    app.run(debug=True)
