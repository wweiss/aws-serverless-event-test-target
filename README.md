# AWS Serverless Event Test Target

This serverless app simply accepts events and logs the event object.

## Local Development

Before attempting to package or deploy from a local checkout, please ensure that you have properly installed
the aws-cli tool and configured your credentials.

Instructions for installing aws-cli can be found [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).

Instructions for configuring your credentials can be found [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).


### Packaging Locally

In order to build and package locally, you will need to add the following file:

.config/cloudformation-package.json
```json
{
  "parameters": {
    "s3Bucket": "[S#_BUCKET_NAME]"
  }
}
```

Once the file is created, simply run `yarn package` from the project root.

### Deploying

To deploy, you neeed to add the following:

.config/cloudformation-deploy.json
```json
{
  "parameters": {
    "stackName": "[YOUR_STACK_NAME]",
    "capabilities": "CAPABILITY_IAM",
    "noFailOnEmptyChangeset": true
  }
}
```

Once the file is created, simply run `yarn deploy` from the project root.