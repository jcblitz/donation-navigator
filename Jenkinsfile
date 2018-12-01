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
        }
        stage('Deploy') {
            steps {
                echo 'doing deploy stuff'
            }
        }
    }
}