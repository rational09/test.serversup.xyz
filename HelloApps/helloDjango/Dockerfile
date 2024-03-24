# Use a specific version of Python image
FROM python:3.13-rc-slim-bullseye

RUN apt-get update && apt-get install -y vim

ENV YOUR_DOMAIN_NAME="api.serversup.xyz"

# Set the working directory inside the container
WORKDIR /malhar/app

# Copy requirements.txt separately and install dependencies to leverage Docker layer caching
COPY requirements.txt /malhar/app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /malhar/app

# Expose port 8000
EXPOSE 8000

# Specify the command to run the application
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]




