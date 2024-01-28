pipeline {
    environment{
        DOCKER_HUB_CREDENTIALS_ID = "dockerhub_jlkatobo"
        SSH_CREDENTIALS_ID = "aws_key"
        SERVER_USER = "ubuntu"
        SERVER_IP = "35.175.238.136"
    }
    agent none
    stages{
        stage('build-webapp'){
            agent any
            steps{
                script{
                    sh "docker rm -f $(docker ps -aq)"
                    sh "docker compose up -d"
                }
            }
        }
        stage('test-webapp'){
            agent any
            steps{
                script{
                    sh """
                        curl -X GET http://localhost:1500 | grep -i 'SIGN IN'
                    """
                }
            }
        }
        //stage('artifact-webapp'){
            //agent any
            //steps{
                //script{
                    //withCredentials([usernamePassword(credentialsId: DOCKER_HUB_CREDENTIALS_ID, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                       // sh "docker login -u $USERNAME -p $PASSWORD"
                   // }
                   // sh """
                        //docker tag ${IMAGE_NAME}:${IMAGE_TAG} jlkatobo/${IMAGE_NAME}:${IMAGE_TAG}
                       // docker push jlkatobo/${IMAGE_NAME}:${IMAGE_TAG}
                   // """
                //}
            //}
        //}
        //stage('deployment-webapp'){
            //agent any
            //steps{
                //script{
                    // Utilisation de withCredentials pour récupérer la clé privée SSH
                    //withCredentials([file(credentialsId: SSH_CREDENTIALS_ID, variable: 'SSH_PRIVATE_KEY')]){
                        //sh """ 
                            //ssh -i $SSH_PRIVATE_KEY -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP docker pull jlkatobo/${IMAGE_NAME}:${IMAGE_TAG}
                            //ssh -i $SSH_PRIVATE_KEY -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP docker container rm -f $CONTAINER_NAME || true 
                            //ssh -i $SSH_PRIVATE_KEY -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP docker run --name $CONTAINER_NAME -d -p 1500:80 jlkatobo/${IMAGE_NAME}:${IMAGE_TAG} 
                        //"""
                    //}
                //}
           // }
        //}
    }
}
