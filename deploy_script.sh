#!/bin/bash
ibmcloud login -a cloud.ibm.com \
    --apikey $PIPELINE_BLUEMIX_API_KEY \
    -r us-south
ibmcloud target -o $CF_ORG -s $CF_SPACE
ibmcloud fn deploy --manifest serverless.yml
