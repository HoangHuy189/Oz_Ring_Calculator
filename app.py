from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/result", methods=['POST'])
def result():
    sum = int(request.form.get("first")) + int(request.form.get("second"))
    return render_template("result.html", sum=sum)
