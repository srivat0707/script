from flask import Flask,request
from flask_restful import Resource, Api, reqparse

app=Flask(__name__)
@app.route("/",methods=["POST","GET"])
def home():
    if request.method=="GET":
        return "1"
    else:
        put_args = reqparse.RequestParser()
        put_args.add_argument('data')
        args = put_args.parse_args()
        slotid = args.get('data',"")
        print("at home")
        print(slotid)
        return "1234"

if(__name__=="__main__"):
    app.run()