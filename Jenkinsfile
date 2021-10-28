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
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }

    stage('Build') {
      steps { sh 'npm run-script build' }
    }
  }
}