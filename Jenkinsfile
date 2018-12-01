pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'doing build stuff'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'doing test stuff'
                sh 'yarn test'
            }
            post {
                always {
                    publishHTML target: [
                        allowMissing         : false,
                        alwaysLinkToLastBuild: false,
                        keepAll             : true,
                        reportDir            : 'output/coverage/jest',
                        reportFiles          : 'index.html',
                        reportName           : 'Test Report'
                    ]
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'doing deploy stuff'
            }
        }
    }
    post {
        always {
            junit 'output/coverage/junit/junit.xml'
        }
      }
}