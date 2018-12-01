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
        stage('Package') {
            sh 'yarn build'
            sh 'cd build; zip -r deploy.zip .'
        }
        stage('Deploy') {
            steps {
                echo 'doing deploy stuff'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'build/deploy.zip', fingerprint: true
            junit 'output/coverage/junit/junit.xml'
        }
      }
}