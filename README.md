# Azure Storage Static Website with Front Door

## 📌 Project Information

**Project ID:** 24CC3046-P080  
**Project Title:** Azure Storage Static Website with Front Door  
**Team:** T182  
**Team Size:** 4 Students  
**Tickets:** T080 and T182  
**Platform:** Microsoft Azure  

---

## 📖 Abstract

This project presents a simple, low-cost approach for hosting static websites using **Azure Blob Storage Static Website Hosting**, combined with **Azure Front Door** for global delivery and secure custom domains.

Static website files such as **HTML, CSS, JavaScript, and images** are stored in Azure Blob Storage and served directly to users. This eliminates the need to manage traditional web servers.

Azure Front Door acts as the global entry point and provides **HTTPS/TLS, managed certificates, CDN caching, custom-domain support, and routing rules**.

The goal of the project is to create a working, globally accessible website using a custom domain with HTTPS while gaining practical experience with Azure architecture, DNS, CDN, certificate management, and troubleshooting.

---

# 🎯 Problem Statement

Small businesses and departments often need professional websites but may not have the budget or technical resources to manage traditional web servers or platform-as-a-service infrastructure.

Traditional hosting can involve:

- Server management
- Server patching
- Recurring compute costs
- Scalability concerns
- CDN configuration
- SSL/TLS certificate management
- Global content delivery

This project addresses these challenges by using **Azure Blob Storage for static website hosting** and **Azure Front Door as the global edge layer**.

The solution aims to eliminate server management, reduce hosting complexity, and provide a fast, secure, and globally accessible static website.

---

# 🎯 Objectives

The main objectives of this project are:

1. Host a static website using Azure Blob Storage.
2. Avoid managing traditional web servers.
3. Use Azure Front Door for global content delivery.
4. Provide HTTPS/TLS access to website users.
5. Configure a custom domain through Azure Front Door.
6. Improve website performance using CDN caching.
7. Configure routing rules for Single Page Applications (SPA).
8. Configure DNS and custom-domain validation.
9. Understand the cost considerations of the architecture.
10. Gain practical experience with Azure cloud hosting.

---

# 🏗️ System Architecture

```text
                         INTERNET
                             |
                             v
                    +----------------+
                    |     USERS      |
                    | Browser/Mobile |
                    |    Desktop     |
                    +----------------+
                             |
                           HTTPS
                             |
                             v
                    +----------------+
                    |   Azure DNS    |
                    | Custom Domain  |
                    +----------------+
                             |
                             |
                             v
              +--------------------------------+
              |       AZURE FRONT DOOR         |
              |                                |
              |  • HTTPS / TLS                 |
              |  • Managed Certificate         |
              |  • Global CDN / Edge Caching   |
              |  • Routing Rules               |
              |  • Load Balancing              |
              |  • Security Features           |
              +--------------------------------+
                             |
                       Route Request
                             |
                             v
              +--------------------------------+
              |       AZURE BLOB STORAGE       |
              |        Static Website          |
              |                                |
              |          $web Container        |
              |                                |
              |  • index.html                  |
              |  • 404.html                    |
              |  • CSS                         |
              |  • JavaScript                  |
              |  • Images                      |
              +--------------------------------+
                             |
                             v
                       Website Content
                             |
                             v
                           USER
