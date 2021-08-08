# mfe_basic_app_aws
based on: 
udemy
Microfrontends with React: A Complete Developer's Guide

upon creating the s3 bucket, after create bucket:
should auth the bucket -> you will find it in course.57. Authoring a bucket policy
as well as cloudfront distribution setup the next video.

Basic app using 4 mfe, with automatic pushes to the aws using git actions.

in order to configure git actions with aws you'll need to configure the next keys
The next keys you put in Git > secrets:

AWS_ACCESS_KEY_ID= 
AWS site -> search for service -> type "iam" -> users section -> add user ->
create username mfe-github-action or whatever -> access type [programmatic access] -> Attach existing policies directly ->
check:
- AmazonS3FullAccess
- cloudfrontFullAccess
-> next tag -> create user -> show secret access key (displays one) -> copy both.
( AWS_ACCESS_KEY_ID && AWS_SECRET_ACCESS_KEY )


AWS_DEFAULT_REGION=us-east-2 (if you have different default regions based on ur creating account and bucket)

AWS_DISTRIBUTION_ID= AWS site -> cloudfront -> ur cdn -> distribution id ( for example EVTAL7912I... ) 

AWS_S3_BUCKET_NAME=my-bucket-name

AWS_SECRET_ACCESS_KEY= same as AWS_ACCESS_KEY_ID

PRODUCTION_DOMAIN= AWS site -> cloudfront -> ur cdn -> Domain Name: ( f.e. akdsjsakdlj.cloudfront.net )

after that, you can cd into every mfe, run npm run start.
after that you can navigate to localhost:{container_port}
