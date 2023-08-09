# Make sure to execute using the following command:
# $ ENV=prod ./deploy.sh

# Add nvm to PATH.
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;

#!/usr/bin/env bash
BUCKET_NAME=topazjournal.xyz
DISTRIBUTION_ID=E2S7W91MWKXQYB

echo "-- INSTALLING PACKAGES --"
rm -rf build/ && \
rm -rf node_modules/ && \
nvm use && \
npm install

echo "-- BUILDING --"
npm run build:production

echo "-- DEPLOYING --"
aws s3 sync dist s3://$BUCKET_NAME
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --no-cli-pager
