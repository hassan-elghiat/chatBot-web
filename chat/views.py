import json
from time import gmtime, strftime
from django.template import loader
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from Bot import ChatBot as bot

# Create your views here.
#@csrf_protect
def getBot(request):
    if request.method == 'POST':
        jsonData = json.loads(request.body.decode('utf-8'))
        msg = jsonData["msg"]
        res = bot.ChatBot.getBot().response(msg)
        time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        return JsonResponse({
            "desc": "Success",
            "ques": msg,
            "res": res,
            "time": time
        })
    else:
        return JsonResponse({"desc": "Bad request"}, status=400)

        
def index(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render({}, request))
