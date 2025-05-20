# GCP Monitoring App – Task 10.1P

This project is part of SIT323/SIT737 – Cloud-Native Application Development. It demonstrates how to containerize a Node.js application and prepare it for deployment on Kubernetes with monitoring and visibility tools.

---

## Overview

The application is a simple Express.js server that responds with:

```
Hello from GCP Kubernetes!
```

It runs on port 3000 and logs requests to the console. The app has been containerized using Docker and tested successfully on `localhost`.

---

## Technologies Used

- Node.js + Express  
- Docker  
- Kubernetes (YAML manifests included)  
- Google Cloud SDK (for project setup)  
- Visual Studio Code  
- Google Chrome (for testing)

---

## Project Files

### Application Files
- `index.js` – Node.js Express app  
- `package.json` – Dependencies and scripts  
- `Dockerfile` – Used to build Docker image

### Kubernetes Manifests
- `deployment.yaml` – Describes the app deployment  
- `service.yaml` – Exposes the app using a LoadBalancer service

---

## Docker Build Instructions

```bash
docker build -t gcp-monitoring-app .
```

The image was successfully built and tested using:

```bash
npm start
```

The app was accessed at: [http://localhost:3000](http://localhost:3000)

---

## Learning Outcomes

- Learned how to build and containerize a microservice with Docker  
- Understood how Kubernetes manifests are structured  
- Practiced testing locally before cloud deployment  
- Used GCP CLI tools for project validation

