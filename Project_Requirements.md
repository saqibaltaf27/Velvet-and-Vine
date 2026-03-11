# Project 
Velvet & Vista Bespoke Event Portal - Automated Deployment Pipeline

## Overview
Velvet & Vine is a luxury event production agency that builds temporary digital portals for high-end weddings and corporate events.
Each portal contains curated photo galleries, event schedules, and vendor coordination details. These portals must be deployed quickly
while maintaing performance and brand consistency.

To streamline the workflow, the agency requires a standardized CI/CD pipeline that automatically builds and deploys these portals whenever the development team updates event content

## Requirements
1. A Static Event Portal Template
2. Media Optimization
    - Event planners frequently upload high-resolution RAW images exceeding 20MB. The pipeline must include an automated image compression stage that optimizes images for web delivery before deployment.
3. Multi-Environment Workflow (Staging, Production)
4. Automated Quality Checks
    - The CI Pipeline must included automated quality validation for ESLint to enforce consistent coding standards.
    - A smoke test script that verifies critical assests exist.
5. Deployment Integration
    - The final site must automatically deploy to a free hosting platform. This implementation uses Github pages for production and a staging preview branch.
6. Security Requirements
    - Deployment tokens and secrets must not be stored in code. All sensitive credentials must be stored using Github Secrets.


## Deliverables
1. Codebase ZIP: A complete package containing the event portal template, the pipeline configuration files (e.g., .github/workflows/ or .gitlab-ci.yml), and optimization scripts.
2. Public GitHub Repository: A live repository containing the source code and the visible history of successful pipeline runs.
3. Deployed Demo Links: URLs for both the "Staging" and "Production" environments showing the template in action.
4. Pipeline Visualization: Screenshots of the CI/CD dashboard showing a successful run, including the optimization and deployment stages.