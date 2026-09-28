pipeline {

    // Run on any available Jenkins agent
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                // Jenkins downloads the code from GitHub
                checkout scm
            }
        }

        stage('Check Environment') {
            steps {
                // Check Node.js and npm are available
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install exact dependencies from package-lock.json
                bat 'npm ci'

                // Install Playwright browsers
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                // Run all Playwright tests
                bat 'npx playwright test'
            }
        }
    }

    post {

        // Run report publishing even when tests fail
        always {

            // Publish Playwright HTML report in Jenkins
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                keepAll: true,
                alwaysLinkToLastBuild: true,
                allowMissing: false
            ])

            // Save screenshots, traces, videos etc.
            archiveArtifacts artifacts: 'test-results/**/*',
                             allowEmptyArchive: true
        }
    }
}