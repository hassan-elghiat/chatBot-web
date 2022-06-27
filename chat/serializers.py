from rest_framework import serializers
from chat.models import Message
# 

# 
# Message Serializer
class MessageSerializer(serializers.ModelSerializer):
    """For Serializing Message"""
    class Meta:
        model = Message
        fields = ['message', 'timestamp']