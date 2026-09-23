pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        COMPOSE_PROJECT_NAME = "mini-project-devops"
        DOCKERHUB_CREDENTIALS = credentials('docker-hub-cred')
        IMAGE_TAG = "v${env.BUILD_NUMBER}"
        GITOPS_REPO = "https://github.com/sovichea99/mini-project-devops-gitops.git"
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

        stage('Update GitOps Manifest') {
            steps {
                sh '''
                    rm -rf gitops-repo
                    git clone https://github.com/sovichea99/mini-project-devops-gitops.git gitops-repo
                    cd gitops-repo
                    yq -i ".image.tag = \\"${IMAGE_TAG}\\"" frontend-helm/values.yaml
                    git config user.email "chea02310@gmail.com"
                    git config user.name "sovichea99"
                    git add .
                    git commit -m "Update image tag to ${IMAGE_TAG}"
                    git push
                '''
            }
        }
    }

    post {
        success {
            echo 'Built, pushed, and GitOps repo updated — ArgoCD will sync shortly.'
        }

        failure {
            echo 'Pipeline failed — check the stage logs above.'
        }
    }
}