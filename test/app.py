import flask
from youtube_transcript_api import YouTubeTranscriptApi
import openai
from flask import Flask,render_template, request,jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 
app.jinja_env.auto_reload=True
result_data=None
@app.route('/receive_url', methods=['POST','GET'])
def receive_url():

        global result_data
        if request.method=='POST':
            data = request.get_json()
        
            url = data.get('url')
            print(data.get('message'))
            print(url)
            # url=url[]
            url = url[32:]
            a = YouTubeTranscriptApi.get_transcript(url)
            c = ""
            for i in range(len(a)):
                b = a[i]
                c = c + b['text'] + " "

            # Set your OpenAI API key
            openai.api_key = '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'
            language = "English"

            def prompt(language, text, num_words):
                return "please summarize this text in 250 words" + text

            response = openai.Completion.create(
                model="gpt-3.5-turbo-instruct",
                prompt=prompt(language, c, 100),
                max_tokens=250,
            )

            message = response.choices[0].text

            result_data={'result':message}
            return jsonify({'message':"Result stored successfully"})
        elif request.method=='GET':
             if result_data:
                  return jsonify(result_data)
             else:
                  return jsonify({'message':'No result available'})

@app.route('/summary')
def summary():
    message = request.args.get('message', '')
    return render_template('popup.html', message=message)

if __name__ == '__main__':
    app.run(debug=True,port=5000)
