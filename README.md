# Images-app

## Node App

1. cd to Node Applciation on another terminal and install its dependencies
   ```cd Node``` -> ```npm i```
2. Create .env file and add these envirnment variables into this
  ``` AWS_ACCESS_KEY_ID```,
  ```AWS_SECRET_ACCESS_KEY```,
  ```AWS_REGION```,
  ```AWS_BUCKET_NAME```. 

  ``Note: You will need to create A bucket on AWS s3 and after creating your user and assinging it permissions to fetch or manipulate s3 service, you can get these envirnment variable for your application.
  see AWS section for more detail.``

3. Start applciation using ```npm start```
4. Server will start running on port ```4000```

   
## React App

1. Clone this repository to your local machine
2. cd to React Applciation and install dependencies
   ```cd React``` -> ```npm i```
3. Start the Application using ```npm start```
4. Applciation will start running on port ```3000```

### Access the application

Open ```localhost:3000``` or ```127.0.0.1:3000``` to access application.
It got two Pages One Home page which display the images stored on s3 and another upload-image page which allow anyone to upload image to s3 and then display it on main page.
You can upload multiple images at a time.


## AWS S3 Configration

1. Log In to Your AWS Account and search s3
2. Go to s3 service and create a bucket with uniqur name
3. Set its configration to be Private and only accessible to root user or user with proper access to AWS Environment variables
4. Now Search IAM Role in AWS and navigate to its.
5. Create User if you have created yet and then in its permission section add s3 permissions to that user
6. After Assigning that user proper s3 Permissions, create Access keys of that user. That would provdie us with Api-key and Secret Key.
7. Use these Api-Key, Secret-Key adn also region of your s3 bucket isnide env file for node project.
   ``Note: while using AWS deployment like EC2, we dont need to add access keys or secret keys, our instance can get that from iam role ``

8. In node RestFul API, I first fetch the image resources from the s3 and then using using api-keys, signed those url to get public url which will allow them to be view on frontend web application.
9. 

