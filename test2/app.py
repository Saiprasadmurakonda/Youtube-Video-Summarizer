from flask import Flask, render_template
app=Flask(__name__)

@app.route('/hey')
def fun():
    msg = "hello world"
    return render_template('index.html', msg=msg)

if __name__=='__main__':
    app.run(debug=True)