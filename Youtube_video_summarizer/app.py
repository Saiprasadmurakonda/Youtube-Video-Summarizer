from youtube_transcript_api import YouTubeTranscriptApi
import openai
from flask import Flask, request
# app.py
app = Flask(__name__)

@app.route('/receive_url/<path:url>', methods=['POST'])
def receive_url(url):
    data = request.get_json()
    url = data.get('url')
    # url=url[]
    a=YouTubeTranscriptApi.get_transcript(url)
    c=""
    for i in range(len(a)):
        b=a[i]
        c=c+b['text']+" "
    # print(c)
        
    # Set your OpenAI API key
    openai.api_key = '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'
    language="English"
    def prompt(language,text,num_words):
        return "please summarize this text "+text+"in "+str(num_words)+" words" 
    response = openai.Completion.create(
        model="gpt-3.5-turbo-instruct",
        prompt=prompt(language,c,250),
        max_tokens=250,  
    )
    print(response)
    summary = response.choices[0].text
    return summary

if __name__ == '__main__':
    app.run(debug=True, port=5000)
