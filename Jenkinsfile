pipeline {
    agent any

    environment {
        NODE_VERSION = 'Node 22.17.0' // Use the correct Node.js version you have installed
    }
  
    tools {
        nodejs "${NODE_VERSION}" // Use NodeJS installation configured in Jenkins
    }
     
    

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from your GitHub repo
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install all dependencies including Tailwind CSS
                sh 'npm install'
            }
        }
         stage('hold') {
            steps {
                // sleeping
                  sh 'sleep 60'
            }
        }

        stage('Build React App') {
            steps {
                // Run the build command (Vite will handle the Tailwind CSS build as part of this)
                sh 'npm run build'
                
                // Debugging step to check contents of the dist folder (build output)
                sh 'ls -al dist'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                // Archive build artifacts (output folder 'dist/**' instead of 'build/**')
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
