pipeline {
    agent any

    environment {
        NODE_VERSION = 'Node 22.17.0' // Use the correct version
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
                // Debugging step to list the directory contents
                sh 'ls -al dist'  // Check if 'dist' folder is created and has files
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                // Update to use 'dist/**' instead of 'build/**'
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Build successful!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
