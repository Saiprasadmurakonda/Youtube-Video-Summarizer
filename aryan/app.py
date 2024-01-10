from flask import Flask, request
from youtube_transcript_api import YouTubeTranscriptApi
from transformers import pipeline
from flask_cors import CORS
import openai
openai.api_key = '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'
app= Flask(__name__)
CORS(app)
@app.get('/summary')
def summary_api():
    url=request.args.get('url','')
    video_id=url.split('=')[1]
    summary=get_summary(get_transcript(video_id))
    return summary, 200
# @app.route('/summary')
# def summary_api():
#     url = request.args.get('url', '')
#     if not url:
#         return "Missing 'url' parameter", 400

#     try:
#         video_id = url.split('=')[1]
#         summary = get_summary(get_transcript(video_id))
#         return summary, 200
#     except Exception as e:
#         return str(e), 500
    
def get_transcript(video_id):
    # transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
    transcript_list ="Global warming is one of the most pressing environmental challenges facing our planet today."



    # transcript=' '.join([d['text'] for d in transcript_list])
    return transcript_list

def get_summary(transcript):
    summarizer=pipeline('summarization')
    summary=''
    for i in range(0,(len(transcript)//1000)+1):
        summary_text=summarizer(transcript[i*1000:(i+1)*1000])[0]['summary_text']
        summary=summary+summary_text+' '
    return summary
    # Use OpenAI API to generate a summary
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=transcript,
        max_tokens=200,  # Adjust the max_tokens parameter based on your desired summary length
    )

    # Extract the summary from the response
    s = response.choices[0].text.strip()
    return s

if __name__=='__main__':
    app.run()

 
