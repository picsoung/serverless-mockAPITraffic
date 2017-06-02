# Serverless API traffic mocking function

This project is a simple tool to send regular traffic to your API endpoints.

## Pre-requisites

- an AWS account
- [AWS CLI](https://aws.amazon.com/cli/) configured
- An API deployed and monitored by [3scale](https://3scale.net)
- [Serverless](serverless.com) installed  

## How to use this project

1. Clone this repo locally
```
git clone https://github.com/picsoung/serverless-mockAPItraffic.git
cd mockAPItraffic
```

2. In `endpoints.json` file customize the array with your own paths and methods

3. In `serverless.yml` file change the variable `API_URL` and `USER_KEY` for yours

4. By default the function is called every 2 minutes, you can change the schedule time in the `serverless.yml` under `schedule` property

5. When ready, deploy your function with `sls deploy`

## F.A.Q

### Is it possible to send traffic to more than one API?
Yes, you can copy the whole `mockAPItraffic` block in `serverless.yml`, rename it differently and add it under the `functions` array.
