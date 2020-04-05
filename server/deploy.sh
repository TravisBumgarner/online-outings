gcloud builds submit --tag gcr.io/online-outings-273216/server && gcloud run deploy server --image gcr.io/online-outings-273216/server --platform managed --region us-east1;
