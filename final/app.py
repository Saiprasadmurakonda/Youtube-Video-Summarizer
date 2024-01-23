import flask
from youtube_transcript_api import YouTubeTranscriptApi
import openai
from flask import Flask,render_template, request,jsonify
# app.pyfrom flask_cors import CORS  # Import the CORS extension
from flask_cors import CORS  # Import the CORS extension

app = Flask(__name__)
CORS(app) 
app.jinja_env.auto_reload=True
print("HEllo world")
# csp_header = "script-src 'self' https://code.jquery.com;"
# csp_header = "script-src 'self';"
@app.route('/receive_url', methods=['POST'])
def receive_url():
        print("Hello world 3")
        response = flask.jsonify({'some': 'data'})
        print("HEllo world2")

        response.headers.add('Access-Control-Allow-Origin', '*')
        # return response
        data = request.get_json()
    
        url = data.get('url')
        print(url)
        # url=url[]
        url = url[32:]
        a = YouTubeTranscriptApi.get_transcript(url)
        c = ""
        for i in range(len(a)):
            b = a[i]
            c = c + b['text'] + " "
        # print(c)

        # Set your OpenAI API key
        openai.api_key = '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'
        language = "English"

        def prompt(language, text, num_words):
            return "please summarize this text in 250 words in 5 bullet points" + text

        response = openai.Completion.create(
            model="gpt-3.5-turbo-instruct",
            prompt=prompt(language, c, 100),
            max_tokens=250,
        )

        # print(response)
        message = response.choices[0].text
        print(message)
        return render_template('popup.html', message=message)


# @app.after_request
# def add_csp(response):
#     response.headers['Content-Security-Policy'] = csp_header
#     return response
@app.route('/summary')
def summary():
    message = request.args.get('message', '')
    return render_template('popup.html', message=message)

if __name__ == '__main__':
    app.run(debug=True,port=5000)
