pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        COMPOSE_PROJECT_NAME = "mini-project-devops"
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-cred')
        IMAGE_TAG = "v${env.BUILD_NUMBER}"
    }

    stages {
        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Build & Push Images') {
            steps {
                sh '''
                    docker build -t senji99/mini-project-backend:${IMAGE_TAG} ./backend
                    docker build -t senji99/mini-project-frontend:${IMAGE_TAG} ./frontend

                    docker push senji99/mini-project-backend:${IMAGE_TAG}
                    docker push senji99/mini-project-frontend:${IMAGE_TAG}
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker compose pull
                    docker compose up -d
                '''
            }
        }
    }

    post {
        success {
            echo 'Successfully built, pushed, and deployed.'
        }

        failure {
            echo 'Pipeline failed — check the stage logs above.'
        }
    }
}