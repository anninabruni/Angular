// pipeline {
//   agent {
//     docker { image 'node:latest' }
//   }
//   stages {
//     stage('Build') {
//       steps {
//           bat 'npm install ng build'
//       }
//     }

//   }
// }

pipeline {
  agent any
  stages {
    stage('Install') {
      steps { 
        sh 'npm install' 
        sh 'npm install -g @angular/cli@1.0.2'
        sh 'ng --version'
      }
    }

    stage('Build') {
      steps { sh 'ng build' }
    }
  }
}