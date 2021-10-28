pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build') {
      steps {
          bat 'npm install ng build'
      }
    }

  }
}