from django.http import JsonResponse
import time

def sayHello(request):
    start_time = time.time()  # Get the current time before processing the request

    # Your processing logic goes here
    data = {
        "Process": "Django",
        "Port": "8000",
        "Message": "Django says hello!"
    }

    end_time = time.time()  # Get the current time after processing the request
    response_time = (end_time - start_time) * 1000  # Calculate the response time in milliseconds

    # Include the response time in the response data
    data["ResponseTime"] = response_time

    return JsonResponse(data)
