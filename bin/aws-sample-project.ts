#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwsSampleProjectStack } from '../lib/aws-sample-project-stack';

const app = new cdk.App();
new AwsSampleProjectStack(app, 'AwsSampleProjectStack');
