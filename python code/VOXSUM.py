import assemblyai as aai
import openai
import json
import requests
aai.settings.api_key = "059dd1029d3a4b849f2ef1c837473bbc"
transcriber = aai.Transcriber()
transcript = transcriber.transcribe("meetingtest.wav.wav")
text = transcript.text
print("original audio to text-\n")
print(text)
print("\nSummary-\n")
openai.api_key = "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"
prompt = "summarize and breifly elaborate this"+text
model = "text-davinci-003"
response = openai.Completion.create(engine=model, prompt=prompt,max_tokens=3000)
generated_text = response.choices[0].text
print(generated_text)