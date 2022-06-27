from time import gmtime, strftime
from django.http import JsonResponse
from Bot import ChatBot as bot
from chat.models import Message
from chat.serializers import MessageSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

@csrf_exempt
def message_list(request):
    if request.method == 'GET':
        messages = Message.objects.all()
        serializer = MessageSerializer(messages, many=True, context={'request': request})
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        print(request)
        data = JSONParser().parse(request)
        print(data)
        serializer = MessageSerializer(data=data)
        if serializer.is_valid():
            msg = data["message"]
            response = bot.ChatBot.getBot().response(msg)
            time = strftime("%Y-%m-%d %H:%M:%S", gmtime())
            return JsonResponse({
                "desc": "Success",
                "ques": msg,
                "response": response,
                "time": time
            },status=200)
            #serializer.save()
            #return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors, status=400)  
