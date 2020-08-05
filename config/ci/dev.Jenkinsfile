#!/usr/bin/env groovy

def project = 'drewestate'
def appName = 'Frontend service'
def slackChannel = 'drewestate-dev'
def isMainBranch = "${env.BRANCH_NAME}" == "dev/frontend"
def envVar = 'dev'

node {
    checkout scm

    if(isMainBranch != true) {
        deleteDir()
        currentBuild.result = 'SUCCESS'
        return
    }

    stage('Deploy image') {
        sh("./deploy -e ${envVar}")
    }

    stage('Notify on success') {
        slackSend (channel: "#${slackChannel}", color: 'good', message: "SUCCESSFUL updated DEV server: Service ${appName}. Build: #${env.BUILD_NUMBER}")
    }
}